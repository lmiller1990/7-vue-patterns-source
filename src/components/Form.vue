<template>
  <form>
    <Static :termsOfService="termsOfService" />
    <div>
      Name is: {{ msg }}
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineProps, onRenderTracked } from 'vue'
import Static from './Static.vue'

let count = 0

defineProps(['termsOfService', 'msg'])

onRenderTracked((debug) => {
  count += 1
  console.log(`Form.vue render tracked. \tCount: ${count} key: ${debug.key}.`)
})
</script>
