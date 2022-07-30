<script lang="ts">
	import { assets } from '$app/paths'
	import Three from 'src/components/Three.svelte'

	const config = {
		porsche: {
			modelUrl: `${assets}/stl/porsche.stl`,
			amplitude: 1 / 3,
			oscillate: false
		},
		vt: {
			modelUrl: `${assets}/stl/vt.stl`,
			amplitude: 1.5,
			oscillate: true
		}
	}

	let modelUrl = config.porsche.modelUrl
	let amplitude = config.porsche.amplitude
	let oscillate = config.porsche.oscillate
</script>

<Three bind:modelUrl bind:amplitude bind:oscillate />
