<script setup lang="ts">
defineProps<{ label: string; href?: string }>()
</script>

<template>
  <a class="nav-item" :href="href || '#'">{{ label }}</a>
</template>
