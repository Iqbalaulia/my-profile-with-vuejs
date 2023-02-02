<template>
  <div class="me">
    <div class="row images-profile">
      <div
        v-for="(me, indexMe) in dataMe.profile_me"
        class="p-0 col-md-3"
        :key="indexMe"
      >
        <img
          :src="require(`../../assets/images/profile/` + me.images)"
          class="img-fluid"
          :alt="me.information"
        />
      </div>
    </div>
  </div>
</template>
<script>
import DataMeJson from "@/store/json/me.json";
export default {
  name: "Me",
  data() {
    return {
      dataMe: DataMeJson,
      baseUrl: process.env.VUE_APP_API_URL,
    };
  },
  mounted() {
    console.log(`testing`, this.baseUrl);
  },
};
</script>
