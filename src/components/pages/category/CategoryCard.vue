<template>
  <div
    class="relative block p-6 overflow-hidden border bg-white border-slate-100 rounded-lg shadow hover:shadow-xl transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear mb-3"
    v-for="category in getCategories"
    :key="category.id"
  >
    <div class="justify-between sm:flex">
      <div class="mb-3 lg:mb-0">
        <h5 class="text-xl font-bold text-slate-900">{{ category.name }}</h5>
        <p class="mt-1 text-xs font-medium text-slate-600">
          Equipment Management # - 20
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
          @click="deleteCategory(category.id)"
        >
          <i class="fa-solid fa-xmark text-xs"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useCategoryStore } from "../../../stores/categoryStore";

const categoryStore = useCategoryStore();

const getCategories = computed(() => {
  return categoryStore.getCategories;
});

const deleteCategory = computed(() => {
  return categoryStore.deleteCategory;
});

const updateCategory = (currentCategory) => {
  const updatedCategory = {
    name: currentCategory.name,
  };
  categoryStore.updateCategory(updatedCategory);
};

onMounted(() => {
  categoryStore.fetchCategories();
});
</script>

<style lang="scss" scoped></style>
