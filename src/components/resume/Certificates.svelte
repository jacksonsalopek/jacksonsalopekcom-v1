<script lang="ts">
	import ResumeSectionHeader from './ResumeSectionHeader.svelte'
	import { onMount } from 'svelte'
	import { EVENTS, track } from 'src/shared/analytics'
	import type { ResumeSection } from 'src/shared/resume'

	export let section: ResumeSection<'certificates'>
	export let certificates = section.certificates

	onMount(() => {
		track(EVENTS.load.component.resume.certificates)
	})
</script>

<div class="js-resume-certificates">
	<ResumeSectionHeader>Certificates</ResumeSectionHeader>
	{#each certificates as certificate}
		<div class="js-resume-certificate">
			<h4 class="js-resume-certificate-issuer">{certificate.issuer}</h4>
			<a href={certificate.url}><h5 class="js-resume-certificate-name">{certificate.name}</h5></a>
			<h5 class="js-resume-certificate-date">{certificate.date}</h5>
			<h5 class="js-resume-certificate-summary">{certificate.summary}</h5>
		</div>
	{/each}
</div>
