<script setup lang="ts">
const query = defineModel<string>({ default: '' })
</script>

<template>
  <form class="search-form" @submit.prevent>
    <label class="sr-only" for="heritage-search">Search heritage sites</label>
    <BaseIcon name="search" />
    <input id="heritage-search" v-model="query" type="search" placeholder="Search heritage sites..." autocomplete="off" />
    <button type="submit">Search</button>
  </form>
</template>
