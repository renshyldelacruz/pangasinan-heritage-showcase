<script setup lang="ts">
defineProps<{ label: string; variant?: 'primary' | 'ghost' }>()
</script>

<template>
  <button class="base-button" :class="`base-button--${variant || 'primary'}`" type="button">
    {{ label }}
    <span aria-hidden="true">→</span>
  </button>
</template>
