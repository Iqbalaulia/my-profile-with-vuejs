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

			<Footer />
		</div>
	</transition>
</template>

<script>
export default {
	name: "Layout",
	components: {
		Navbar: () => import("./Navbar"),
		Footer: () => import("./Footer"),
	},
};
</script>
