<template>
  <div
    class="w-full h-[100vh] flex justify-center items-center bg-slate-100 fixed z-20"
    v-if="load"
  >
    <div
      class="w-12 h-12 rounded-full animate-spin absolute border-4 border-solid border-green-500 border-t-transparent shadow-md"
    ></div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let load = ref(true);
    window.addEventListener("load", () => {
      load.value = false;
    });
    return { load };
  },
};
</script>

<style>
</style>