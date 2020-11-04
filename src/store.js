
pack_query_1 = {
    "id": 0x7385,
    
    "response": false,
    "opcode": 0x0000,
    "truncated": false,
    "recursion-disired": true,
    "z": false,
    "authentic-data": false,
    "checking-disabled": false,

    "query-count": 1,
    "answer-count": 0,
    "authority-count": 0,
    "additional-information-count": 0,

    "querys": [{
        "name": "collector.githubapp.com",
        "type": "A",
        "class": "IN"
    }]
}

pack_response_1 = {
    "id": 0x696f,

    "response": true,
    "opcode": 0x0000,
    "authoritative": false,
    "truncated": false,
    "recursion-desired": true,
    "recursion-available": true,
    "z": false,
    "authentic-data": false,
    "checking-disabled": false,
    "error-code": 0x0000,

    "query-count": 1,
    "answer-count": 2,
    "authority-count": 0,
    "additional-infomation-count": 0,

    "querys": [{
        "name": "s.f.360.cn",
        "type": "A",
        "class": "IN"
    }],
    "answers": [
        {
            "name": "s.f.360.cn",
            "type": "CNAME",
            "time-to-live": 142,
            "data-length": 15,
            "CNAME": "s.f.qh-lb.com"
        },
        {
            "name": "s.f.qh-lb.com",
            "type": "A",
            "class": "IN",
            "time-to-live": 142,
            "data-length": 4,
            "address": "221.181.72.250"
        }
    ]
}

