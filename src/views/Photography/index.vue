<!-- @format -->

<template>
	<Layout>
		<div class="photography-galery ">
            <div class="photography-galery__title">
                <h2>
                    PHOTOGRAPHY
                </h2>
            </div>
			<div class="photography-galery__subtitle">
				<div class="sub-title">
					a personal pleasure
				</div>
			</div>

			<div class="photography-galery__banner">
				<div class="container banner">
					<div class="row">
						<div class="col-md-4 p-0"  v-for="(banner, indexBanner) in data.banner" :key="indexBanner">
							<div class="images">
								<img :src="banner.path_url" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="photography-galery__showing">
				<div class="container">
					<div class="row">
						<div class="col-md-8 galery">
							<div class="galery-item image-1">
								<img src="https://drive.google.com/uc?id=1GK3PrJ-BvKsggJ6PeKmebor5AbyJ9c4e&export=download" alt="">
								<div class="tagline">
									<div class="tag">
										Travel
									</div>
									<div class="tag">
										Food
									</div>
								</div>
								<div class="title-images">
									<label for="">Sunrise</label>
								</div>
								<label class="caption" for="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ullam molestias voluptates commodi minus quos, voluptas nobis eos numquam rem aut quisquam, sint tenetur a laboriosam, nam laudantium. Distinctio, esse?</label>
							</div>
							<div class="galery-item image-2">
								<img src="https://drive.google.com/uc?id=1_90IcCZA_y7OFdxH2VK3-GfI2UEeocBq&export=download" alt="">
								<label for="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ullam molestias voluptates commodi minus quos, voluptas nobis eos numquam rem aut quisquam, sint tenetur a laboriosam, nam laudantium. Distinctio, esse?</label>

							</div>
							<div class="galery-item image-3">
								<img src="https://drive.google.com/uc?id=1_dvmcVgknYMRGQaYRrVzVUYUECBJSYcQ&export=download" alt="">
								<label for="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ullam molestias voluptates commodi minus quos, voluptas nobis eos numquam rem aut quisquam, sint tenetur a laboriosam, nam laudantium. Distinctio, esse?</label>

							</div>
							<div class="galery-item image-4">
								<img src="https://drive.google.com/uc?id=19vnI63RUDmANry1PbeUVH0uoJjmGgyaJ&export=download" alt="">
								<label for="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ullam molestias voluptates commodi minus quos, voluptas nobis eos numquam rem aut quisquam, sint tenetur a laboriosam, nam laudantium. Distinctio, esse?</label>

							</div>
							<div class="galery-item image-4">
								<img src="https://drive.google.com/uc?id=1D9BToFlZ5LkKYZe_vFLINCPyDUQq3jk9&export=download" alt="">
								<label for="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ullam molestias voluptates commodi minus quos, voluptas nobis eos numquam rem aut quisquam, sint tenetur a laboriosam, nam laudantium. Distinctio, esse?</label>

							</div>
							<div class="galery-item image-3">
								<img src="https://drive.google.com/uc?id=1xJNtdhD5EUiu8gYEyvePx2DqYM5lQyiy&export=download" alt="">
								<label for="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ullam molestias voluptates commodi minus quos, voluptas nobis eos numquam rem aut quisquam, sint tenetur a laboriosam, nam laudantium. Distinctio, esse?</label>

							</div>
							<div class="galery-item image-2">
								<img src="https://drive.google.com/uc?id=1Vzz2B7u9IYYhQ9wwMqDp76Uu2v_2v65P&export=download" alt="">
								<label for="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ullam molestias voluptates commodi minus quos, voluptas nobis eos numquam rem aut quisquam, sint tenetur a laboriosam, nam laudantium. Distinctio, esse?</label>

							</div>
							<div class="galery-item image-1">
								<img src="https://drive.google.com/uc?id=1Vzz2B7u9IYYhQ9wwMqDp76Uu2v_2v65P&export=download" alt="">
								<label for="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ullam molestias voluptates commodi minus quos, voluptas nobis eos numquam rem aut quisquam, sint tenetur a laboriosam, nam laudantium. Distinctio, esse?</label>

							</div>
						</div>
						<div class="col-md-4 border"></div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>
<script>
import jsonPhotography from './data/photography.json'

export default {
	name: "photography",
	metaInfo: {
		title: "Iqbalaulia",
		titleTemplate: "%s | Frontend Engineer",
	},
	components: {
		Layout: () => import("@/views/Layout"),
	},

	data(){
		return {
			data: jsonPhotography.data.data
		}
	},

	methods: {
		
	}
};
</script>
