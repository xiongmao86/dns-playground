<template>
  <div id="app">
      <DNSHeader />
      <DNSQuery v-bind="query"/>
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
  },
  data () {
    return {
      query: this.$store.state.querys[0]
    }
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
