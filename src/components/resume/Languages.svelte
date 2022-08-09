<script lang="ts">
	import type { ResumeSection } from 'src/resume'
	import UnderConstruction from '../UnderConstruction.svelte'
	import ResumeSectionHeader from './ResumeSectionHeader.svelte'

	export let section: ResumeSection<'languages'>

	console.log(JSON.stringify(section))
</script>

<div class="js-resume-languages">
	<ResumeSectionHeader>Languages</ResumeSectionHeader>
	<UnderConstruction />
</div>
