<template>
  <div class="justify-center items-center my-16">
    <h1 class="text-4xl font-semibold text-white text-center">
      IMAGINE A PLACE...
    </h1>
    <p class="md:px-[18rem] mt-8 text-white text-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rem,
      accusantium nihil, aliquam optio alias in hic doloribus, sunt id commodi
      dolore omnis cumque magni voluptas maxime voluptates ab facilis! sunt id
      commodi dolore omnis cumque magni voluptas maxime voluptates ab facilis!
    </p>
    <div class="md:flex justify-center mt-5">
      <button
        class="text-green-500 bg-white py-2 rounded-full md:mr-2 cursor-pointer hover:-translate-y-1 duration-500 mb-2 md:mb-0 w-48"
      >
        <fa class="mr-3" :icon="['fas', 'download']" /><span
          class="font-semibold"
          >Download</span
        >
      </button>
      <button
        class="text-white bg-green-900 py-2 px-8 rounded-full cursor-pointer hover:-translate-y-1 duration-500 w-48"
      >
        <fa class="mr-3" :icon="['fas', 'shopping-cart']" /><span
          class="font-semibold"
          >Order Now</span
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