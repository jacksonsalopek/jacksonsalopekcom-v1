<script lang="ts">
	import UnderConstruction from '../UnderConstruction.svelte'
	import ResumeSectionHeader from './ResumeSectionHeader.svelte'
	import type { ResumeSection } from 'src/shared/resume'

	export let section: ResumeSection<'work'>

	console.log(JSON.stringify(section))
</script>

<div class="js-resume-experience">
	<ResumeSectionHeader>Experience</ResumeSectionHeader>
	<UnderConstruction />
</div>
