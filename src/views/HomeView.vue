<template>
  <!-- for navbar section  -->
  <div class="bg-green-600 py-4">
    <div class="w-10/12 mx-auto">
      <NavBar></NavBar>
    </div>
  </div>
  <!-- for hero section  -->
  <div class="bg-green-500 py-4">
    <div class="w-10/12 mx-auto">
      <HeroSection></HeroSection>
    </div>
  </div>
  <!-- for chat section  -->
  <div class="py-4">
    <div class="w-10/12 mx-auto">
      <div class="my-10">
        <FirstChat></FirstChat>
      </div>
    </div>
  </div>
  <div class="py-4 bg-slate-50">
    <div class="w-10/12 mx-auto">
      <div class="my-10">
        <SecondChat></SecondChat>
      </div>
    </div>
  </div>
  <div class="py-4">
    <div class="w-10/12 mx-auto">
      <div class="my-10">
        <ThirdChat></ThirdChat>
      </div>
    </div>
  </div>
  <!-- for device section  -->
  <div class="py-12 bg-slate-50">
    <div class="w-10/12 mx-auto">
      <DeviceSection></DeviceSection>
    </div>
  </div>
  <div class="py-12 bg-slate-600">
    <div class="w-10/12 mx-auto">
      <FooterSection></FooterSection>
    </div>
  </div>
</template>

<script>
import FooterSection from "../components/FooterSection";
import DeviceSection from "../components/DeviceSection";
import ThirdChat from "../components/ThirdChat";
import SecondChat from "../components/SecondChat";
import FirstChat from "../components/FirstChat";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    FooterSection,
    DeviceSection,
    ThirdChat,
    SecondChat,
    FirstChat,
    HeroSection,
    NavBar,
  },
};
</script>
