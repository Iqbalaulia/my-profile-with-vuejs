<template>
  <div class="journey">
    <div class="row">
      <div class="col-md-12">
        <div class="journey_text">My Journey</div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="line"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <p for="" class="journey_story-title">Perjalanan</p>
        <p class="journey_story-desc">
          Sebagai seorang <strong>Front-end Web Developer</strong><br />
          dari awal - sekarang
        </p>
      </div>
    </div>
    <div class="journey_content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div
              class="media"
              v-for="(journey, index) in dataJourney.journey"
              :key="index"
            >
              <img
                v-if="journey.images_company != ''"
                :src="`${journey.images_company}`"
                class="mr-3 img-fluid"
                alt="..."
              />
              <img
                v-else
                src="@/assets/images/not-found.webp"
                class="mr-3 img-fluid"
                alt="..."
              />
              <div class="media-body">
                <h3 class="profession">{{ journey.position }}</h3>
                <label class="mt-0"
                  >{{ journey.company }}
                  <span class="status"> - {{ journey.status }}</span></label
                >
                <div class="date">
                  <span
                    >{{ journey.start_date }} -
                    {{
                      journey.end_date === "" ? "Saat ini" : journey.end_date
                    }}</span
                  >
                </div>
                <p class="description">
                  {{ journey.description }}
                </p>
                <div class="job_description">
                  <label for="">Job deskripsi :</label>
                  <ol>
                    <li
                      v-for="(jobDesc, indexJob) in journey.job_desc"
                      :key="indexJob"
                    >
                      {{ jobDesc }}
                    </li>
                  </ol>
                </div>
                <div class="data_skill">
                  <label for="">Keahlian :</label>
                  <div class="skill">
                    <div
                      class="badge"
                      v-for="(badge, indexBadge) in journey.skill"
                      :key="indexBadge"
                    >
                      {{ badge }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DataJourney from "@/store/json/journey.json";
export default {
  name: "Journey",

  data() {
    return {
      dataJourney: DataJourney,
    };
  },
};
</script>
