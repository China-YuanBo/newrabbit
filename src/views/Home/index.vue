<script setup>
import HomeBanner from './components/HomeBanner.vue';
import HomeCategory from './components/HomeCategory.vue';
import HomeHot from './components/HomeHot.vue';
import HomeNews from './components/HomeNews.vue';
import HomeGoods from './components/HomeGoods.vue';
</script>



<template>
<div class="container">
  <HomeBanner></HomeBanner>
<HomeCategory></HomeCategory>
</div>
<HomeNews></HomeNews>
<HomeHot></HomeHot>
<HomeGoods></HomeGoods>
</template>

<style scoped lang="scss">


</style>