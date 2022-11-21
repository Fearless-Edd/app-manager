<template>
  <div class="w-full mb-12 px-0 mt-12">
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow rounded dark:bg-slate-800 bg-gray-white text-gray-900 dark:text-gray-300"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 class="font-semibold text-lg">Equipment Dictionary List</h3>
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
                UMDNS Code
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 bg-inherit border-gray-200 dark:border-gray-700"
              >
                UMDNS
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 bg-inherit border-gray-200 dark:border-gray-700"
              >
                Equipment Common Name
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 bg-inherit border-gray-200 dark:border-gray-700"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody v-for="list in getDictionaryLists" :key="list.id">
            <tr>
              <th
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
              >
                <span class="ml-0 font-bold"> {{ list.umdns_code }}</span>
              </th>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                {{ list.umdns }}
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                {{ list.common_name }}
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
                    @click="deleteDictionaryList(list.id)"
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
import { useEquipmentDictionaryStore } from "../../../stores/equipmentDictionaryStore";

const equipmentDictionaryStore = useEquipmentDictionaryStore();

const getDictionaryLists = computed(() => {
  return equipmentDictionaryStore.getDictionaryLists;
});

const deleteDictionaryList = computed(() => {
  return equipmentDictionaryStore.deleteDictionaryList;
});

onMounted(() => {
  equipmentDictionaryStore.fetchDictionaryLists();
});
</script>

<style lang="scss" scoped></style>
