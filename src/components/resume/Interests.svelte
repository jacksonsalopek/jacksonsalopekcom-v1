<script lang="ts">
	import UnderConstruction from '../UnderConstruction.svelte'
	import ResumeSectionHeader from './ResumeSectionHeader.svelte'
	import { onMount } from 'svelte'
	import { EVENTS, track } from 'src/shared/analytics'
	import type { ResumeSection } from 'src/shared/resume'

	export let section: ResumeSection<'interests'>

	onMount(() => {
		track(EVENTS.load.component.resume.interests)
	})
</script>

<div class="js-resume-interests">
	<ResumeSectionHeader>Interests</ResumeSectionHeader>
	<UnderConstruction />
</div>
