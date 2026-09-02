<script setup lang="ts">
import { heritageSites } from '~/data/heritage'
import HeaderNavigation from '~/components/organisms/HeaderNavigation.vue'
import HeritageGrid from '~/components/organisms/HeritageGrid.vue'
import SearchForm from '~/components/molecules/SearchForm.vue'

const query = ref('')
const filteredSites = computed(() => {
  const value = query.value.trim().toLowerCase()
  if (!value) return heritageSites
  return heritageSites.filter(site => `${site.name} ${site.location} ${site.category}`.toLowerCase().includes(value))
})
</script>

<template>
  <div id="top">
    <HeaderNavigation />
    <main>
      <section class="hero">
        <div class="hero__texture" aria-hidden="true" />
        <div class="container hero__content">
          <p class="eyebrow">PANGASINAN PROVINCIAL TOURISM OFFICE</p>
          <h1>Stories, places,<br /><em>and living heritage.</em></h1>
          <p class="hero__lead">Explore the landscapes, landmarks, and cultural destinations that make Pangasinan worth remembering.</p>
          <div class="hero__actions">
            <a class="hero-button" href="#heritage">Explore heritage <span>→</span></a>
            <a class="text-link" href="#about">Learn about the project</a>
          </div>
        </div>
      </section>

      <section id="heritage" class="heritage-section">
        <div class="container">
          <div class="section-heading">
            <div>
              <p class="eyebrow">FEATURED DESTINATIONS</p>
              <h2>Start your Pangasinan story.</h2>
            </div>
            <p>Curated heritage highlights designed for quick discovery on mobile, tablet, and desktop.</p>
          </div>
          <SearchForm v-model="query" />
          <HeritageGrid :sites="filteredSites" />
          <p v-if="filteredSites.length === 0" class="empty-state">No heritage sites match “{{ query }}”. Try another search.</p>
        </div>
      </section>

      <section id="about" class="about-section">
        <div class="container about-grid">
          <div>
            <p class="eyebrow">ABOUT THE SHOWCASE</p>
            <h2>A digital window into Pangasinan.</h2>
          </div>
          <div>
            <p>This academic prototype demonstrates a resilient, accessible, maintainable, and high-performing heritage showcase using Vue and Nuxt 3.</p>
            <p>The interface follows an Atomic Design component system so individual UI pieces can be reused across future tourism pages.</p>
          </div>
        </div>
      </section>
    </main>
    <footer id="contact" class="site-footer">
      <div class="container"><strong>Pangasinan Heritage Digital Showcase</strong><span>Academic prototype • 2026</span></div>
    </footer>
  </div>
</template>
