<script lang="ts">
	import ResumeSectionHeader from './ResumeSectionHeader.svelte'
	import { onMount } from 'svelte'
	import { EVENTS, track } from 'src/shared/analytics'
	import type { ResumeSection } from 'src/shared/resume'

	export let section: ResumeSection<'volunteer'>
	export let volunteering = section.volunteer

	onMount(() => {
		track(EVENTS.load.component.resume.volunteer)
	})
</script>

<div class="js-resume-volunteer">
	<ResumeSectionHeader>Volunteer</ResumeSectionHeader>
	{#each volunteering as volunteer}
		<div class="js-resume-volunteer-item">
			<h4 class="js-resume-volunteer-organization">{volunteer.organization}</h4>
			<h5 class="js-resume-volunteer-position">{volunteer.position}</h5>
			<h5 class="js-resume-volunteer-summary">{volunteer.summary}</h5>
		</div>
	{/each}
</div>
