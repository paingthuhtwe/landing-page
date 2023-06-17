<template>
  <div class="bg-green-400 py-4">
    <div class="w-10/12 mx-auto">
      <NavBar></NavBar>
    </div>
  </div>
  <div class="bg-green-500 py-4">
    <div class="w-10/12 mx-auto">
      <HeroSection></HeroSection>
    </div>
  </div>
  <div class="bg-slate-300 py-4">
    <div class="w-10/12 mx-auto">
      <FirstChat></FirstChat>
    </div>
  </div>
</template>

<script>
import FirstChat from "../components/FirstChat";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    FirstChat,
    HeroSection,
    NavBar,
  },
};
</script>
