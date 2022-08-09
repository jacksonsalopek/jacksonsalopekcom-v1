<script>
	import Navigation from 'src/components/Navigation.svelte'
	import '../app.scss'
</script>

<svelte:head>
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"
		rel="stylesheet"
	/>
	<meta charset="utf-8" />
</svelte:head>

<Navigation />
<slot />
