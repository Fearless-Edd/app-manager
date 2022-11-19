<template>
  <LayoutHeader
    pageTitle="Maintenace Calculator Form"
    subTitle="Add new equipment to the Maintenance Programme"
  />
  <div class="relative shadow mx-auto mt-8">
    <div class="md:grid md:grid-cols-1 md:gap-6">
      <div class="mt-5 md:col-span-2 md:mt-0">
        <form action="#" method="POST">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Equipment Name</label
                  >
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autocomplete="street-address"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                    placeholder="Equipment Name"
                  />
                  <p class="text-sm text-gray-500 mt-2 px-2">
                    Enter Equipment Name
                  </p>
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >Category</label
                  >
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  >
                    <option>Therapeutic</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                  <p class="text-sm text-gray-500 mt-2 px-2">
                    Choose various areas in which therapeutic, diagnostic,
                    analytical and miscellaneous equipment is used
                  </p>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                    >Function Description</label
                  >
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  >
                    <option>Therapeutic</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                  <p class="text-sm text-gray-500 mt-2 px-2">
                    Choose the function description for the equipment
                  </p>
                </div>

                <div class="col-span-6">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                    >Physical Risk associated with clinical application</label
                  >
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  >
                    <option>Therapeutic</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                  <p class="text-sm text-gray-500 mt-2 px-2">
                    Choose the potential or equipment risk during use
                  </p>
                </div>

                <div class="col-span-6">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                    >Maintenance Requirement</label
                  >
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  >
                    <option>Therapeutic</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                  <p class="text-sm text-gray-500 mt-2 px-2">
                    Describe the level and frequency of maintenance required as
                    noted by the manufacturer or through experience
                  </p>
                </div>

                <div class="col-span-6">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                    >Equipment Incident History</label
                  >
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  >
                    <option>Therapeutic</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                  <p class="text-sm text-gray-500 mt-2 px-2">
                    Any information available regarding service history that can
                    be considered when evaluating the device type to determine
                    an EM number
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                class="inline-flex justify-center rounded-md border border-transparent bg-gray-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
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
import LayoutHeader from "../../layout/Layout-Header.vue";
</script>

<style lang="scss" scoped></style>
