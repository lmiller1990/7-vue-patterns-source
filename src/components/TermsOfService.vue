<template>
  <div>
    {{ termsOfService }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps(['termsOfService'])
</script>