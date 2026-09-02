<script setup lang="ts">
import NavigationItem from '~/components/molecules/NavigationItem.vue'
const open = ref(false)
</script>

<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <a class="brand" href="#top" aria-label="Pangasinan Heritage home">
        <span class="brand-mark">PH</span>
        <span><strong>Pangasinan</strong><small>Heritage Showcase</small></span>
      </a>
      <button class="menu-button" type="button" aria-label="Toggle navigation" :aria-expanded="open" @click="open = !open">
        <BaseIcon name="menu" />
      </button>
      <nav class="main-nav" :class="{ 'main-nav--open': open }" aria-label="Main navigation">
        <NavigationItem label="Home" href="#top" />
        <NavigationItem label="Heritage" href="#heritage" />
        <NavigationItem label="About" href="#about" />
        <NavigationItem label="Contact" href="#contact" />
      </nav>
    </div>
  </header>
</template>
