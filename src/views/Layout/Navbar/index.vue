<!-- @format -->

<template>
	<div>
		<b-navbar toggleable="lg" class="nav-my-profile">
			<div class="container">
				<b-navbar-brand class="logo-custom" href="#">
					<img
						src="@/assets/images/logo/logo_iqbal_transparent.png"
						class="d-inline-block align-top"
						alt="Logo"
						v-once />
				</b-navbar-brand>
				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav class="text-center">
						<b-nav-item class="" href="/">Home</b-nav-item>
						<b-nav-item :class="active === `experience` ? `nav-item-active` : ``" @click="sectionToGo('experience')" href="#">Experience</b-nav-item>
						<b-nav-item :class="active === `recomendation` ? `nav-item-active` : ``" @click="sectionToGo('recomendation')" href="#">Recomendation</b-nav-item>
						<b-nav-item :class="active === `project` ? `nav-item-active` : ``" @click="sectionToGo('project')" href="#">Project</b-nav-item>
						<b-nav-item :class="active === `photography` ? `nav-item-active` : ``" @click="sectionToGo('photography')" href="#">Photography</b-nav-item>
						<b-nav-item :class="active === `jorunal` ? `nav-item-active` : ``" @click="sectionToGo('jorunal')" href="#">Journal</b-nav-item>
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
			active: ''
		}
	},
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
	methods: {
		sectionToGo(value) {
			if(value === `experience`) 
				document.getElementById(this.experiencesId).scrollIntoView({ behavior: 'smooth' });
				this.active = value
			if(value === `recomendation`) 
				document.getElementById(this.recomendationId).scrollIntoView({ behavior: 'smooth' });
				this.active = value
			if(value === `project`) 
				document.getElementById(this.projectId).scrollIntoView({ behavior: 'smooth' });
				this.active = value
			if(value === `photography`) 
				document.getElementById(this.photographyId).scrollIntoView({ behavior: 'smooth' });
				this.active = value
			if(value === `journal`) 
				document.getElementById(this.journalId).scrollIntoView({ behavior: 'smooth' });
				this.active = value


		}
	}
}
</script>