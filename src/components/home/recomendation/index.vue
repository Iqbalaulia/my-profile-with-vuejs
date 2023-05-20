<!-- @format -->

<template>
	<div class="recomendation">
		<div class="container">
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
				<VueSlickCarousel :arrows="true" :dots="true">
					<div class="content_slider">
						<div class="profile_images">
							<img
								src="https://media.licdn.com/dms/image/D5603AQElrV9h0l8j3g/profile-displayphoto-shrink_200_200/0/1668169627705?e=1689811200&v=beta&t=ZqqugRj20x-QPP3_03OaOdYWjuHHonG26ewVlrEGaGE"
								alt="" />
						</div>
						<div class="information">
							<label for=""
								><span>Recomendation</span> From Firman Zain Firdauz</label
							>
							<div class="devider mb-4"></div>
							<p
								>Pekerjaan bagus, deadline terbantu, task terselesaikan.
								Frontend developer mantap 👍🏻</p
							>
							<a href="" class="btn btn-sm btn-primary"> LinkedIn </a>
						</div>
					</div>
					<div class="content_slider">2</div>
					<div class="content_slider">3</div>
					<div class="content_slider">4</div>
				</VueSlickCarousel>
			</div>
		</div>
	</div>
</template>
<script>
export default {};
</script>
