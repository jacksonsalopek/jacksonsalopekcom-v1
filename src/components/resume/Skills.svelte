<script lang="ts">
	import ResumeSectionHeader from './ResumeSectionHeader.svelte'
	import type { ResumeSection } from 'src/shared/resume'

	export let section: ResumeSection<'skills'>
	type SkillsMap = { [years: number]: typeof section.skills }

	export let skills: SkillsMap = section.skills.reduce((accum, curr) => {
		if (accum[curr.rating] && Array.isArray(accum[curr.rating]))
			return {
				...accum,
				[curr.rating]: [...accum[curr.rating], curr]
			}
		else
			return {
				...accum,
				[curr.rating]: [curr]
			}
	}, {} as SkillsMap)
	export let skillKeysDescending = Object.keys(skills).sort((a: string, b: string) => +b - +a)
</script>

<div class="js-resume-skills">
	<ResumeSectionHeader>Skills</ResumeSectionHeader>
	{#each skillKeysDescending as skillRating}
		<div class="js-resume-skills-group" id={`js-resume-skills-${skillRating}`}>
			{#each skills[+skillRating] as skill}
				<div class="js-resume-skill">
					<h4 class="js-resume-skill-name">{skill.name}</h4>
					<h4 class="js-resume-skill-rating">
						{#each [...Array(5).keys()] as rating}
							{#if rating < +skillRating}
								■
							{:else}
								□
							{/if}
						{/each}
					</h4>
				</div>
			{/each}
		</div>
	{/each}
</div>
