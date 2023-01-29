<script lang="ts">
	import WorkItem from 'src/components/work/WorkItem.svelte'
	import WorkRow from 'src/components/work/WorkRow.svelte'
</script>

<svelte:head>
	<title>works | jacksonsalopek.com</title>
	<meta name="description" content="Jackson Salopek's Works" />
</svelte:head>
<div class="js-works">
	<h1 class="js-works-header">works</h1>
	<div class="js-works-list">
		<WorkRow>
			<WorkItem
				title="teoti landing page"
				description="Initial landing page for Teoti. Utilized Vue 3 and custom brand SCSS to provide working component demos."
				image="teoti.png"
				imageAltText="teoti landing page"
				url="https://teoti.io/"
			/>
			<WorkItem
				title="terra pay"
				description="Application by Teoti for easily sending assets on the Terra blockchain. Developed with Vue 3 and Terra JS SDK."
				image="terrapay.png"
				imageAltText="terra pay"
				url="https://terrapay.money/"
			/>
		</WorkRow>
		<WorkRow>
			<WorkItem
				title="botw vr"
				description="OpenGL Cemu mod to split rendering into 2 eyes and output to headset, including motion-tracking."
				image="botwvr.png"
				imageAltText="breath of the wild virtual reality mod"
				url="https://www.youtube.com/watch?v=iuppiXxyzjY"
			/>
			<WorkItem
				title="r/chelseafc"
				description="CSS styling for the Chelsea football club subreddit"
				image="rchelseafc.png"
				imageAltText="chelsea football club subreddit"
				url="https://old.reddit.com/r/chelseafc/"
			/>
		</WorkRow>
		<WorkRow>
			<WorkItem
				title="r/ludwigahgren"
				description="CSS styling for the Ludwig Ahgren content creator subreddit"
				image="rludwigahgren.png"
				imageAltText="ludwig subreddit"
				url="https://old.reddit.com/r/ludwigahgren/"
			/>
			<WorkItem
				title="r/pointcrow"
				description="CSS styling for the PointCrow content creator subreddit"
				image="rpointcrow.png"
				imageAltText="pointcrow subreddit"
				url="https://old.reddit.com/r/pointcrow/"
			/>
		</WorkRow>
		<WorkRow>
			<WorkItem
				title="temporal"
				description="simple budgeting app for viewing expenses and balances at a given point in time"
				image="temporal.png"
				imageAltText="temporal budgeting app"
				url="https://github.com/jacksonsalopek/temporal"
			/>
		</WorkRow>
	</div>
</div>
