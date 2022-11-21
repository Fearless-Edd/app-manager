<template>
  <div class="relative shadow mx-auto mt-8">
    <div class="md:grid md:grid-cols-1 md:gap-6">
      <div class="mt-5 md:col-span-2 md:mt-0">
        <form @submit.prevent="onSubmit" method="POST">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Category Name</label
                  >
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autocomplete="street-address"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                    placeholder="Equipment Category"
                    v-model="newCategory"
                  />
                  <p class="text-sm text-gray-500 mt-2 px-2">
                    Create new equipment category
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
import { ref } from "vue";
import { useCategoryStore } from "../../../stores/categoryStore";

// Invoke Category Store
const categoryStore = useCategoryStore();

const newCategory = ref("");

// Handle Submit
const onSubmit = () => {
  if (newCategory.value.length > 0) {
    const data = {
      name: newCategory.value,
    };
    newCategory.value = "";
    categoryStore.addCategory(data);
  }
};

</script>

<style lang="scss" scoped></style>
