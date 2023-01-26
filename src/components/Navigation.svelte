<script lang="ts">
	const basePath = '/'
	const routes = [
		{
			name: 'Resume',
			href: '/resume#skills'
		},
		{
			name: 'Works',
			href: '/works'
		},
		{
			name: 'source',
			href: 'https://github.com/jacksonsalopek/jacksonsalopekcom'
		},
		{
			name: 'Contact',
			href: '/contact'
		}
	]
</script>

<header class="js-navigation window">
	<div class="title-bar">
		<div class="close">
			<span class="hidden">X</span>
		</div>
		<h1 class="title"><a href={basePath}>Jackson Salopek</a></h1>
		<div class="resize">
			<span class="hidden">Resize</span>
		</div>
	</div>
	<nav>
		{#each routes as route}
			{#if route.href.charAt(0) !== '/'}
				<a href={route.href} target="_blank" rel="noreferrer">{route.name}</a>
			{:else}
				<a href={route.href}>{route.name}</a>
			{/if}
		{/each}
	</nav>
</header>
