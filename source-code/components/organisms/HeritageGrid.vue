<script setup lang="ts">
import HeritageCard from '~/components/molecules/HeritageCard.vue'

defineProps<{ sites: any[] }>()
</script>

<template>
  <div class="heritage-grid">
    <HeritageCard v-for="site in sites" :key="site.name" :site="site" />
  </div>
</template>
