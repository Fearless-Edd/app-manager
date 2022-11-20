<template>
  <div
    class="text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 h-screen w-screen"
  >
    <header>
      <Navbar />
    </header>
    <main class="w-screen mt-24 lg:mt-16 md:mt-24 mx-auto px-4 sm:px-6 md:px-8">
      <aside
        class="hidden lg:block fixed z-20 inset-0 top-20 lg:left-0 bottom-0 right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto"
      >
        <Sidenav />
      </aside>

      <LayoutApp />
    </main>
  </div>
</template>

<script setup>
import LayoutApp from "./Layout-App.vue";
import Navbar from "./navbar/Navbar.vue";
import Sidenav from "./sidenav/Sidenav.vue";
</script>

<style lang="scss" scoped></style>
