<script>
	import Navigation from 'src/components/Navigation.svelte'
	import { dev } from '$app/env'
	import '../app.scss'
</script>

<svelte:head>
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"
		rel="stylesheet"
	/>
	<meta charset="utf-8" />
	{#if !dev}
		<script
			src="https://cdn.usefathom.com/script.js"
			data-spa="auto"
			data-site="QYWVIGOF"
			defer></script>
	{/if}
</svelte:head>

<Navigation />
<slot />
