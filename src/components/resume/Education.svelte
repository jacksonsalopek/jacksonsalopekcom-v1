<script lang="ts">
	import ResumeSectionHeader from './ResumeSectionHeader.svelte'
	import { onMount } from 'svelte'
	import { EVENTS, track } from 'src/shared/analytics'
	import type { ResumeSection } from 'src/shared/resume'

	export let section: ResumeSection<'education'>

	onMount(() => {
		track(EVENTS.load.component.resume.education)
	})
</script>

<div class="js-resume-education">
	<ResumeSectionHeader>Education</ResumeSectionHeader>
	<h4>
		{`${section.education[0].institution} (${section.education[0].start.year} - ${section.education[0].end.year})`}
	</h4>
	<h5>{`${section.education[0].studyType}, ${section.education[0].area}`}</h5>
	<h5>{section.education[0].description}</h5>
</div>
