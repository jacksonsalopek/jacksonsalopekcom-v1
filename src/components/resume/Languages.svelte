<script lang="ts">
	import UnderConstruction from '../UnderConstruction.svelte'
	import ResumeSectionHeader from './ResumeSectionHeader.svelte'
	import type { ResumeSection } from 'src/shared/resume'

	export let section: ResumeSection<'languages'>

	console.log(JSON.stringify(section))
</script>

<div class="js-resume-languages">
	<ResumeSectionHeader>Languages</ResumeSectionHeader>
	<UnderConstruction />
</div>
