<template>
  <div id="app">
      <DNSSend />
      <div v-if="this.$store.state.loaded">
        <h1>Packet</h1>
        <DNSPacket
          :pack="pack" />
      </div>
  </div>
</template>

<script>
import DNSPacket from './components/DNSPacket.vue'
import DNSSend from './components/DNSSend.vue'

export default {
  name: 'App',
  components: {
    DNSPacket,
    DNSSend,
  },
  computed: {
    header () {
      return this.$store.getters.headerHex;
    },
    pack () {
      return this.$store.state.default;
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

td > input[type="text"] {
  text-align: center;
  width: 100%;
  padding: 0;
  border-style: none;
}
</style>
