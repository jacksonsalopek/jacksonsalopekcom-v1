<script lang="ts">
	const basePath = '/jacksonsalopekcom'
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
			name: 'Projects',
			href: '/projects/list'
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
			<a href={basePath + route.href}>{route.name}</a>
		{/each}
	</nav>
</header>
