<!-- @format -->

<template>
	<layout 
		:experiencesId="`experience-section`" 
		:recomendationId="`recomendation-section`"
		:projectId="`project-section`"
	>
		<div>
			<component-describe />
			<component-me/>
			<component-experience id="experience-section"/>
			<component-recomendation id="recomendation-section" />
			<component-my-project id="project-section" />
		</div>
	</layout>
</template>
<script>
export default {
	name: "homepage",
	metaInfo: {
		title: "Iqbalaulia",
		titleTemplate: "%s | Frontend Engineer",
	},
	components: {
		// SectionWorking: () => import("@/components/Working"),
	},

	methods: {
		
	}
};
</script>
