
stream-array [![Build status](https://travis-ci.org/strong-roots-capital/stream-array.svg?branch=master)](https://travis-ci.org/strong-roots-capital/stream-array) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/stream-array.svg)](https://npmjs.org/package/@strong-roots-capital/stream-array) [![codecov](https://codecov.io/gh/strong-roots-capital/stream-array/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/stream-array)
===================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Pipe an array through a stream

Install
-------

```shell
npm install @strong-roots-capital/stream-array
```

Use
---

```typescript
import streamArray from '@strong-roots-capital/stream-array'
import { Writable } from 'readable-stream'

const array = [0, 1, 2, 3, 4, 5]

const sink = new Writable({
    objectMode: true,
    write(chunk: number, _: string, callback: (error?: Error \| null) => void) {
        console.log(chunk)
        callback()
    }
})

sink.on('finish', () => console.log('fin'))
streamArray(array).pipe(sink)
//=>0
//=>1
//=>2
//=>3
//=>4
//=>5
//=>fin
```

Note that `objectMode` is `true`.

Related
-------

*   [node-stream-array](https://github.com/mimetnet/node-stream-array)

## Index

### Functions

* [streamArray](#streamarray)

---

## Functions

<a id="streamarray"></a>

###  streamArray

▸ **streamArray**<`T`>(array: *`readonly`*, T: *`any`*, __namedParameters: *`[]`*, : *`any`*, : *`any`*, : *`any`*, undefined: *`any`*): `Readable`

*Defined in [stream-array.ts:17](https://github.com/strong-roots-capital/stream-array/blob/daceca5/src/stream-array.ts#L17)*

Pipe `array` through a readable stream.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| array | `readonly` |  Contents to pipe through readable stream |
| T | `any` |
| __namedParameters | `[]` |
| | `any` |
| | `any` |
| | `any` |
| undefined | `any` |

**Returns:** `Readable`
Readable stream piping contents of `array`

___

