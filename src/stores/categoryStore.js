import { defineStore } from "pinia";
import axios from "axios";

const api_url = "http://localhost:3000/api/v1/categories";

export const useCategoryStore = defineStore("categoryStore", {
  state: () => ({
    categories: [],
  }),

  getters: {
    getCategories(state) {
      return state.categories;
    },
  },

  actions: {
    async fetchCategories() {
      try {
        const response = await axios.get(api_url);
        this.categories = response.data;
      } catch (error) {
        alert(error.message);
        console.log(error);
      }
    },
    async addCategory(data) {
      try {
        await axios.post(api_url, data);
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
  },
});
