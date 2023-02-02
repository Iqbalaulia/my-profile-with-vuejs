<template>
  <Layout>
    <SectionAbout />
    <SectionJourney />
    <SectionMe />
  </Layout>
</template>
<script>
export default {
  name: "homepage",
  components: {
    Layout: () => import("@/views/Layout"),
    SectionAbout: () => import("@/components/About"),
    SectionJourney: () => import("@/components/Journey"),
    SectionMe: () => import("@/components/Me"),
  },
};
</script>
