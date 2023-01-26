<script lang="ts">
	import ResumeSectionHeader from './ResumeSectionHeader.svelte'
	import { onMount } from 'svelte'
	import { EVENTS, track } from 'src/shared/analytics'
	import type { ResumeSection } from 'src/shared/resume'

	export let section: ResumeSection<'languages'>
	export let languages = section.languages

	onMount(() => {
		track(EVENTS.load.component.resume.languages)
	})
</script>

<div class="js-resume-languages">
	<ResumeSectionHeader>Languages</ResumeSectionHeader>
	{#each languages as language}
		<div class="js-resume-language">
			<h4 class="js-resume-language-name">{language.language}</h4>
			<h5 class="js-resume-language-fluency">{language.fluency}</h5>
		</div>
	{/each}
</div>
