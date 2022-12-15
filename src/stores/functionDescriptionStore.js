import { defineStore } from "pinia";
import axios from "axios";

const api_url = "http://localhost:3000/api/v1/functions";

export const useFunctionDescriptionStore = defineStore(
  "functionDescriptionStore",
  {
    state: () => ({
      descriptionLists: [],
    }),

    getters: {
      getDescriptionLists(state) {
        return state.descriptionLists;
      },
    },

    actions: {
      async fetchDescriptionLists() {
        try {
          await axios.get(api_url);
          // this.descriptionLists = response.data;
        } catch (error) {
          alert(error.message);
          console.log(error);
        }
      },
      async addDescriptionList(data) {
        const response = await axios.post(api_url, data);
        console.log(response);
        if (response.data.success) {
          alert(response.data.message);
        }
      },
      async deleteDescriptionList(id) {
        try {
          await axios.delete(api_url + `/${id}`);
          this.descriptionLists = this.descriptionLists.filter((c) => {
            return c.id !== id;
          });
        } catch (error) {
          console.log(error.message);
        }
      },
    },
  }
);
