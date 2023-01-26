<script lang="ts">
	import ResumeSectionHeader from './ResumeSectionHeader.svelte'
	import { onMount } from 'svelte'
	import { EVENTS, track } from 'src/shared/analytics'
	import type { ResumeSection } from 'src/shared/resume'

	export let section: ResumeSection<'work'>
	export let experiences = section.work
	export const getMonthString = (month?: number) => {
		if (!month) return '01'
		if (month < 10) return `0${month}`
		else return `${month}`
	}

	onMount(() => {
		track(EVENTS.load.component.resume.experience)
	})
</script>

<div class="js-resume-experience">
	<ResumeSectionHeader>Experience</ResumeSectionHeader>
	{#each experiences as experience}
		<div class="js-resume-experience-item">
			<span class="js-resume-experience-item-header">
				{#if experience.url !== ''}
					<a href={experience.url}
						><h4 class="js-resume-experience-company">{experience.company}</h4></a
					>
				{:else}
					<h4 class="js-resume-experience-company">{experience.company}</h4>
				{/if}
				<h5 class="js-resume-experience-duration">
					{#if experience.isCurrentRole}
						{experience.start.year}.{getMonthString(experience.start.month)} - PRESENT
					{:else}
						{experience.start.year}.{getMonthString(experience.start.month)} - {experience.end
							.year}.{getMonthString(experience.end.month)}
					{/if}
				</h5>
			</span>
			<div class="js-resume-experience-highlights">
				<ul style="list-style-type: '› '">
					{#each experience.highlights as highlight}
						<li><span class="js-resume-experience-highlight">{highlight}</span></li>
					{/each}
				</ul>
			</div>
		</div>
		<br />
	{/each}
</div>
