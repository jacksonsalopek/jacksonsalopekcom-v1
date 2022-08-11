<script lang="ts">
	import UnderConstruction from '../UnderConstruction.svelte'
	import ResumeSectionHeader from './ResumeSectionHeader.svelte'
	import { onMount } from 'svelte'
	import { EVENTS, track } from 'src/shared/analytics'
	import type { ResumeSection } from 'src/shared/resume'

	export let section: ResumeSection<'certificates'>

	onMount(() => {
		track(EVENTS.load.component.resume.certificates)
	})
</script>

<div class="js-resume-certificates">
	<ResumeSectionHeader>Certificates</ResumeSectionHeader>
	<UnderConstruction />
</div>
