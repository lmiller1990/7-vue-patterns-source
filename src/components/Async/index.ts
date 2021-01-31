import { defineAsyncComponent, defineComponent, h } from "vue";

const Modal = defineComponent({
  setup() {
    return () => h('div', 'This is the final component')
  }
})

let shouldError = true

export const Async = defineAsyncComponent({
  // loader: () => import('./Modal.vue'),
  loader: () => new Promise((res, rej) => {
    setTimeout(() => {
      if (!shouldError) {
        rej('Error')
      }

      res(Modal)
    }, 1000)
  }),

  loadingComponent: defineComponent({
    setup() {
      return () => h('div', 'Loading...')
    }
  }),

  errorComponent: defineComponent({
    setup() {
      return () => h('div', 'ERROR!')
    }
  })
})