<template>
  <div v-pin:[selected]>Pinned</div>
  <button
    v-for="dir in directions"
    :key="dir"
    @click="selected = dir"
  >
    {{ dir }}
  </button>
</template>

<script lang="ts">
import { Directive, DirectiveBinding } from 'vue'

type Dir = 'left' | 'right'

const pin: Directive = (el: HTMLDivElement, binding: DirectiveBinding<Dir>) => {
  el.style.position = 'absolute'
  el.style.top = '5px'

  if (binding.arg === 'left') {
    el.style.left = '10px'
    el.style.right = ''
  } else {
    el.style.right = '10px'
    el.style.left = ''
  }
}

export default {
  directives: {
    pin
  },
  data(): { selected: Dir, directions: Dir[] } {
    return {
      selected: 'right',
      directions: ['left', 'right']
    }
  }
}
</script>