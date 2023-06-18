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
  <div class="py-4">
    <div class="w-10/12 mx-auto">
      <div class="my-10">
        <FirstChat></FirstChat>
      </div>
      <div class="my-10">
        <SecondChat></SecondChat>
      </div>
    </div>
  </div>
</template>

<script>
import SecondChat from "../components/SecondChat";
import FirstChat from "../components/FirstChat";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    SecondChat,
    FirstChat,
    HeroSection,
    NavBar,
  },
};
</script>
