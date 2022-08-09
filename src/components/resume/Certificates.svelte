<script lang="ts">
	import UnderConstruction from '../UnderConstruction.svelte'
	import ResumeSectionHeader from './ResumeSectionHeader.svelte'
	import type { ResumeSection } from 'src/resume'

	export let section: ResumeSection<'certificates'>

	console.log(JSON.stringify(section))
</script>

<div class="js-resume-certificates">
	<ResumeSectionHeader>Certificates</ResumeSectionHeader>
	<UnderConstruction />
</div>
