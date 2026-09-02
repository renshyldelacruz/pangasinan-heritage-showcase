<script setup lang="ts">
defineProps<{ src: string; alt: string }>()
</script>

<template>
  <img class="base-image" :src="src" :alt="alt" loading="lazy" />
</template>
