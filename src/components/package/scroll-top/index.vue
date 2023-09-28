<template>
    <button class="scroll-to-top" @click="scrollToTop" v-show="showButton">
        <i class="fa fa-arrow-up"></i>
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showButton: false,
      };
    },
    mounted() {
      window.addEventListener('scroll', this.toggleButtonVisibility);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.toggleButtonVisibility);
    },
    methods: {
      toggleButtonVisibility() {
        this.showButton = window.scrollY > 100;
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },
    },
  };
  </script>
