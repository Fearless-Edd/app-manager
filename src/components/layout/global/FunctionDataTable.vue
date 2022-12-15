<template>
  <div class="w-full mb-12 px-0 mt-12">
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow rounded dark:bg-slate-800 bg-gray-white text-gray-900 dark:text-gray-300"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 class="font-semibold text-lg">Equipment Function Description</h3>
          </div>
        </div>
      </div>
      <div class="block w-full overflow-x-auto">
        <table class="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 bg-inherit border-gray-200 dark:border-gray-700"
              >
                Category
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 bg-inherit border-gray-200 dark:border-gray-700"
              >
                Function Description
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 bg-inherit border-gray-200 dark:border-gray-700"
              >
                Point Score
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 bg-inherit border-gray-200 dark:border-gray-700"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody v-for="list in getDescriptionLists" :key="list.id">
            <tr>
              <th
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
              >
                <span class="ml-0 font-bold"> {{ list.category_id }}</span>
              </th>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                {{ list.function }}
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                {{ list.point }}
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                <div class="flex gap-2">
                  <button
                    class="-mr-1 bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-600 h-5 w-5 rounded-full flex justify-center items-center"
                    @click=""
                  >
                    <i class="fa-solid fa-pen-to-square text-xs"></i>
                  </button>
                  <button
                    class="-mr-1 bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-600 h-5 w-5 rounded-full flex justify-center items-center"
                    @click="deleteDescriptionList(list.id)"
                  >
                    <i class="fa-solid fa-xmark text-xs"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useFunctionDescriptionStore } from "../../../stores/functionDescriptionStore";

const functionDescriptionStore = useFunctionDescriptionStore();

const getDescriptionLists = computed(() => {
  return functionDescriptionStore.getDescriptionLists;
});

const deleteDescriptionList = computed(() => {
  return functionDescriptionStore.deleteDescriptionList;
});

onMounted(() => {
  functionDescriptionStore.fetchDescriptionLists();
});
</script>

<style lang="scss" scoped></style>
