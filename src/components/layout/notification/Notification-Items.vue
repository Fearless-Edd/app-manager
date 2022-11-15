<template>

    <div
      class="2xl:w-4/12 dark:bg-slate-800 bg-gray-50 h-screen overflow-y-auto p-8 absolute right-0"
    >
      <span
        tabindex="0"
        class="focus:outline-none text-sm block leading-normal pt-0 border-b pb-2 border-gray-300 dark:text-gray-50 text-gray-600"
      >
        Unread
      </span>
      <div class="w-full mt-6 p-3 bg-white rounded shadow flex">
        <div
          tabindex="0"
          aria-label="heart icon"
          role="img"
          class="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00059 3.01934C9.56659 1.61334 11.9866 1.66 13.4953 3.17134C15.0033 4.68334 15.0553 7.09133 13.6526 8.662L7.99926 14.3233L2.34726 8.662C0.944589 7.09133 0.997256 4.67934 2.50459 3.17134C4.01459 1.662 6.42992 1.61134 8.00059 3.01934Z"
              fill="#EF4444"
            />
          </svg>
        </div>
        <div class="pl-3">
          <p tabindex="0" class="focus:outline-none text-sm leading-none">
            <span class="text-indigo-700">James Doe</span> favourited an
            <span class="text-indigo-700">item</span>
          </p>
          <p
            tabindex="0"
            class="focus:outline-none text-xs leading-3 pt-1 text-gray-500"
          >
            2 hours ago
          </p>
        </div>
      </div>
      <!-- Replace with your content -->
      <span
        tabindex="0"
        class="focus:outline-none text-sm block leading-normal pt-8 border-b pb-2 border-gray-300 dark:text-gray-50 text-gray-600"
      >
        Read
      </span>
      <div class="w-full mt-6 p-3 bg-white rounded shadow flex">
        <div
          tabindex="0"
          aria-label="heart icon"
          role="img"
          class="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00059 3.01934C9.56659 1.61334 11.9866 1.66 13.4953 3.17134C15.0033 4.68334 15.0553 7.09133 13.6526 8.662L7.99926 14.3233L2.34726 8.662C0.944589 7.09133 0.997256 4.67934 2.50459 3.17134C4.01459 1.662 6.42992 1.61134 8.00059 3.01934Z"
              fill="#EF4444"
            />
          </svg>
        </div>
        <div class="pl-3">
          <p tabindex="0" class="focus:outline-none text-sm leading-none">
            <span class="text-indigo-700">James Doe</span> favourited an
            <span class="text-indigo-700">item</span>
          </p>
          <p
            tabindex="0"
            class="focus:outline-none text-xs leading-3 pt-1 text-gray-500"
          >
            2 hours ago
          </p>
        </div>
      </div>
      <!-- /End replace -->
    </div>

</template>

<script setup></script>

<style lang="scss" scoped></style>
