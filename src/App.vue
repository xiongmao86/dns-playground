<template>
  <div id="app">
      <packet />
  </div>
</template>

<script>
import Packet from './components/Packet.vue'

export default {
  name: 'App',
  components: {
    Packet
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
