<!-- @format -->

<template>
	<Layout>
		<div class="container">
			<SectionDescribe />
		</div>
	</Layout>
</template>
<script>
export default {
	name: "homepage",
	components: {
		Layout: () => import("@/views/Layout"),
		SectionDescribe: () => import("@/components/home/describe"),
		// SectionJourney: () => import("@/components/Journey"),
		// SectionMe: () => import("@/components/Me"),
		// SectionWorking: () => import("@/components/Working"),
	},
};
</script>
