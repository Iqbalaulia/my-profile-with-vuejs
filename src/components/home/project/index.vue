<!-- @format -->

<template>
  <div class="projects">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="projects__header">
            <div class="projects__title">
              <div class="title">
                <div class="devider"></div>
                <label for=""> PROJECT</label>
              </div>
              <div class="name">
                <h2>Frontend Engineer</h2>
              </div>
              <div class="sub-title">
                <label
                  >Welcome to my project gallery! Here, you will find a
                  collection of works that I have undertaken with enthusiasm and
                  dedication.
                </label>
              </div>
            </div>
            <div class="projects__tabs">
              <div
                @click="changeProjectTab('new')"
                :class="tabsProject === `new` ? `tabs_active` : ``"
                class="tabs_projects"
              >
                New
              </div>
              <div
                @click="changeProjectTab('latest')"
                :class="tabsProject === `latest` ? `tabs_active` : ``"
                class="tabs_projects"
              >
                Latest
              </div>
              <div
                @click="changeProjectTab('all')"
                :class="tabsProject === `all` ? `tabs_active` : ``"
                class="tabs_projects"
              >
                All
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <coming-soon /> -->
      <div v-if="tabsProject === `new`" class="projects__showing">
        <div class="row">
          <div
            class="col-md-4"
            v-for="(itemProject, indexProject) in project.project_new"
            :key="indexProject"
            data-aos="fade-up"
            :data-aos-duration="indexProject + 1000"
          >
            <router-link to="#">
              <div class="images">
                <img
                  :src="
                    require(`@/assets/images/project/${itemProject.thumbnail}`)
                  "
                  class="img-fluid w-100"
                  alt="Logo"
                  v-once
                />
                <div class="overlay">
                  <div class="title_project">
                    {{ itemProject.title_project }}
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div v-if="tabsProject === `latest`" class="projects__showing">
        <div class="row">
          <div
            class="col-md-4"
            v-for="(itemProject, indexProject) in project.latest"
            :key="indexProject"
            data-aos="fade-up"
            :data-aos-duration="indexProject + 1000"
          >
            <router-link to="#">
              <div class="images">
                <img
                  :src="
                    require(`@/assets/images/project/${itemProject.thumbnail}`)
                  "
                  class="img-fluid w-100"
                  alt="Logo"
                  v-once
                />
                <div class="overlay">
                  <div class="title_project">
                    {{ itemProject.title_project }}
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div v-if="tabsProject === `all`" class="projects__showing">
        <div class="row">
          <div
            class="col-md-4"
            v-for="(itemProject, indexProject) in project.all"
            :key="indexProject"
            data-aos="fade-up"
            :data-aos-duration="indexProject + 1000"
          >
            <router-link to="#">
              <div class="images">
                <img
                  :src="
                    require(`@/assets/images/project/${itemProject.thumbnail}`)
                  "
                  class="img-fluid w-100"
                  alt="Logo"
                  v-once
                />
                <div class="overlay">
                  <div class="title_project">
                    {{ itemProject.title_project }}
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jsonProject from "../../../store/json/project.json";
export default {
  data() {
    return {
      tabsProject: "new",
      project: jsonProject,
    };
  },
  components: {},
  methods: {
    changeProjectTab(payload) {
      this.tabsProject = payload;
    },
  },
};
</script>
