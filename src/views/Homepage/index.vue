<template>
  <Layout>
    <SectionAbout />
    <SectionJourney />
  </Layout>
</template>
<script>
export default {
  name: "homepage",
  components: {
    Layout: () => import("@/views/Layout"),
    SectionAbout: () => import("@/components/About"),
    SectionJourney: () => import("@/components/Journey"),
  },
};
</script>
