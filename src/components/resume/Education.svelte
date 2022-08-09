<script lang="ts">
	import { assets } from '$app/paths'
	import type { ResumeSection } from 'src/resume'
	import Three from '../Three.svelte'
	import ResumeSectionHeader from './ResumeSectionHeader.svelte'

	export let section: ResumeSection<'education'>

	const config = {
		vt: {
			modelUrl: `${assets}/stl/vt.stl`,
			amplitude: 1.5,
			oscillate: true,
			subtitle: undefined
		}
	}

	let modelUrl = config.vt.modelUrl
	let amplitude = config.vt.amplitude
	let oscillate = config.vt.oscillate
</script>

<div class="js-resume-education">
	<ResumeSectionHeader>Education</ResumeSectionHeader>
	<h4>
		{`${section.education[0].institution} (${section.education[0].start.year} - ${section.education[0].end.year})`}
	</h4>
	<h5>{`${section.education[0].studyType}, ${section.education[0].area}`}</h5>
	<h5>{section.education[0].description}</h5>
	<Three bind:modelUrl bind:amplitude bind:oscillate />
</div>
