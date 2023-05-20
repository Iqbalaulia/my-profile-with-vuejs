<!-- @format -->

<template>
	<Layout>
		<div>
			<SectionDescribe />
			<Me />
			<Experiences />
			<Recomendation />
		</div>
	</Layout>
</template>
<script>
export default {
	name: "homepage",
	components: {
		Layout: () => import("@/views/Layout"),
		SectionDescribe: () => import("@/components/home/describe"),
		Me: () => import("@/components/home/me"),
		Experiences: () => import("@/components/home/experiences"),
		Recomendation: () => import("@/components/home/recomendation"),
		// SectionJourney: () => import("@/components/Journey"),
		// SectionMe: () => import("@/components/Me"),
		// SectionWorking: () => import("@/components/Working"),
	},
};
</script>
