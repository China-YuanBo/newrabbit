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
  <RouterView />
  <LayoutFooter />
</template>