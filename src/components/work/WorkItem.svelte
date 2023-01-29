<script lang="ts">
	import { assets } from '$app/paths'

	export let image: string
	export let imageAltText: string
	export let title: string
	export let description: string
	export let url: string

	$: imagePath = setImagePath(image)

	const setImagePath = (imageFile: string) => {
		if (imageFile.endsWith('.png')) return `${assets}/png/${imageFile}`
		return `${assets}/${imageFile}`
	}
</script>

<div class="one-half column js-works-item">
	<div class="js-works-item-image"><img src={imagePath} alt={imageAltText} /></div>
	<a href={url} target="_blank" rel="noreferrer"><h4 class="js-works-item-title">{title}</h4></a>
	<h5 class="js-works-item-description">{description}</h5>
</div>
