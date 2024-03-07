import { defineStore } from 'pinia'
import { getCategoryApi } from '@/apis/layout';
import { ref } from 'vue';


export const useLayoutStore = defineStore('layout', {
  state() {
    return {
      categoryList: ref([])
    }
  },
  actions: {
    async getCategory() {
      const res = await getCategoryApi();
      this.categoryList = res.result;
    }

  },
  getters: {

  }
})
