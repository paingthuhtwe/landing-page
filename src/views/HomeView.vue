<template>
  <!-- for navbar section  -->
  <div class="bg-green-600 py-4 fixed w-full shadow-sm z-10">
    <div class="w-10/12 mx-auto">
      <NavBar></NavBar>
    </div>
  </div>
  <!-- for hero section  -->
  <section id="home">
    <div class="bg-green-500 py-8 pt-24">
      <div class="w-10/12 mx-auto">
        <HeroSection></HeroSection>
      </div>
    </div>
  </section>
  <!-- for chat section  -->
  <section id="chat">
    <div class="py-12">
      <div class="w-10/12 my-10 mx-auto">
        <FirstChat></FirstChat>
      </div>
    </div>
    <div class="py-12 bg-slate-50">
      <div class="w-10/12 my-10 mx-auto">
        <SecondChat></SecondChat>
      </div>
    </div>
    <div class="py-12">
      <div class="w-10/12 my-10 mx-auto">
        <ThirdChat></ThirdChat>
      </div>
    </div>
  </section>
  <!-- for device section  -->
  <section id="device">
    <div class="py-12 bg-slate-50">
      <div class="w-10/12 my-10 mx-auto">
        <DeviceSection></DeviceSection>
      </div>
    </div>
  </section>
  <!-- for footer section  -->
  <section id="feature">
    <div class="py-12 bg-slate-600">
      <div class="w-10/12 mx-auto">
        <FooterSection></FooterSection>
      </div>
    </div>
  </section>
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
