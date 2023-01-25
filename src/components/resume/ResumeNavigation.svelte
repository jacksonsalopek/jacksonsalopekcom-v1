<script lang="ts">
	export let routes: string[]
	export let selection: string | undefined
</script>

<div class="js-resume-navigation-container">
	<nav class="js-resume-navigation">
		{#each routes as route}
			<a href={`#${route}`} class:active={selection === route}>{route}</a>
		{/each}
	</nav>
</div>
