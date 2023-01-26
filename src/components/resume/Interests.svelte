<script lang="ts">
	import ResumeSectionHeader from './ResumeSectionHeader.svelte'
	import { onMount } from 'svelte'
	import { EVENTS, track } from 'src/shared/analytics'
	import type { ResumeSection } from 'src/shared/resume'

	export let section: ResumeSection<'interests'>
	export let interests = section.interests

	onMount(() => {
		track(EVENTS.load.component.resume.interests)
	})
</script>

<div class="js-resume-interests">
	<ResumeSectionHeader>Interests</ResumeSectionHeader>
	<ul>
		{#each interests as interest}
			<li><h5 class="js-resume-interest">{interest.name}</h5></li>
		{/each}
	</ul>
</div>
