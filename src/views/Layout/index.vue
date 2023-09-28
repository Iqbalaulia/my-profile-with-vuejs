<!-- @format -->

<template>
	<transition>
		<div>
			<!-- Navbar -->
			<Navbar 
				:experiencesId="experiencesId" 
				:recomendationId="recomendationId"
				:projectId="projectId"
				:photographyId="photographyId"
				:journalId="journalId"
			/>

			<!-- Content -->
			<div>
				<slot />
			</div>

			<Footer />
			<ScrollTop />
		</div>
	</transition>
</template>

<script>
export default {
	name: "Layout",
	props:{
		experiencesId:{
			type: String,
		},recomendationId:{
			type: String,
		},projectId:{
			type: String,
		},photographyId:{
			type: String,
		},journalId:{
			type: String,
		},
	},
	components: {
		Navbar: () => import("./Navbar"),
		Footer: () => import("./Footer"),
		ScrollTop: () => import('@/components/package/scroll-top')
	},
};
</script>
