<script setup lang="ts">
defineProps<{ name?: 'search' | 'pin' | 'arrow' | 'menu' }>()
</script>

<template>
  <span class="icon" aria-hidden="true">
    <svg v-if="name === 'search'" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 5 5"/></svg>
    <svg v-else-if="name === 'pin'" viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>
    <svg v-else-if="name === 'menu'" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
    <svg v-else viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6"/></svg>
  </span>
</template>
