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
      async addDictionaryList(data) {
        const response = await axios.post(api_url, data);
        if (response.data.success) {
          alert(response.data.message);
        }
      },
      async deleteDictionaryList(id) {
        try {
          await axios.delete(api_url + `/${id}`);
          this.dictionaryLists = this.dictionaryLists.filter((c) => {
            return c.id !== id;
          });
        } catch (error) {
          console.log(error.message);
        }
      },
    },
  }
);
