<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()
</script>

<template>
  <img
    class="base-image"
    :src="`${import.meta.env.BASE_URL}${src}`"
    :alt="alt"
    loading="lazy"
  />
</template>