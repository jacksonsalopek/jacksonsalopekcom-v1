<script lang="ts">
	import type { ResumeSection } from 'src/resume'
	import UnderConstruction from '../UnderConstruction.svelte'
	import ResumeSectionHeader from './ResumeSectionHeader.svelte'

	export let section: ResumeSection<'interests'>

	console.log(JSON.stringify(section))
</script>

<div class="js-resume-interests">
	<ResumeSectionHeader>Interests</ResumeSectionHeader>
	<UnderConstruction />
</div>
