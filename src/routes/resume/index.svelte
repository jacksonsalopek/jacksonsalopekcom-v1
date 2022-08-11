<script lang="ts">
	import Certificates from 'src/components/resume/Certificates.svelte'
	import Education from 'src/components/resume/Education.svelte'
	import Experience from 'src/components/resume/Experience.svelte'
	import Interests from 'src/components/resume/Interests.svelte'
	import Languages from 'src/components/resume/Languages.svelte'
	import ResumeHeader from 'src/components/resume/ResumeHeader.svelte'
	import ResumeNavigation from 'src/components/resume/ResumeNavigation.svelte'
	import Skills from 'src/components/resume/Skills.svelte'
	import Volunteer from 'src/components/resume/Volunteer.svelte'
	import { onMount } from 'svelte'
	import { RESUME } from 'src/shared/resume'
	import type { ResumeKeys } from 'src/shared/resume'

	let routes = [
		...Object.keys(RESUME).filter((val) => {
			if (
				val === 'meta' ||
				val === 'basics' ||
				val === 'projects' ||
				val === 'work' ||
				val === 'certificates'
			)
				return false
			const obj = RESUME[val as ResumeKeys]
			if (Array.isArray(obj) && obj.length > 0) return true
			if (Object.keys(obj).length > 0) return true
			return false
		})
	]
	routes.splice(2, 0, 'experience')
	routes.splice(3, 0, 'certificates')

	$: selection = undefined as string | undefined

	let sections = {
		certificates: { certificates: RESUME.certificates },
		education: { education: RESUME.education },
		interests: { interests: RESUME.interests },
		languages: { languages: RESUME.languages },
		skills: { skills: RESUME.skills },
		volunteer: { volunteer: RESUME.volunteer },
		experience: { work: RESUME.work }
	}

	let header = 'Resume'

	onMount(() => {
		if (window.location.hash) selection = window.location.hash.substring(1)
		else window.location.hash = 'skills'
		console.log(selection)
		window.onhashchange = (e: HashChangeEvent) => {
			selection = e.newURL.split('#')[1]
		}
	})
</script>

<svelte:head>
	<title>resume | jacksonsalopek.com</title>
	<meta name="description" content="Jackson Salopek's Resume" />
</svelte:head>
<div class="js-resume">
	<ResumeHeader bind:content={header} />
	<ResumeNavigation bind:routes bind:selection />
	<div class="js-resume-content">
		{#if selection === 'skills'}
			<Skills bind:section={sections.skills} />
		{:else if selection === 'experience'}
			<Experience bind:section={sections.experience} />
		{:else if selection === 'education'}
			<Education bind:section={sections.education} />
		{:else if selection === 'volunteer'}
			<Volunteer bind:section={sections.volunteer} />
		{:else if selection === 'languages'}
			<Languages bind:section={sections.languages} />
		{:else if selection === 'interests'}
			<Interests bind:section={sections.interests} />
		{:else if selection === 'certificates'}
			<Certificates bind:section={sections.certificates} />
		{/if}
	</div>
</div>
