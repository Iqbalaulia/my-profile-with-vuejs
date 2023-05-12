<!-- @format -->

<template>
	<transition>
		<div>
			<!-- Navbar -->
			<Navbar />

			<!-- Content -->
			<div>
				<slot />
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: "Layout",
	components: {
		Navbar: () => import("./Navbar"),
	},
};
</script>
