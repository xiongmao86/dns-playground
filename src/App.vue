<template>
  <div id="app">
      <input id="binaryFile" type="file">
      <button @click="loadBinary">Load</button>
      <DNSBuffer v-if="this.arrayBuffer"
        :buffer="buffer" />
      <DNSPacket />
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
  data () {
    return {
      arrayBuffer: null
    };
  },
  computed: {
    buffer () {
      return [...new Uint8Array(this.arrayBuffer)]
        .map (b => b.toString(16).toUpperCase().padStart(2, '0'));
    }
  },
  methods: {
    loadBinary () {
      let files = document.getElementById("binaryFile").files;
      // TODO temporarily.
      if (files.length === 1) {
        let file = files[0];
        let reader = new FileReader();
        reader.onload = (event) => this.arrayBuffer = event.target.result;
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
