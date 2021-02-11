<template>
  <h1>Async Component</h1>
  <Async />

  <h1>v-once</h1>
  <Form 
    v-if="termsOfService"
    :termsOfService="termsOfService" 
    :msg="msg"
  />
  <input v-model="msg" />

  <h1>Recursive</h1>
  <FileTree :contents="tree" />

  <h1>Dynamic</h1>
  <Dynamic />

  <h1>Provide/inject</h1>
  <button 
    v-for="col in ['red', 'blue', 'green']" 
    :key="col"
    @click="color = col"
  >
    {{ col }}
  </button>
  <UsingState />
</template>

<script setup>
import { provide } from 'vue'
import { Async } from './components/Async'
import UsingState from './components/UsingState.vue'
import Form from './components/Form.vue'
import Dynamic from './components/Dynamic.vue'
import FileTree from './components/FileTree.vue'

// const msg = ref('Message')
ref: msg = 'Message'
ref: termsOfService = ''
ref: color = 'red'

provide('color', $color)
// color.value -> $color 

setTimeout(() => {
  termsOfService = 'Terms of service'
}, 1000)

const tree =  [
  {
    type: 'file',
    name: 'README.md'
  },
  {
    type: 'folder',
    name: 'src',
    contents: [
      {
        type: 'file',
        name: 'foo.js'
      },
    ]
  },
  {
    type: 'folder',
    name: 'tests',
    contents: [
      {
        type: 'file',
        name: 'setup.js'
      },
      {
        name: 'unit',
        type: 'folder',
        contents: [
          {
            type: 'file',
            name: 'foo.spec.js'
          }
        ]
      }
    ]
  }
]

</script>