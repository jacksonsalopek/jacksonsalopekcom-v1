<script>
	import Navigation from 'src/components/Navigation.svelte'
	import '../app.scss'
</script>

<svelte:head>
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"
		rel="stylesheet"
	/>
</svelte:head>

<Navigation />
<slot />
