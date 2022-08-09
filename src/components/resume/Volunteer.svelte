<script lang="ts">
	import type { ResumeSection } from 'src/resume'
	import UnderConstruction from '../UnderConstruction.svelte'
	import ResumeSectionHeader from './ResumeSectionHeader.svelte'

	export let section: ResumeSection<'volunteer'>

	console.log(JSON.stringify(section))
</script>

<div class="js-resume-volunteer">
	<ResumeSectionHeader>Volunteer</ResumeSectionHeader>
	<UnderConstruction />
</div>
