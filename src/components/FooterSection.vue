<template>
  <!-- for up  -->
  <div class="md:flex justify-center border-b py-5">
    <!-- for start  -->
    <div class="md:w-1/3 mb-12 md:mb-0">
      <h1 class="text-2xl font-bold text-white">IMAGINE A PLACE</h1>
    </div>
    <!-- for center  -->
    <div class="md:w-1/3 flex mb-5 md:mb-0">
      <div class="w-1/2">
        <h1 class="text-lg font-semibold text-white mb-2">Products</h1>
        <ul class="text-slate-100">
          <li class="cursor-pointer hover:translate-x-1 duration-300">
            <a href="#download">Download</a>
          </li>
          <li class="cursor-pointer hover:translate-x-1 duration-300">
            <a href="#status">Status</a>
          </li>
        </ul>
      </div>
      <div class="w-1/2">
        <h1 class="text-lg font-semibold text-white mb-2">Company</h1>
        <ul class="text-slate-100">
          <li class="cursor-pointer hover:translate-x-1 duration-300">
            <a href="#about">About</a>
          </li>
          <li class="cursor-pointer hover:translate-x-1 duration-300">
            <a href="#jobs">Jobs</a>
          </li>
          <li class="cursor-pointer hover:translate-x-1 duration-300">
            <a href="#careers">Careers</a>
          </li>
          <li class="cursor-pointer hover:translate-x-1 duration-300">
            <a href="#branding">Branding</a>
          </li>
          <li class="cursor-pointer hover:translate-x-1 duration-300">
            <a href="#newsRoom">News Room</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- for end  -->
    <div class="md:w-1/3 flex">
      <div class="w-1/2">
        <h1 class="text-lg font-semibold text-white mb-2">Resources</h1>
        <ul class="text-slate-100">
          <li class="cursor-pointer hover:translate-x-1 duration-300">
            <a href="#college">College</a>
          </li>
          <li class="cursor-pointer hover:translate-x-1 duration-300">
            <a href="#support">Support</a>
          </li>
          <li class="cursor-pointer hover:translate-x-1 duration-300">
            <a href="#safety">Safety</a>
          </li>
          <li class="cursor-pointer hover:translate-x-1 duration-300">
            <a href="#blog">Blog</a>
          </li>
          <li class="cursor-pointer hover:translate-x-1 duration-300">
            <a href="#feedback">Feedback</a>
          </li>
          <li class="cursor-pointer hover:translate-x-1 duration-300">
            <a href="#developers">Developers</a>
          </li>
        </ul>
      </div>
      <div class="w-1/2">
        <h1 class="text-lg font-semibold text-white mb-2">Policies</h1>
        <ul class="text-slate-100">
          <li class="cursor-pointer hover:translate-x-1 duration-300">
            <a href="#terms">Terms</a>
          </li>
          <li class="cursor-pointer hover:translate-x-1 duration-300">
            <a href="#privacy">Privacy</a>
          </li>
          <li class="cursor-pointer hover:translate-x-1 duration-300">
            <a href="#guidelines">Guidelines</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- for down  -->
  <div class="flex justify-between mt-8">
    <div class="">
      <fa class="text-4xl text-green-500" :icon="['fab', 'drupal']" />
      <span class="font-semibold text-3xl text-white">Vanilla</span>
    </div>
    <div>
      <button
        class="text-white bg-green-500 py-2 px-6 rounded-full cursor-pointer hover:-translate-y-1 duration-500"
      >
        <fa class="mr-2" :icon="['fas', 'right-to-bracket']" /><span
          class="font-semibold"
          >Sign Up</span
        >
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>