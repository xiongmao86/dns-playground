import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    "id": 0x867f,
    "flags": {
      "response": 1,
      "opcode": 0x0000,
      "authoritative": 0,
      "truncated": 0,
      "recursion_desired": 1,
      "recursion_available": 1,
      "z": 0,
      "authentic_data": 0,
      "checking_disable": 0,
      "error_code": 0x0000,
    },
    "query_count": 1,
    "answer_count": 3,
    "authority_count": 5,
    "additional_information_count": 5,
    
    "querys": [{
      "name": "www.baidu.com",
      "type": "A",
      // class is a keyword in javascript so rename it to klass.
      "klass": "IN"
    }],
    "answers": [
      {
        "name": "www.baidu.com",
        "type": "CNAME",
        "klass": "IN",
        "time_to_live": 600,
        "data_length": 15,
        "CNAME": "www.a.shifen.com"
      },
      {
        "name": "www.a.shifen.com",
        "type": "A",
        "klass": "IN",
        "time_to_live": 600,
        "data_length": 4,
        "address": "14.215.177.38"
      },
      {
        "name": "www.a.shifen.com",
        "type": "A",
        "klass": "IN",
        "time_to_live": 600,
        "data_length": 4,
        "address": "14.215.177.38"
      }
    ],
    "Authoritative_nameservers": [
      {
        "name": "a.shifen.com",
        "type": "NS",
        "klass": "IN",
        "time_to_live": 205,
        "data_length": 6,
        "name_server": "ns3.a.shifen.com"
      },
      {
        "name": "a.shifen.com",
        "type": "NS",
        "klass": "IN",
        "time_to_live": 205,
        "data_length": 6,
        "name_server": "ns4.a.shifen.com"
      },
      {
        "name": "a.shifen.com",
        "type": "NS",
        "klass": "IN",
        "time_to_live": 205,
        "data_length": 6,
        "name_server": "ns2.a.shifen.com"
      },
      {
        "name": "a.shifen.com",
        "type": "NS",
        "klass": "IN",
        "time_to_live": 205,
        "data_length": 6,
        "name_server": "ns1.a.shifen.com"
      },
      {
        "name": "a.shifen.com",
        "type": "NS",
        "klass": "IN",
        "time_to_live": 205,
        "data_length": 6,
        "name_server": "ns5.a.shifen.com"
      }
    ],
    "additional_records": [
      {
        "name": "ns1.a.shifen.com",
        "type": "A",
        "klass": "IN",
        "time_to_live": 466,
        "data_length": 4,
        "address": "61.135.165.224"
      },
      {
        "name": "ns2.a.shifen.com",
        "type": "A",
        "klass": "IN",
        "time_to_live": 497,
        "data_length": 4,
        "address": "220.181.33.32"
      },
      {
        "name": "ns3.a.shifen.com",
        "type": "A",
        "klass": "IN",
        "time_to_live": 465,
        "data_length": 4,
        "address": "112.80.255.253"
      },
      {
        "name": "ns4.a.shifen.com",
        "type": "A",
        "klass": "IN",
        "time_to_live": 138,
        "data_length": 4,
        "address": "14.215.177.229"
      },
      {
        "name": "ns5.a.shifen.com",
        "type": "A",
        "klass": "IN",
        "time_to_live": 353,
        "data_length": 4,
        "address": "180.76.76.95"
      }
    ]
  },
  // state: {
  //   flags: 'hello vuex'
  // },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
