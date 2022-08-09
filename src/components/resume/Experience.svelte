<script lang="ts">
	import type { ResumeSection } from 'src/resume'
	import UnderConstruction from '../UnderConstruction.svelte'
	import ResumeSectionHeader from './ResumeSectionHeader.svelte'

	export let section: ResumeSection<'work'>

	console.log(JSON.stringify(section))
</script>

<div class="js-resume-experience">
	<ResumeSectionHeader>Experience</ResumeSectionHeader>
	<UnderConstruction />
</div>
