<script lang="ts">
	import Navigation from 'src/components/Navigation.svelte'
	import { onMount } from 'svelte'
	import { dev } from '$app/env'
	import { navigating } from '$app/stores'
	import { isTrackingEnabled, load, trackPageview } from 'fathom-client'
	import '../app.scss'

	const handleNavigation = (url: URL) => {
		trackPageview({
			url: url.toString()
		})
	}

	$: if ($navigating) handleNavigation($navigating.to)

	onMount(() => {
		if (!dev) {
			console.info('Fathom Analytics tracking:', isTrackingEnabled())
			load('QYWVIGOF', {
				url: 'https://moving-blue.jacksonsalopek.com/script.js',
				includedDomains: ['jacksonsalopek.com'],
				honorDNT: true
			})
		}
	})
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
