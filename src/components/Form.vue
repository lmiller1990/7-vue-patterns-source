<template>
  <form>
    <TermsOfService 
      :termsOfService="termsOfService" 
      v-once
    />
    <div>
      Name is: {{ msg }}
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineProps, onRenderTracked } from 'vue'
import TermsOfService from './TermsOfService.vue'

let count = 0

defineProps(['termsOfService', 'msg'])

onRenderTracked((debug) => {
  count += 1
  console.log(`Form.vue render tracked. \tCount: ${count} key: ${debug.key}.`)
})
</script>
