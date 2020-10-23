# @ddns/query
This module is used for querying a [dWebTrie](https://github.com/distributedweb/dwebtrie), within a [NameDrive](https://github.com/peepsx/ddns-namedrive), for dDNS records, per the [dDNS Specification](https://github.com/peepsx/ddns-whitepaper).

## Example Usage
```
const { Query } = require('@ddns/query');
const dbLocation = "/root/DDrive/nd1/peeps.dcom.db"
const q = new Query(dbLocation, test);

let recordKey = q.rdata(); // returns just the dWeb key associated with the "test" record
let fullRecord = q.record(); // returns key, ttl, class and type for "test" record
```

## API
#### `q = new Query(dbLocation, recordName);`
Create a new Query instance.

#### `q.record`
Returns the full record, as follows:
```
[
  {rdata: <dweb-key>},
  {ttl: <record-ttl>},
  {class: <record-class>},
  {type: <record-type>}
]
```

#### `q.rdata`
Returns the RDATA (dWeb Discovery Key) for the `recordName`.

#### `q.ttl`
Returns the TTL for the `recordName`.

#### `q.class`
Returns the Class for the `recordName`.

#### `q.type`
Returns the type for the `recordName`.


## LICENSE
[MIT](LICENSE.md)

## Copyright
Copyright 2020 Peeps Labs. All rights reserved.