<script setup lang="ts">
import { heritageSites } from '~/data/heritage'
import BaseButton from '~/components/atoms/BaseButton.vue'
import BaseTypography from '~/components/atoms/BaseTypography.vue'
import ColorTokens from '~/components/atoms/ColorTokens.vue'
import BaseIcon from '~/components/atoms/BaseIcon.vue'
import BaseImage from '~/components/atoms/BaseImage.vue'
import HeritageCard from '~/components/molecules/HeritageCard.vue'
import SearchForm from '~/components/molecules/SearchForm.vue'
import NavigationItem from '~/components/molecules/NavigationItem.vue'
import HeritageGrid from '~/components/organisms/HeritageGrid.vue'
import HeaderNavigation from '~/components/organisms/HeaderNavigation.vue'
</script>

<template>
  <div class="component-showcase">
    <HeaderNavigation />
    <main class="container showcase-content">
      <p class="eyebrow">ATOMIC DESIGN SYSTEM</p>
      <h1>Component Library</h1>

      <section><h2>Atoms</h2><div class="preview"><BaseButton label="Explore heritage" /></div><div class="preview"><BaseTypography /></div><div class="preview"><ColorTokens /></div><div class="preview"><BaseIcon name="search" /><BaseIcon name="pin" /><BaseIcon name="arrow" /><BaseIcon name="menu" /></div><div class="preview"><BaseImage :src="heritageSites[0].image" :alt="heritageSites[0].name" /></div></section>
      <section><h2>Molecules</h2><div class="preview"><HeritageCard :site="heritageSites[0]" /></div><div class="preview"><SearchForm /></div><div class="preview"><NavigationItem label="Heritage" href="#" /></div></section>
      <section><h2>Organisms</h2><div class="preview"><HeritageGrid :sites="heritageSites" /></div><div class="preview"><HeaderNavigation /></div></section>
    </main>
  </div>
</template>
