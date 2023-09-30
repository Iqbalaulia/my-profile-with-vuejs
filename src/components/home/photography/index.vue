<!-- @format -->

<template>
	<div class="photography">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="photography__header">
						<div class="photography__title">
							<div class="title">
								<div class="devider"></div>
								<label for=""> Galery</label>
							</div>
							<div class="name">
								<h2>Photography</h2>
							</div>
							<div class="all-photo">
								<router-link :to="`/photography`">
									<label for="">All Photo</label>
								</router-link>
							</div>
						</div>
					
					</div>
				</div>
			</div>
			<div class="photography__galery">
				<div class="galery-item image-1">
					<img src="https://drive.google.com/uc?id=1GK3PrJ-BvKsggJ6PeKmebor5AbyJ9c4e&export=download" alt="">
				</div>
				<div class="galery-item image-2">
					<img src="https://drive.google.com/uc?id=1_90IcCZA_y7OFdxH2VK3-GfI2UEeocBq&export=download" alt="">
				</div>
				<div class="galery-item image-3">
					<img src="https://drive.google.com/uc?id=1_dvmcVgknYMRGQaYRrVzVUYUECBJSYcQ&export=download" alt="">
				</div>
				<div class="galery-item image-4">
					<img src="https://drive.google.com/uc?id=19vnI63RUDmANry1PbeUVH0uoJjmGgyaJ&export=download" alt="">
				</div>
				<div class="galery-item image-4">
					<img src="https://drive.google.com/uc?id=1D9BToFlZ5LkKYZe_vFLINCPyDUQq3jk9&export=download" alt="">
				</div>
				<div class="galery-item image-3">
					<img src="https://drive.google.com/uc?id=1xJNtdhD5EUiu8gYEyvePx2DqYM5lQyiy&export=download" alt="">
				</div>
				<div class="galery-item image-2">
					<img src="https://drive.google.com/uc?id=1Vzz2B7u9IYYhQ9wwMqDp76Uu2v_2v65P&export=download" alt="">
				</div>
				<div class="galery-item image-1">
					<img src="https://drive.google.com/uc?id=1Vzz2B7u9IYYhQ9wwMqDp76Uu2v_2v65P&export=download" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tabsProject: "new",
		};
	},
	components:{
	},
	methods: {
		changeProjectTab(payload) {
			this.tabsProject = payload;
		},
	},
};
</script>
