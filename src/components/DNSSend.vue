<template>
    <div>
        <div>
            <div>
                <span>{{qname}}</span>
                <label for="qname">qname</label>
                <input id="qname" type="text" v-model="qname" placeholder="Enter domain name:" />
            </div>

            <div>
                <span>{{qtype}}</span>
                <label for="qtype">qtype</label>
                <input id="qtype" type="text" v-model="qtype" placeholder="Enter query type:" />
            </div>

            <div>
                <span>{{qclass}}</span>
                <label for="qclass">qclass</label>
                <input id="qclass" type="text" v-model="qclass" placeholder="Enter query class:" />
            </div>

            <div>
                <span>{{qdcount}}</span>
                <label for="qdcount">qdcount</label>
                <input id="qdcount" type="text" v-model="qdcount" placeholder="Enter the number of questions:" />
            </div>

            <div>
                <span>{{ancount}}</span>
                <label for="ancount">ancount</label>
                <input id="ancount" type="text" v-model="ancount" placeholder="Enter the number of answers:" />
            </div>

            <div>
                <span>{{nscount}}</span>
                <label for="nscount">nscount</label>
                <input id="nscount" type="text" v-model="nscount" placeholder="Enter the number of nameservers:" />
            </div>

            <div>
                <span>{{arcount}}</span>
                <label for="arcount">arcount</label>
                <input id="arcount" type="text" v-model="arcount" placeholder="Enter the number of additional records:" />
            </div>

            <div>
                <span>{{id}}</span>
                <label for="identity">id</label>
                <input id="identity" type="text" v-model="id" placeholder="Enter identity number:" />
            </div>

            <div>
                <span>{{opcode}}</span>

                <label for="opcode">opcode</label>
                <select id="opcode" v-model="opcode">
                    <option value=0 selected>QUERY</option>
                    <option value=1>IQUERY</option>
                    <option value=2>STATUS</option>
                </select>
            </div>
        </div>

        <div>
            <span>{{rcode}}</span>

            <label for="rcode">rcode</label>
            <select id="rcode" v-model="rcode">
                <option value=0 selected>No error</option>
                <option value=1>Format error</option>
                <option value=2>Server failure</option>
                <option value=4>Not implemented</option>
                <option value=5>Refused</option>
            </select>
        </div>
            
        <div>
            <span>{{bits}}</span>

            <label for="qr">qr</label>
            <input id="qr" type="checkbox" value="qr" v-model="bits" />
            
            <label for="aa">aa</label>
            <input id="aa" type="checkbox" value="aa" v-model="bits" />
            
            <label for="tc">tc</label>
            <input id="tc" type="checkbox" value="tc" v-model="bits" />

            <label for="rd">rd</label>
            <input id="rd" type="checkbox" value="rd" v-model="bits" />

            <label for="ra">ra</label>
            <input id="ra" type="checkbox" value="ra" v-model="bits" />

            <label for="ad">ad</label>
            <input id="ad" type="checkbox" value="ad" v-model="bits" />

            <label for="cd">cd</label>
            <input id="cd" type="checkbox" value="cd" v-model="bits" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Send',
    data: function() {
        return {
            id: '',
            opcode: '',
            bits: [],
            rcode: '',
            qdcount: '',
            ancount: '',
            nscount: '',
            arcount: '',
            qname: '',
            qtype: '',
            qclass: '',
        }
    }
}
</script>

<style>

</style>