<template>
  <div id="app">
      <h1>The Anatomy of DNS Packet</h1>
      <DNSHeader />

      <DNSQueryArray />
      <DNSResourceRecordArray
        name="DNS Answers"
        :records="answers" />
      <DNSResourceRecordArray
        name="DNS Authority Nameservers"
        :records="nameservers" />
      <DNSResourceRecordArray
        name="DNS Addtional Records"
        :records="additional_records" />>
  </div>
</template>

<script>
import DNSHeader from './components/DNSHeader.vue'
import DNSQueryArray from './components/DNSQueryArray.vue'
import DNSResourceRecordArray from './components/DNSResourceRecordArray.vue'

export default {
  name: 'App',
  components: {
    DNSHeader,
    DNSQueryArray,
    DNSResourceRecordArray
  },
  data () {
    return {
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
