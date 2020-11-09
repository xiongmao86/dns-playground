<template>
  <div id="app">
      <DNSHeader />
      <!-- <DNSQuery /> -->
  </div>
</template>

<script>
import DNSHeader from './components/DNSHeader.vue'
import DNSQuery from './components/DNSQuery.vue'

export default {
  name: 'App',
  components: {
    DNSHeader,
    DNSQuery
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
