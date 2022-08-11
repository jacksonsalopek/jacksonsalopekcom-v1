<script lang="ts">
	import UnderConstruction from '../UnderConstruction.svelte'
	import ResumeSectionHeader from './ResumeSectionHeader.svelte'
	import { onMount } from 'svelte'
	import { EVENTS, track } from 'src/shared/analytics'
	import type { ResumeSection } from 'src/shared/resume'

	export let section: ResumeSection<'work'>

	onMount(() => {
		track(EVENTS.load.component.resume.experience)
	})
</script>

<div class="js-resume-experience">
	<ResumeSectionHeader>Experience</ResumeSectionHeader>
	<UnderConstruction />
</div>
