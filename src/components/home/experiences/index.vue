<!-- @format -->

<template>
	<div class="experience" ref="experience">
		<div class="container">
			<div class="title">
				<label for=""> My Experience</label>
				<div class="devider"></div>
			</div>
			<div class="proffetion">
				<h4>Frontend Engineer</h4>
			</div>

			<div class="timeline" v-for="(experience, indexExperience) in data" :key="indexExperience">
				<div class="timeline-item">
					<div class="timeline-icon"> </div>
					<div class="timeline-content" :class="experience.section">
						<p class="timeline-content-date">{{experience.start_date}} - {{experience.end_date ? experience.end_date : `Now`}}</p>
							<label for="" class="timeline-content-position">
								{{experience.position}}
							</label>
							<div class="timeline-content-company">{{experience.company}}</div>
						<p>
							{{experience.information_company}}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import jsonExperience from './data/experience.json'

export default {
	data() {
		return {
			data: jsonExperience.data.data
		}
	}
};
</script>
