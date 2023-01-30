<template>
  <Layout>
    <SectionAbout />
  </Layout>
</template>
<script>
export default {
  name: "homepage",
  components: {
    Layout: () => import("@/views/Layout"),
    SectionAbout: () => import("@/components/About"),
  },
};
</script>
