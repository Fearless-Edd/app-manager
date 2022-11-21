<template>
  <div
    class="relative block p-6 overflow-hidden border bg-white border-slate-100 rounded-lg shadow hover:shadow-xl transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear mb-3"
    v-for="list in getDictionaryLists"
    :key="list.id"
  >
    <div class="justify-between sm:flex">
      <div class="mb-3 lg:mb-0">
        <h5 class="text-xl font-bold text-slate-900">{{ list.common_name }}</h5>
        <p class="mt-1 text-xs font-medium text-slate-600">
          {{ list.umdns_code }} - {{ list.umdns }}
        </p>
      </div>
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

// const updateCategory = computed((currentCategory) => {
//   const updatedCategory = {
//     name: currentCategory.name,
//   };
//   return categoryStore.updateCategory(updatedCategory);
// });

// const updateCategory = (currentCategory) => {
//   const updatedCategory = {
//     name: currentCategory.name,
//   };
//   categoryStore.updateCategory(updatedCategory);
// };

onMounted(() => {
  equipmentDictionaryStore.fetchDictionaryLists();
});
</script>

<style lang="scss" scoped></style>
