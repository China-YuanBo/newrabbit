import { ref, onMounted } from "vue";
import { getbanner } from '@/apis/getbanner.js';


export function useBanner() {
  let bannerimg = ref([]);
  async function getbanners() {
    let { result } = await getbanner(2);
    bannerimg.value = result;
  }

  onMounted(() => {
    getbanners();
  })

  return {
    bannerimg
  };
}