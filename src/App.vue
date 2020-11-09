<template>
  <div id="app">
      <h1>The Anatomy of DNS Packet</h1>
      <h2>DNS Header</h2>
      <DNSHeader />
      <h2>DNS Querys</h2>
      <DNSQuery v-for="(query, index) in querys"
        v-bind="query"
        v-bind:key="index" />
      <h2>DNS Answers</h2>
      <DNSResourceRecord v-for="(answer, index) in answers"
        v-bind="answer"
        v-bind:key="index" />
  </div>
</template>

<script>
import DNSHeader from './components/DNSHeader.vue'
import DNSQuery from './components/DNSQuery.vue'
import DNSResourceRecord from './components/DNSResourceRecord.vue'

export default {
  name: 'App',
  components: {
    DNSHeader,
    DNSQuery,
    DNSResourceRecord
  },
  data () {
    return {
      querys: this.$store.state.querys,
      answers: this.$store.state.answers
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
