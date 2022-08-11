<script lang="ts">
	import { dev } from '$app/env'
	import { navigating } from '$app/stores'
	import Navigation from 'src/components/Navigation.svelte'
	import { onMount } from 'svelte'
	import { load } from 'fathom-client'
	import { APP_ID, handleNavigation } from 'src/shared/analytics'
	import '../app.scss'

	$: if ($navigating) handleNavigation($navigating.to)

	onMount(() => {
		if (!dev) {
			load(APP_ID, {
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
