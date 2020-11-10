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
      <h2>DNS Authority Nameservers</h2>
      <DNSResourceRecord v-for="(nameserver, index) in nameservers"
        v-bind="nameserver"
        v-bind:key="index" />
      <h2>DNS Additional Records</h2>
      <DNSResourceRecord v-for="(record, index) in additional_records"
        v-bind="record"
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
      answers: this.$store.state.answers,
      nameservers: this.$store.state.authoritative_nameservers,
      additional_records: this.$store.state.additional_records
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

table {
  margin: 5px;
  border: 1px solid green;
}
th, td {
  border: 1px solid lightsteelblue;
}
th {
  background-color: mediumseagreen;
}
td {
  background-color: yellowgreen;
}
</style>
