<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutHeaderFixed from './components/LayoutHeaderFixed.vue'
import LayoutFooter from './components/LayoutFooter.vue'

import { onMounted } from 'vue'
import { useLayoutStore } from '@/stores/layout'

const layoutStore = useLayoutStore();

onMounted(()=> {
  layoutStore.getCategory();
})
</script>

<template>
  <LayoutHeaderFixed></LayoutHeaderFixed>
  <LayoutNav />
  <LayoutHeader />
  <!-- 如何解决路由缓存问题;导致生命周期函数在每次切换的时候都不会被调用？ -->
  <!-- 第一种方法：给routerView独一无二的Key;让组件进行销毁重建 -->
   <RouterView />  <!--:key="$route.fullPath" -->
  <LayoutFooter />
</template>