<template>
  <div
    class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent shadow"
  >
    <div class="w-screen mx-auto">
      <div
        class="py-4 border-b border-slate-200 lg:px-4 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0"
      >
        <div class="relative flex gap-2 items-center">
          <NavbarBrand />
          <div class="relative flex lg:flex items-center ml-auto">
            <div
              class="flex gap-2 items-center border-slate-200 pl-2 dark:border-slate-800"
            >
              <NavbarSearch />
              <Notification />
              <NavbarToggleDark />
            </div>
          </div>

          <div class="ml-2 -my-1 flex items-center">
            <NavbarMobileMenu />
          </div>
        </div>
      </div>
      <div
        class="flex items-center p-4 border-b border-slate-900/10 lg:hidden dark:border-slate-50/[0.06]"
      >
        <SidenavOverlay />
        <ol class="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0">
          <li class="flex items-center">Menu</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavbarBrand from "./Navbar-Brand.vue";
import NavbarItems from "./Navbar-Items.vue";
import NavbarUserProfile from "./Navbar-UserProfile.vue";
import NavbarActionButtons from "./Navbar-ActionButtons.vue";
import NavbarToggleDark from "./Navbar-ToggleDark.vue";
import NavbarMobileMenu from "./Navbar-MobileMenu.vue";
import NavbarSearch from "./Navbar-Search.vue";
import Notification from "../notification/Notification.vue";
import SidenavOverlay from "../sidenav/Sidenav-Overlay.vue";
</script>

<style lang="scss" scoped></style>
