<template>
  <div>
    {{ termsOfService }}
  </div>
</template>

<script setup lang="ts">
import { defineProps, onRenderTracked } from 'vue'

defineProps(['termsOfService'])

onRenderTracked(() => {
  console.log('Static.vue: Render Tracked!')
})
</script>