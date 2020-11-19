<template>
  <div id="app">
      <input id="binaryFile" type="file">
      <button @click="loadBinary">Load</button>
      <div v-if="this.arrayBuffer">
        <DNSBuffer
          :buffer="buffer" />
        <DNSPacket
          :pack="pack" />
      </div>
  </div>
</template>

<script>
import DNSPacket from './components/DNSPacket.vue'
import DNSBuffer from './components/DNSBuffer.vue'

export default {
  name: 'App',
  components: {
    DNSPacket,
    DNSBuffer
  },
  computed: {
    arrayBuffer () {
      return this.$store.state.arrayBuffer;
    },
    buffer () {
      return [...new Uint8Array(this.arrayBuffer)]
        .map (b => b.toString(16).toUpperCase().padStart(2, '0'));
    },
    pack () {
      return this.$store.getters.packet;
    }
  },
  methods: {
    loadBinary () {
      let files = document.getElementById("binaryFile").files;
      // TODO temporarily.
      if (files.length === 1) {
        let file = files[0];
        let reader = new FileReader();
        reader.onload = (event) => {
          this.$store.commit('setArrayBuffer', event.target.result);
        }
        reader.readAsArrayBuffer(file);
      } 
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
