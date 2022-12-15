<template>
  <div class="relative shadow mx-auto mt-8">
    <div class="md:grid md:grid-cols-1 md:gap-6">
      <div class="mt-5 md:col-span-2 md:mt-0">
        <form @submit.prevent="onSubmit" method="POST">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6">
              <div class="col-span-6 gap-6 mb-3">
                <label
                  for="first-name"
                  class="block text-sm font-medium text-gray-700"
                  >Category</label
                >
                <select
                  id="category"
                  name="category"
                  autocomplete="category"
                  class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  v-model="category_id"
                >
                  <option selected disabled>Choose Category</option>
                  <option
                    v-for="category in getCategories"
                    :key="category.id"
                    :value="category.id"
                  >
                    {{ category.name }}
                  </option>
                </select>
                <p class="text-sm text-gray-500 mt-2 px-2">
                  Choose the category
                </p>
              </div>
              <div class="grid grid-cols-6 gap-6 mb-3">
                <div class="col-span-6">
                  <label
                    for="point"
                    class="block text-sm font-medium text-gray-700"
                    >Point</label
                  >
                  <input
                    type="number"
                    name="point"
                    id="point"
                    autocomplete="point"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                    placeholder="Point Score"
                    v-model="point"
                  />
                  <p class="text-xs text-gray-500 mt-2 px-2">
                    Choose the corresponding point score
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-6 gap-6 mb-3">
                <div class="col-span-6">
                  <label
                    for="description"
                    class="block text-sm font-medium text-gray-700"
                    >Function Description</label
                  >
                  <input
                    type="text"
                    name="description"
                    id="description"
                    autocomplete="description"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                    placeholder="Function Description"
                    v-model="description"
                  />
                  <p class="text-xs text-gray-500 mt-2 px-2">
                    Choose Function Description
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                class="inline-flex justify-center rounded-md border border-transparent bg-gray-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                value="Submit"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { useFunctionDescriptionStore } from "../../../stores/functionDescriptionStore";
import { useCategoryStore } from "../../../stores/categoryStore";

// Invoke Dictionary Store
const functionDescriptionStore = useFunctionDescriptionStore();
const categoryStore = useCategoryStore();

const data = reactive({
  descriptionList: {
    category_id: 0,
    description: "",
    point: 0,
  },
});
// const category_id = ref(null);
// const description = ref("");
// const point = ref(0);

const getCategories = computed(() => {
  return categoryStore.getCategories;
});

// Handle Submit
const onSubmit = () => {
  const descriptionList = data.descriptionList;
  functionDescriptionStore.addDescriptionList(descriptionList);
  data.descriptionList = {
    category_id: 0,
    description: "",
    point: 0,
  };
  // const data = {
  //   category_id: category_id.value,
  //   description: description.value,
  //   point: point.value,
  // };
  // (category_id.value = ""), (description.value = ""), (point.value = "");
  // functionDescriptionStore.addDescriptionList(data);
};

onMounted(() => {
  categoryStore.fetchCategories();
});
</script>

<style lang="scss" scoped></style>
