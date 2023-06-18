<template>
  <div class="md:flex justify-center mx-auto my-10">
    <!-- for left -->
    <div class="md:p-3 md:w-96 mb-5 md:mb-0">
      <h1 class="text-2xl font-semibold">Why hanging out is easy</h1>
      <p>
        Grab a seat in a voice channel when you're free. Friends in your server
        can see your around and instantly pop in to talk without having a call.
      </p>
    </div>
    <!-- for right  -->
    <div class="md:p-3 md:w-96">
      <div class="border shadow-sm shadow-indigo-200 p-5 bg-white rounded-md">
        <h1 class="text-2xl font-semibold">Chats</h1>
        <div
          class="border border-slate-300 rounded-md py-1 px-2 flex items-center hover:bg-slate-100 cursor-pointer mb-1"
        >
          <fa
            class="text-2xl rounded-full bg-green-500 text-white p-[0.35rem]"
            :icon="['fas', 'power-off']"
          />
          <div class="text-sm ms-2">
            <p class="text-slate-900 font-semibold">Tailwind</p>
            <p class="text-slate-500">Panda. Thanks for everything.</p>
          </div>
        </div>
        <!-- end tailwind  -->
        <div
          class="border border-slate-300 rounded-md py-1 px-2 flex items-center hover:bg-slate-100 cursor-pointer mb-1"
        >
          <fa
            class="text-2xl rounded-full bg-green-500 text-white p-[0.35rem]"
            :icon="['fas', 'power-off']"
          />
          <div class="text-sm ms-2">
            <p class="text-slate-900 font-semibold">React</p>
            <p class="text-slate-500">Panda. Thanks.</p>
          </div>
        </div>
        <!-- end react  -->
        <div
          class="border border-slate-300 rounded-md py-1 px-2 flex items-center hover:bg-slate-100 cursor-pointer mb-1"
        >
          <fa
            class="text-2xl rounded-full bg-green-500 text-white p-[0.35rem]"
            :icon="['fas', 'power-off']"
          />
          <div class="text-sm ms-2">
            <p class="text-slate-900 font-semibold">Bootstrap</p>
            <p class="text-slate-500">Panda. Responsive First.</p>
          </div>
        </div>
        <!-- end bootstrap  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>