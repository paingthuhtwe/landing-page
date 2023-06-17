<template>
  <div class="bg-green-400 py-5">
    <div class="w-10/12 mx-auto">
      <NavBar></NavBar>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    NavBar,
  },
};
</script>
