<template>
    <div>
        <div>
            <div>
                <label for="qname">qname</label>
                <input id="qname" type="text" v-model="packet.qname" placeholder="Enter domain name:" />
            </div>

            <div>
                <label for="qtype">qtype</label>
                <input id="qtype" type="text" v-model="packet.qtype" placeholder="Enter query type:" />
            </div>

            <div>
                <label for="qclass">qclass</label>
                <input id="qclass" type="text" v-model="packet.qclass" placeholder="Enter query class:" />
            </div>

            <div>
                <label for="qdcount">qdcount</label>
                <input id="qdcount" type="text" v-model="packet.qdcount" placeholder="Enter the number of questions:" />
            </div>

            <div>
                <label for="ancount">ancount</label>
                <input id="ancount" type="text" v-model="packet.ancount" placeholder="Enter the number of answers:" />
            </div>

            <div>
                <label for="nscount">nscount</label>
                <input id="nscount" type="text" v-model="packet.nscount" placeholder="Enter the number of nameservers:" />
            </div>

            <div>
                <label for="arcount">arcount</label>
                <input id="arcount" type="text" v-model="packet.arcount" placeholder="Enter the number of additional records:" />
            </div>

            <div>
                <label for="identity">id</label>
                <input id="identity" type="text" v-model="packet.id" placeholder="Enter identity number:" />
            </div>

            <div>
                <label for="opcode">opcode</label>
                <select id="opcode" v-model="packet.opcode">
                    <option value=0>QUERY</option>
                    <option value=1>IQUERY</option>
                    <option value=2>STATUS</option>
                </select>
            </div>
        </div>

        <div>
            <label for="rcode">rcode</label>
            <select id="rcode" v-model="packet.rcode">
                <option value=0>No error</option>
                <option value=1>Format error</option>
                <option value=2>Server failure</option>
                <option value=4>Not implemented</option>
                <option value=5>Refused</option>
            </select>
        </div>
            
        <div>
            <span>{{bits}}</span>

            <label for="qr">qr</label>
            <input id="qr" type="checkbox" v-model="packet.bits.qr" true-value=1 false-value=0 />
            
            <label for="aa">aa</label>
            <input id="aa" type="checkbox" v-model="packet.bits.aa" true-value=1 false-value=0 />
            
            <label for="tc">tc</label>
            <input id="tc" type="checkbox" v-model="packet.bits.tc" true-value=1 false-value=0 />

            <label for="rd">rd</label>
            <input id="rd" type="checkbox" v-model="packet.bits.rd" true-value=1 false-value=0 />

            <label for="ra">ra</label>
            <input id="ra" type="checkbox" v-model="packet.bits.ra" true-value=1 false-value=0 />

            <label for="ad">ad</label>
            <input id="ad" type="checkbox" v-model="packet.bits.ad" true-value=1 false-value=0 />

            <label for="cd">cd</label>
            <input id="cd" type="checkbox" v-model="packet.bits.cd" true-value=1 false-value=0 />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Send',
    data: function() {
        return {
            packet: {
                id: '',
                opcode: 0,
                bits: {
                    qr: 0,
                    aa: 0,
                    tc: 0,
                    rd: 0,
                    ra: 0,
                    ad: 0,
                    cd: 0,
                },
                rcode: 0,
                qdcount: '',
                ancount: '',
                nscount: '',
                arcount: '',
                qname: '',
                qtype: '',
                qclass: '',
            },
        };
    }
}
</script>

<style>

</style>