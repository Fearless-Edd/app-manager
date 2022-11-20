import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const api_url = "http://localhost:3000/api/v1/equipment_dictionaries";

export const useEquipmentDictionaryStore = defineStore(
  "equipmentDictionaryStore",
  {
    state: () => ({
      dictionaryLists: [],
    }),

    getters: {
      getDictionaryLists(state) {
        return state.dictionaryLists;
      },
    },

    actions: {
      async fetchDictionaryLists() {
        try {
          const response = await axios.get(api_url);
          this.dictionaryLists = response.data;
        } catch (error) {
          alert(error.message);
          console.log(error);
        }
      },
      async addDictionaryList(umdns_code, umdns, common_name) {
        try {
          const response = await axios.post(api_url, {
            dictionaryList: name,
          });
          this.categories = response.data;
        } catch (error) {
          console.log(error.message);
        }
      },
      async updateCategory(updatedCategory) {
        try {
          await axios.put(api_url + `/${updatedCategory.id}`, updatedCategory);
          const index = this.categories.findIndex((c) => {
            return c.id === updatedCategory.id;
          });
          if (index !== -1) {
            this.categories.splice(index, 1, updatedCategory);
          }
        } catch (error) {
          console.log(error.message);
        }
      },
      async deleteCategory(id) {
        try {
          await axios.delete(api_url + `/${id}`);
          this.categories = this.categories.filter((c) => {
            return c.id !== id;
          });
        } catch (error) {
          console.log(error.message);
        }
      },

      // addCategory(category) {
      //   this.categories.push(category);
      // },

      // deleteCategory(id) {
      //   this.categories = this.categories.filter((c) => {
      //     return c.id !== id;
      //   });
      // },
    },
  }
);
