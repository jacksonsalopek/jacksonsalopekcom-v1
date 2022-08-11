<script lang="ts">
	import UnderConstruction from '../UnderConstruction.svelte'
	import ResumeSectionHeader from './ResumeSectionHeader.svelte'
	import { onMount } from 'svelte'
	import { EVENTS, track } from 'src/shared/analytics'
	import type { ResumeSection } from 'src/shared/resume'

	export let section: ResumeSection<'languages'>

	onMount(() => {
		track(EVENTS.load.component.resume.languages)
	})
</script>

<div class="js-resume-languages">
	<ResumeSectionHeader>Languages</ResumeSectionHeader>
	<UnderConstruction />
</div>
