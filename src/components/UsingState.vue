<template>
  <div>Color is {{ color }}.</div>
</template>

<script setup lang="ts">
import { inject } from "vue";

const color = inject('color')
</script>

<style scoped>
div {
  margin: 5px 0 0 0;
}
</style>