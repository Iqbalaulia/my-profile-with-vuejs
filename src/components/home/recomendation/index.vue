<!-- @format -->

<template>
	<div class="recomendation" >
		<div class="container" data-aos="fade-up" data-aos-duration="1500">
			<div class="recomendation__title">
				<div class="title">
					<div class="devider"></div>
					<label for=""> RECOMENDATION</label>
				</div>
				<div class="name">
					<h2>Frontend Engineer</h2>
				</div>
			</div>

			<div class="recomendation__content">
				<VueSlickCarousel v-bind="setting">
					<div
						class="content_slider"
						v-for="(recomendation, indexRecomendation) in data"
						:key="indexRecomendation">
						<div class="profile_images">
							<img
								:src="recomendation.path_url"
								:alt="recomendation.name"
								v-once />
						</div>
						<div class="information">
							<label for=""
								><span>Recomendation</span> From {{ recomendation.name }}</label
							>
							<div class="role"
								><span class="base-role">{{ recomendation.role }}</span> at
								<span class="company">{{ recomendation.company }}</span></div
							>
							<div class="devider mb-4"></div>
							<p>{{ recomendation.quote }}</p>
							<!-- <a
								target="_blank"
								:href="recomendation.linkedin"
								class="btn btn-sm btn-primary-profile">
								LinkedIn
							</a> -->
						</div>
					</div>
				</VueSlickCarousel>
			</div>
		</div>
	</div>
</template>
<script>
import jsonRecomendation from "./data/recomendation.json";
export default {
	data() {
		return {
			data: jsonRecomendation.data.data,
			setting: {
				arrows: true,
				dots: true,
				fade: true,
				infinite: true,
				lazyLoad: "progressive",
				autoplay: true,
				autoplaySpeed: 10000,
			},
		};
	},
};
</script>
