<script lang="ts">
	import { afterUpdate, onMount } from 'svelte'

	const breakpoint = 1000

	export let routes: string[]
	export let hidden = false
	export let selection: string | undefined

	onMount(() => {
		// hidden =
		// 	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
		// 	window.innerWidth < breakpoint
		// window.addEventListener('resize', () => {
		// 	if (window.innerWidth < breakpoint) hidden = true
		// 	else hidden = false
		// })
		console.log(selection)
	})

	afterUpdate(() => {
		// hidden =
		// 	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
		// 	window.innerWidth < breakpoint
		// window.addEventListener('resize', () => {
		// 	if (window.innerWidth < breakpoint) hidden = true
		// 	else hidden = false
		// })
		console.log(selection)
	})
</script>

<div class="js-resume-navigation-container">
	<nav class="js-resume-navigation" class:hidden>
		{#each routes as route}
			<a href={`#${route}`} class:active={selection === route}>{route}</a>
		{/each}
	</nav>
</div>

<style lang="scss">
	.hidden {
		visibility: hidden;
	}
</style>
