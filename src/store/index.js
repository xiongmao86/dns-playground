import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arrayBuffer: null,
    restStartPoint: 12,
    fileList: null,
    default: null,
    loaded: false,
    pack: {
      "id": '0x867f',
      "flags": {
        "response": 0, // should be 1, seting 0 to test store getter
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
        // class is a keyword of javascript so rename it to klass.
        "klass": "IN"
      }],
      "answers": [
        {
          "name": "www.baidu.com",
          "type": "CNAME",
          "klass": "IN",
          "time_to_live": 600,
          "data_length": 15,
          "canonical_name": "www.a.shifen.com"
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
      "authoritative_nameservers": [
        {
          "name": "a.shifen.com",
          "type": "NS",
          "klass": "IN",
          "time_to_live": 205,
          "data_length": 6,
          "nameserver": "ns3.a.shifen.com"
        },
        {
          "name": "a.shifen.com",
          "type": "NS",
          "klass": "IN",
          "time_to_live": 205,
          "data_length": 6,
          "nameserver": "ns4.a.shifen.com"
        },
        {
          "name": "a.shifen.com",
          "type": "NS",
          "klass": "IN",
          "time_to_live": 205,
          "data_length": 6,
          "nameserver": "ns2.a.shifen.com"
        },
        {
          "name": "a.shifen.com",
          "type": "NS",
          "klass": "IN",
          "time_to_live": 205,
          "data_length": 6,
          "nameserver": "ns1.a.shifen.com"
        },
        {
          "name": "a.shifen.com",
          "type": "NS",
          "klass": "IN",
          "time_to_live": 205,
          "data_length": 6,
          "nameserver": "ns5.a.shifen.com"
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
    } // finish pack object
  },
  getters: {
    packetView (state) {
      let ab = state.arrayBuffer;
      return ab? new DataView(ab) : null;
    },
    packetHex (state) {
      let ab = state.arrayBuffer;
      if (ab) {
        return [...new Uint8Array(ab)]
          .map( b => b.toString(16).toUpperCase().padStart(2, '0'));
      } else {
        return null;
      }
    },
    headerArrayBuffer (state) {
      let ab = state.arrayBuffer;
      return ab? ab.slice(0,12) : null;
    },
    headerView (state, getters) {
      let hab = getters.headerArrayBuffer;
      return hab? new DataView(hab) : null;
    },
    headerHex (state, getters) {
      let hab = getters.headerArrayBuffer;
      if (hab) {
        return [...new Uint8Array(hab)]
          .map( b => b.toString(16).toUpperCase().padStart(2, '0'));
      } else {
        return null;
      }
    },
    id (state, getters) {
      let id = getters.headerView?.getUint16(0);
      return "0x" + id.toString(16);
    },
    // if headerView is successfully upgraded, qr should be 1 instead of 0.
    flags (state, getters) {
      let flags = getters.headerView?.getUint16(2);
      if (flags) {
        let qr = flags >>> 15;
        let opcode = flags >>> 11 & 0b1111;
        let aa = flags >>> 10 & 1;
        let tc = flags >>> 9 & 1;
        let rd = flags >>> 8 & 1;
        let ra = flags >>> 7 & 1;
        let z = flags >>> 6 & 1;
        let ad = flags >>> 5 & 1;
        let cd = flags >>> 4 & 1;
        let rcode = flags & 0b1111;

        return {
          "response": qr,
          "opcode": opcode,
          "authoritative": aa,
          "truncated": tc,
          "recursion_desired": rd,
          "recursion_available": ra,
          "z": z,
          "authentic_data": ad,
          "checking_disable": cd,
          "error_code": rcode
        };
      } else {
        return null;
      }
    },
    query_count (state, getters) {
      return getters.headerView?.getUint16(4);
    },
    answer_count (state, getters) {
      return getters.headerView?.getUint16(6);
    },
    authority_count (state, getters) {
      return getters.headerView?.getUint16(8);
    },
    additional_information_count (state, getters) {
      return getters.headerView?.getUint16(10);
    },

    packet (state, getters) {
      let header = {
        id: getters.id,
        flags: getters.flags,
        query_count: getters.query_count,
        answer_count: getters.answer_count,
        authority_count: getters.authority_count,
        additional_information_count: getters.additional_information_count
      };
      // let name = getters.query_name;
      // let querys = [{
      //   "name": name || "www.baidu.com",
      //   "type": "A",
      //   "klass": "IN"
      // }];
      return Object.assign({}, state.pack, header);
    }
  },
  mutations: {
    setArrayBuffer (state, payload) {
      state.arrayBuffer = payload;
    },
    setDefault (state, payload) {
      state.default = payload;
    },
    setLoaded (state, payload) {
      state.loaded = payload;
    }
  },
  actions: {
    getDefault (context) {
      axios.get('http://localhost:3000/default')
        .then(function (data) {
          context.commit("setDefault", data.data);
          context.commit("setLoaded", true);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  modules: {
  }
})
