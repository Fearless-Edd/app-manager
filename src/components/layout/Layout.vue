<template>
  <div
    class="antialised text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 h-screen w-screen"
  >
    <header>
      <Navbar />
    </header>
    <main class="w-screen mx-auto px-4 sm:px-6 md:px-8">
      <aside
        class="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto"
      >
        <Sidenav />
      </aside>
      <section class="lg:pl-[19.5rem]">
        <div
          class="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16"
        >
          <LayoutApp />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import LayoutApp from "./Layout-App.vue"
import Navbar from "./navbar/Navbar.vue";
import Sidenav from "./sidenav/Sidenav.vue";
</script>

<style lang="scss" scoped></style>
