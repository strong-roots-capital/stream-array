import streamArray from '../src/stream-array'
import { Writable } from 'readable-stream'

const array = [0, 1, 2, 3, 4, 5]

const sink = new Writable({
    objectMode: true,
    write(chunk: number, _: string, callback: (error?: Error | null) => void) {
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
