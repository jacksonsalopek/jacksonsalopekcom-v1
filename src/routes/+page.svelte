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
	let subtitle = 'porsche 930'
</script>

<svelte:head>
	<title>home | jacksonsalopek.com</title>
	<meta name="description" content="Jackson Salopek | Full-stack Software Engineer" />
</svelte:head>
<div class="js-home">
	<div>
		<h4 class="js-home-text">
			<!-- <span style="color: transparent"
				>hi ! ☺ i'm jackson. i'm currently a software engineer at capital one. click the links above
				to learn more!</span
			> -->
		</h4>
	</div>
	<Three bind:modelUrl bind:amplitude bind:oscillate bind:subtitle />
</div>
