<!-- @format -->

<template>
	<Layout 
		:experiencesId="`experience-section`" 
		:recomendationId="`recomendation-section`"
		:projectId="`project-section`"
		:photographyId="`photography-section`"
	>
		<div>
			<SectionDescribe />
			<Me />
			<Experiences id="experience-section"/>
			<Recomendation id="recomendation-section" />
			<MyProject id="project-section" />
			<Photography id="photography-section"/>
		</div>
	</Layout>
</template>
<script>
export default {
	name: "homepage",
	metaInfo: {
		title: "Iqbalaulia",
		titleTemplate: "%s | Frontend Engineer",
	},
	components: {
		Layout: () => import("@/views/Layout"),
		SectionDescribe: () => import("@/components/home/describe"),
		Me: () => import("@/components/home/me"),
		Experiences: () => import("@/components/home/experiences"),
		Recomendation: () => import("@/components/home/recomendation"),
		MyProject: () => import("@/components/home/project"),
		Photography: () => import('@/components/home/photography'),
		// SectionJourney: () => import("@/components/Journey"),
		// SectionWorking: () => import("@/components/Working"),
	},

	methods: {
		
	}
};
</script>
