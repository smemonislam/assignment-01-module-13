<script setup>
import TopNav from './components/TopNav.vue';


</script>

<template>
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <TopNav/>
    <div class="max-w-3xl mx-auto mt-32">
      <!-- Content goes here -->
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
