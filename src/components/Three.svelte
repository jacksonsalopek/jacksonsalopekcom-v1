<script lang="ts">
	import { assets } from '$app/paths'
	import { onDestroy, onMount } from 'svelte'
	import { BufferGeometry, Color, PerspectiveCamera, WebGLRenderer } from 'three'
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
	import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js'
	import type { ThreeConfig } from 'src/shared/types'
	import { three } from 'src/stores'

	export let modelUrl = `${assets}/stl/porsche.stl`
	export let oscillate = true
	export let amplitude = 1 / 3
	export let subtitle: string | undefined = undefined

	const CONFIG: ThreeConfig = {
		color: '#fff',
		backgroundColor: '#000',
		charSet: ' .:-+*=%@#',
		resolution: 0.205,
		modelUrl
	}

	function createEffect() {
		if (!$three.renderer) throw new Error('WebGLRenderer not instantiated!')
		const effect = new AsciiEffect($three.renderer, CONFIG.charSet, {
			invert: true,
			resolution: CONFIG.resolution
		})
		effect.setSize(
			window.innerWidth - (window.innerWidth * 80) / window.innerHeight,
			window.innerHeight - 80
		)
		effect.domElement.style.color = CONFIG.color
		effect.domElement.style.backgroundColor = CONFIG.backgroundColor
		return effect
	}

	function render(effect: AsciiEffect) {
		effect.render($three.scene, $three.camera)
		window.requestAnimationFrame(tick)
	}

	export function toggleRotation() {
		$three.rotate = !$three.rotate
	}

	function tick() {
		if ($three.effect) {
			if ($three.rotate) {
				$three.mesh.rotation.z = $three.clock.getElapsedTime() / 3
				if (oscillate)
					$three.mesh.rotation.y = amplitude * Math.sin($three.clock.getElapsedTime() / 3)
				render($three.effect)
			} else {
				render($three.effect)
			}
		}
	}

	function adjustCameraZoom() {
		if (
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
		) {
			$three.camera.zoom = 0.5
			$three.camera.updateProjectionMatrix()
			return true
		}
		if (window.innerWidth < 500) {
			$three.camera.zoom = 0.35
			$three.camera.updateProjectionMatrix()
			return true
		}
		if (window.innerWidth < 600) {
			$three.camera.zoom = 0.4
			$three.camera.updateProjectionMatrix()
			return true
		}
		if (window.innerWidth < 800) {
			$three.camera.zoom = 0.5
			$three.camera.updateProjectionMatrix()
			return true
		}
		if (window.innerWidth < 1500) {
			$three.camera.zoom = 0.7
			$three.camera.updateProjectionMatrix()
			return true
		}
		$three.camera.zoom = 1
		$three.camera.updateProjectionMatrix()
		return true
	}

	function onLoad(geometry: BufferGeometry) {
		$three.mesh.material = $three.material
		$three.mesh.geometry = geometry

		geometry.computeVertexNormals()

		$three.mesh.geometry.center()
		$three.mesh.rotation.x = (-90 * Math.PI) / 180
		$three.mesh.geometry.computeBoundingBox()

		const boundingBox = $three.mesh.geometry.boundingBox
		if (boundingBox) {
			$three.mesh.position.y = (boundingBox.max.z - boundingBox.min.z) / 5
			$three.camera.position.x = boundingBox.max.x * 4
			$three.camera.position.y = boundingBox.max.y
			$three.camera.position.z = boundingBox.max.z * 3
			adjustCameraZoom()
		}

		$three.scene.add($three.mesh)
		$three.controls = new OrbitControls($three.camera, $three.domElement)
		$three.controls.enableZoom = true

		tick()
	}

	function onResize() {
		if (!$three.renderer) throw new Error('WebGLRenderer not instantiated!')
		$three.camera.aspect = window.innerWidth / window.innerHeight
		if (!adjustCameraZoom()) {
			$three.camera.updateProjectionMatrix()
		}
		$three.renderer.setSize(
			window.innerWidth - (window.innerWidth * 80) / window.innerHeight,
			window.innerHeight - 80
		)
		$three.effect?.setSize(
			window.innerWidth - (window.innerWidth * 80) / window.innerHeight,
			window.innerHeight - 80
		)
	}

	export function bootstrap() {
		$three.renderer = new WebGLRenderer()
		$three.camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight)
		$three.lights[0].position.set(100, 100, 400)
		$three.lights[1].position.set(-500, 100, -400)
		$three.scene.add(...$three.lights)
		$three.scene.background = new Color(CONFIG.backgroundColor)
		$three.effect = createEffect()
		$three.stlLoader.load(CONFIG.modelUrl, onLoad)
		return $three.effect.domElement
	}

	onMount(() => {
		console.info('Three.svelte: Beginning scene bootstrapping...')
		$three.domElement = bootstrap()
		$three.domElement.style.background = 'transparent'
		if ($three.effect) document.getElementById('js-three')?.appendChild($three.effect.domElement)
		console.info('Three.svelte: Scene bootstrapped!')
	})

	onDestroy(() => {
		$three.scene.remove($three.mesh)
		$three.mesh.geometry.dispose()
		$three.material.dispose()
		three.reset()
	})
</script>

<svelte:window on:resize={onResize} />
<div class="js-animation-container">
	<div id="js-three" bind:this={$three.domElement} />
	{#if !$three.domElement}
		<code>loading...</code>
	{/if}
	{#if subtitle}
		<code class="subtitle">{subtitle}</code>
	{/if}
</div>
