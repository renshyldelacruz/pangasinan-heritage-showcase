<script setup lang="ts">
import { useRuntimeConfig } from '#imports'

defineProps<{
  src: string
  alt: string
}>()

const config = useRuntimeConfig()
</script>

<template>
  <img
    class="base-image"
    :src="`${config.app.baseURL}${src.replace(/^\//, '')}`"
    :alt="alt"
    loading="lazy"
  />
</template>