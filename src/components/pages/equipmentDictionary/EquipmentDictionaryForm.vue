<template>
  <div class="relative shadow mx-auto mt-8">
    <div class="md:grid md:grid-cols-1 md:gap-6">
      <div class="mt-5 md:col-span-2 md:mt-0">
        <form @submit.prevent="onSubmit" method="POST">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-6 gap-6 mb-3">
                <div class="col-span-6">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >UMDNS Code</label
                  >
                  <input
                    type="number"
                    name="street-address"
                    id="street-address"
                    autocomplete="street-address"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                    placeholder="UMDNS Code"
                    v-model="umdnsCode"
                  />
                  <p class="text-xs text-gray-500 mt-2 px-2">
                    Enter UMDNS Code
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-6 gap-6 mb-3">
                <div class="col-span-6">
                  <label
                    for="umdns"
                    class="block text-sm font-medium text-gray-700"
                    >UMDNS</label
                  >
                  <input
                    type="text"
                    name="umdns"
                    id="umdns"
                    autocomplete="umdns"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                    placeholder="Equipment Category"
                    v-model="umdns"
                  />
                  <p class="text-xs text-gray-500 mt-2 px-2">UMDNS</p>
                </div>
              </div>
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6">
                  <label
                    for="common_name"
                    class="block text-sm font-medium text-gray-700"
                    >Common Name</label
                  >
                  <input
                    type="text"
                    name="common_name"
                    id="common_name"
                    autocomplete="common_name"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                    placeholder="Common Name"
                    v-model="commonName"
                  />
                  <p class="text-xs text-gray-500 mt-2 px-2">
                    Enter corresponding common name
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
import { useEquipmentDictionaryStore } from "../../../stores/equipmentDictionaryStore";

// Invoke Category Store
const equipmentDictionaryStore = useEquipmentDictionaryStore();

const umdnsCode = ref(0);
const umdns = ref("");
const commonName = ref("");

// Handle Submit
const onSubmit = () => {
  equipmentDictionaryStore.addDictionaryList({
    umdns_code: umdnsCode.value,
    umdns: umdns.value,
    common_name: commonName.value,
  });
  (umdnsCode.value = 0), (umdns.value = ""), (commonName.value = "");
};
</script>

<style lang="scss" scoped></style>
