import { getTwoApi } from '@/apis/category';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import { onBeforeRouteUpdate } from 'vue-router';


export function useTwoList() {
  let route = useRoute();
  let twoCategoryList = ref({});

  const getTwoList = async () => {
    const res = await getTwoApi(route.params.id);
    twoCategoryList.value = res.result;
  }

  onMounted(() => {
    getTwoList();
  })

  onBeforeRouteUpdate((to, from, next) => {
    if (to.fullPath !== from.fullPath) {
      getTwoApi(to.params.id).then((res) => {
        twoCategoryList.value = res.result;
      })
    }
    next()
  })

  return {
    twoCategoryList
  }
}