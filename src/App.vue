<template>
  <div id="app">
      <input id="binaryFile" type="file">
      <button @click="loadBinary">Load</button>
      <p>text is {{ text }}</p>
      <DNSPacket />
  </div>
</template>

<script>
import DNSPacket from './components/DNSPacket.vue'

export default {
  name: 'App',
  components: {
    DNSPacket
  },
  data () {
    return {
      text: ""
    };
  },
  methods: {
    setText (str) {
      this.text = str;
    },
    loadBinary () {
      let files = document.getElementById("binaryFile").files;
      // TODO temporarily.
      if (files.length === 1) {
        let file = files[0];
        let reader = new FileReader();
        reader.onload = (event) => this.text = event.target.result;
        reader.readAsText(file);
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
