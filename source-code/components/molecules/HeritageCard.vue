<script setup lang="ts">
import BaseImage from '~/components/atoms/BaseImage.vue'
import BaseButton from '~/components/atoms/BaseButton.vue'
import BaseIcon from '~/components/atoms/BaseIcon.vue'

defineProps<{ site: { name: string; location: string; category: string; description: string; image: string } }>()
</script>

<template>
  <article class="heritage-card">
    <div class="heritage-card__image-wrap">
      <BaseImage :src="site.image" :alt="`${site.name} heritage preview`" />
      <span class="heritage-card__badge">{{ site.category }}</span>
    </div>
    <div class="heritage-card__content">
      <div class="heritage-card__location"><BaseIcon name="pin" /> {{ site.location }}</div>
      <h3>{{ site.name }}</h3>
      <p>{{ site.description }}</p>
      <BaseButton label="Explore site" variant="ghost" />
    </div>
  </article>
</template>
