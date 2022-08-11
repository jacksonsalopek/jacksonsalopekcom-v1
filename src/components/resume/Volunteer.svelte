<script lang="ts">
	import UnderConstruction from '../UnderConstruction.svelte'
	import ResumeSectionHeader from './ResumeSectionHeader.svelte'
	import { onMount } from 'svelte'
	import { EVENTS, track } from 'src/shared/analytics'
	import type { ResumeSection } from 'src/shared/resume'

	export let section: ResumeSection<'volunteer'>

	onMount(() => {
		track(EVENTS.load.component.resume.volunteer)
	})
</script>

<div class="js-resume-volunteer">
	<ResumeSectionHeader>Volunteer</ResumeSectionHeader>
	<UnderConstruction />
</div>
