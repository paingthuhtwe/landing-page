<template>
  <div class="flex justify-between items-center">
    <!-- logo & brand  -->
    <div class="">
      <fa class="text-4xl text-white" :icon="['fab', 'drupal']" />
      <span class="font-semibold text-3xl text-white">Vanilla</span>
    </div>
    <!-- menu section -->
    <div
      class="md:flex"
      :class="{
        'bg-slate-200 absolute top-[72px] inset-0 h-[25vh] mx-auto opacity-90 dark:bg-slate-800':
          !menu,
        hidden: menu,
      }"
    >
      <div
        class="md:flex"
        :class="{
          'flex-col w-10/12 mx-auto mt-10 dark:text-slate-50': !menu,
        }"
      >
        <div
          class="hover:scale-[1.05] duration-200 md:mr-1 text-center md:text-start mb-2 md:mb-0"
        >
          <a
            @click="toggleMenu"
            class="px-3 py-2 md:text-white font-semibold rounded-md"
            href="#home"
            >Home</a
          >
        </div>
        <div
          class="hover:scale-[1.05] duration-200 md:mr-1 text-center md:text-start mb-2 md:mb-0"
        >
          <a
            @click="toggleMenu"
            class="px-3 py-2 md:text-white font-semibold rounded-md"
            href="#chat"
            >Chat</a
          >
        </div>
        <div
          class="hover:scale-[1.05] duration-200 md:mr-1 text-center md:text-start mb-2 md:mb-0"
        >
          <a
            @click="toggleMenu"
            class="px-3 py-2 md:text-white font-semibold rounded-md"
            href="#device"
            >Device</a
          >
        </div>
        <div
          class="hover:scale-[1.05] duration-200 md:mr-1 text-center md:text-start mb-2 md:mb-0"
        >
          <a
            @click="toggleMenu"
            class="px-3 py-2 md:text-white font-semibold rounded-md"
            href="#feature"
            >Feature</a
          >
        </div>
      </div>
    </div>
    <!-- dark mode  -->
    <div class="">
      <label
        for="themeSwitcherThree"
        class="themeSwitcherThree relative inline-flex cursor-pointer select-none items-center"
      >
        <input
          type="checkbox"
          name="themeSwitcherThree"
          id="themeSwitcherThree"
          class="sr-only"
        />
        <div
          class="shadow-card flex h-[36px] w-[70px] items-center justify-center rounded-md bg-white dark:bg-green-700"
        >
          <span
            class="flex h-8 w-8 items-center justify-center rounded bg-green-500 text-white dark:text-slate-800 dark:bg-green-700"
            @click="toggleTheme('light')"
          >
            <fa :icon="['fas', 'sun']" />
          </span>
          <span
            class="flex h-8 w-8 items-center justify-center rounded text-slate-800 dark:bg-green-900 dark:text-slate-100"
            @click="toggleTheme('dark')"
          >
            <fa :icon="['fas', 'moon']" />
          </span>
        </div>
      </label>
    </div>

    <!-- menu icon for mobile -->
    <div class="md:hidden">
      <div
        class="menu-icon cursor-pointer"
        @click="menu = !menu"
        :class="{ close: !menu }"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    // for dark mode
    let mode = ref(null);
    !localStorage.getItem("theme") && [
      localStorage.setItem("theme", "light"),
      (mode.value = "light"),
    ];
    // get theme from localStorage
    localStorage.getItem("theme") == "dark"
      ? [
          (mode.value = "dark"),
          document.querySelector("html").classList.add("dark"),
        ]
      : [
          (mode.value = "light"),
          document.querySelector("html").classList.remove("dark"),
        ];
    // dark mode toggle method
    var toggleTheme = (theme) => {
      theme == "dark"
        ? [
            localStorage.setItem("theme", "dark"),
            (mode.value = theme),
            document.querySelector("html").classList.add("dark"),
          ]
        : [
            localStorage.setItem("theme", "light"),
            (mode.value = theme),
            document.querySelector("html").classList.remove("dark"),
          ];
    };

    // for menu toggle
    let menu = ref(true);
    var toggleMenu = () => {
      if (screen.width <= 400) {
        menu.value = !menu.value;
      }
    };
    return { mode, toggleTheme, menu, toggleMenu };
  },
};
</script>

<style>
</style>