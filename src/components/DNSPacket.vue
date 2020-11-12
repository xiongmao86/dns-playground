<template>
  <div>
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
import DNSHeader from './DNSHeader.vue'
import DNSQueryArray from './DNSQueryArray.vue'
import DNSResourceRecordArray from './DNSResourceRecordArray.vue'

export default {
  name: 'DNSPacket',
  components: {
    DNSHeader,
    DNSQueryArray,
    DNSResourceRecordArray
  },
  data () {
    return {
      answers: this.$store.state.pack.answers,
      nameservers: this.$store.state.pack.authoritative_nameservers,
      additional_records: this.$store.state.pack.additional_records
    }
  }
}
</script>

<style>
</style>
