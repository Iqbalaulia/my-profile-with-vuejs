<!-- @format -->

<template>
	<div>
		<b-navbar toggleable="lg" class="nav-my-profile">
			<div class="container">
				<!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->
				<b-navbar-brand class="logo-custom" href="#">
					<img
						src="@/assets/images/logo/logo_iqbal_transparent.png"
						class="d-inline-block align-top"
						alt="Logo"
						v-once />
				</b-navbar-brand>
				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
					<!-- Right aligned nav items -->
					<b-navbar-nav class="text-center">
						<b-nav-item class="nav-item-active" href="#">Home</b-nav-item>
						<b-nav-item href="#">Experience</b-nav-item>
						<b-nav-item href="#">Recomendation</b-nav-item>
						<b-nav-item href="#">Project</b-nav-item>
						<b-nav-item href="#">Photography</b-nav-item>
						<b-nav-item href="#">Journal</b-nav-item>
					</b-navbar-nav>
				</b-collapse>
			</div>
		</b-navbar>
	</div>
</template>
<script>
export default {
	data(){
		return{

		}
	},

	methods: {
		
	}
}
</script>