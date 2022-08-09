<script lang="ts">
	import Three from 'src/components/Three.svelte'
	import { assets } from '$app/paths'

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
	let subtitle = 'porsche 930'
</script>

<svelte:head>
	<title>home | jacksonsalopek.com</title>
	<meta name="description" content="Home of Jackson Salopek" />
</svelte:head>
<Three bind:modelUrl bind:amplitude bind:oscillate bind:subtitle />
