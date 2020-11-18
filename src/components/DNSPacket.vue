<template>
  <div>
      <h1>The Anatomy of DNS Packet</h1>
      <DNSHeader :pack="pack" />

      <DNSQueryArray 
        :querys="pack.querys"/>
      <DNSResourceRecordArray
        name="DNS Answers"
        :records="pack.answers" />
      <DNSResourceRecordArray
        name="DNS Authority Nameservers"
        :records="pack.nameservers" />
      <DNSResourceRecordArray
        name="DNS Addtional Records"
        :records="pack.additional_records" />>
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
  props: {
    pack: Object
  }
}
</script>

<style>
</style>
