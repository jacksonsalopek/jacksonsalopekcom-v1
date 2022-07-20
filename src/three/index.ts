import {
	BufferGeometry,
	Clock,
	Color,
	DoubleSide,
	Mesh,
	MeshStandardMaterial,
	PerspectiveCamera,
	PointLight,
	Scene,
	WebGLRenderer
} from 'three'
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import type { Config } from 'src/types'
import { three } from 'src/stores'

export namespace JSThree {
	const CONFIG: Config = {
		color: '#fff',
		backgroundColor: '#000',
		charSet: ' .:-+*=%@#',
		resolution: 0.205,
		modelUrl: './stl/porsche.stl'
	}

	function createEffect() {
		if (!STATE.renderer) throw new Error('WebGLRenderer not instantiated!')
		const effect = new AsciiEffect(STATE.renderer, CONFIG.charSet, {
			invert: true,
			resolution: CONFIG.resolution
		})
		effect.setSize(window.innerWidth, window.innerHeight)
		effect.domElement.style.color = CONFIG.color
		effect.domElement.style.backgroundColor = CONFIG.backgroundColor
		return effect
	}

	function render(effect: AsciiEffect) {
		effect.render(STATE.scene, STATE.camera)
		window.requestAnimationFrame(tick)
	}

	export function toggleRotation() {
		STATE.rotate = !STATE.rotate
	}

	function tick() {
		if (STATE.effect) {
			if (STATE.rotate) {
				STATE.mesh.rotation.z = STATE.clock.getElapsedTime() / 3
				render(STATE.effect)
			} else {
				render(STATE.effect)
			}
		}
	}

	function onLoad(geometry: BufferGeometry) {
		STATE.mesh.material = STATE.material
		STATE.mesh.geometry = geometry

		geometry.computeVertexNormals()

		STATE.mesh.geometry.center()
		STATE.mesh.rotation.x = (-90 * Math.PI) / 180
		STATE.mesh.geometry.computeBoundingBox()

		const boundingBox = STATE.mesh.geometry.boundingBox
		if (boundingBox) {
			STATE.mesh.position.y = (boundingBox.max.z - boundingBox.min.z) / 5
			STATE.camera.position.x = boundingBox.max.x * 4
			STATE.camera.position.y = boundingBox.max.y
			STATE.camera.position.z = boundingBox.max.z * 3
		}

		STATE.scene.add(STATE.mesh)
		STATE.controls = new OrbitControls(STATE.camera, STATE.domElement)

		tick()
	}

	function onResize() {
		if (!STATE.renderer) throw new Error('WebGLRenderer not instantiated!')
		STATE.camera.aspect = window.innerWidth / window.innerHeight
		STATE.camera.updateProjectionMatrix()
		STATE.renderer.setSize(window.innerWidth, window.innerHeight)
		STATE.effect?.setSize(window.innerWidth, window.innerHeight)
	}

	export function bootstrap() {
		STATE.renderer = new WebGLRenderer()
		STATE.camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000)
		STATE.lights[0].position.set(100, 100, 400)
		STATE.lights[1].position.set(-500, 100, -400)
		STATE.scene.add(...STATE.lights)
		STATE.scene.background = new Color(CONFIG.backgroundColor)
		STATE.effect = createEffect()
		STATE.domElement = document.body.appendChild(STATE.effect.domElement)
		STATE.stlLoader.load(CONFIG.modelUrl, onLoad)
		window.addEventListener('resize', onResize)
		return STATE.domElement
	}
}
