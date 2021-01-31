<template>
  <ul 
    v-for="item in contents"
    :key="item.name"
  >
    <li>
      {{ item.name }}
      <FileTree 
        v-if="item.type === 'folder'"
        :contents="item.contents" 
      /> 
    </li>
  </ul>
</template>

<script>
export default {
  props: ['contents'],
  name: 'FileTree',
}
</script>

<style scoped>
ul {
  position: relative;
  padding: 2px 25px;
  margin: 0;
}

ul::before {
  content: '';
  position: absolute;
  z-index: 1;
  width: 3px;
  bottom: 0;
  top: 0;
  left: 10px;
  background-size: 3px 3px;
  background-image: radial-gradient(#999999 30%, transparent 0);
  background-position: center;
}

li { 
  list-style: none;
}
</style>