<template>
  <div class="justify-center items-center my-24">
    <h1 class="text-4xl font-semibold text-white text-center scroll-top">
      IMAGINE A PLACE...
    </h1>
    <p class="md:px-[18rem] mt-8 text-white text-center scroll-bottom">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rem,
      accusantium nihil, aliquam optio alias in hic doloribus, sunt id commodi
      dolore omnis cumque magni voluptas maxime voluptates ab facilis! sunt id
      commodi dolore omnis cumque magni voluptas maxime voluptates ab facilis!
    </p>
    <div class="flex justify-center mt-5">
      <button
        class="text-green-500 bg-white py-2 px-5 rounded-full cursor-pointer hover:-translate-y-1 duration-200 md:w-48 mr-2 scroll-left dark:bg-green-500 dark:text-slate-900"
      >
        <fa class="mr-3" :icon="['fas', 'download']" /><span
          class="font-semibold"
          >Download</span
        >
      </button>
      <button
        class="text-slate-50 bg-green-900 py-2 px-5 rounded-full cursor-pointer hover:-translate-y-1 duration-200 md:w-48 scroll-right"
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