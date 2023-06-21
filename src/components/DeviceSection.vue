<template>
  <div class="">
    <h1 class="text-3xl font-bold text-center scroll-left dark:text-slate-50">
      RELIABLE TECH FOR STAYING CLOSE
    </h1>
    <p
      class="text-center md:px-72 font-semibold text-slate-500 scroll-right dark:text-slate-300"
    >
      Get any communit y running with moderation tools and custom member access.
      Give members special powers, setup private channels and more.
    </p>
    <div class="md:px-36 mx-auto scroll-bottom">
      <img class="w-full" src="@/assets/Vanilla_Device.png" alt="" />
    </div>
    <!-- for download section -->
    <h1
      class="text-3xl font-bold text-center mt-12 scroll-top dark:text-slate-200"
    >
      READY TO START YOUR JOURNEY
    </h1>
    <div class="flex justify-center my-5">
      <button
        class="text-white bg-green-500 py-2 px-5 rounded-full cursor-pointer hover:-translate-y-1 duration-200 md:w-48 mr-2 scroll-bottom dark:shadow-lg dark:shadow-green-800 dark:text-slate-900"
      >
        <fa class="mr-3" :icon="['fas', 'download']" /><span
          class="font-semibold"
          >Download Now</span
        >
      </button>
    </div>
  </div>
</template>

<script>
import ScrollReveal from "scrollreveal";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      let sr = ScrollReveal();
      // for top
      sr.reveal(".scroll-top", {
        reset: true,
        mobile: false,
        duration: 1000,
        delay: 100,
        distance: "200px",
        easing: "ease-out",
        origin: "top",
      });
      // for bottom
      sr.reveal(".scroll-bottom", {
        reset: true,
        mobile: false,
        duration: 1000,
        delay: 100,
        distance: "200px",
        easing: "ease-out",
        origin: "bottom",
      });
      sr.reveal(".scroll-bottom-1", {
        reset: true,
        mobile: false,
        duration: 1400,
        delay: 100,
        distance: "200px",
        easing: "ease-out",
        origin: "bottom",
      });
      sr.reveal(".scroll-bottom-2", {
        reset: true,
        mobile: false,
        duration: 1800,
        delay: 100,
        distance: "200px",
        easing: "ease-out",
        origin: "bottom",
      });
      sr.reveal(".scroll-bottom-3", {
        reset: true,
        mobile: false,
        duration: 2200,
        delay: 100,
        distance: "200px",
        easing: "ease-out",
        origin: "bottom",
      });
      sr.reveal(".scroll-bottom-4", {
        reset: true,
        mobile: false,
        duration: 2600,
        delay: 100,
        distance: "200px",
        easing: "ease-out",
        origin: "bottom",
      });
      // for left
      sr.reveal(".scroll-left", {
        reset: true,
        mobile: false,
        duration: 1000,
        delay: 100,
        distance: "200px",
        easing: "ease-out",
        origin: "left",
      });
      // for right
      sr.reveal(".scroll-right", {
        reset: true,
        mobile: false,
        duration: 1000,
        delay: 100,
        distance: "200px",
        easing: "ease-out",
        origin: "right",
      });
    });
  },
};
</script>

<style>
</style>