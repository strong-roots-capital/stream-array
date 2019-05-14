import test from 'ava'
import { Writable } from 'readable-stream'

/**
 * Library under test
 */

import streamArray from '../src/stream-array'

test.cb('should stream through elements in array', t => {

    const array = [0, 1, 2, 3, 4, 5]
    let index = 0

    const sink = new Writable({
        objectMode: true,
        write(chunk: number, _: string, callback: (error?: Error | null) => void) {
            t.is(array[index++], chunk)
            callback()
        }
    })

    streamArray(array).pipe(sink)
    sink.on('finish', () => t.end())
})

test.cb('should stream null when given empty array', t => {
    const array: number[] = []

    const sink = new Writable({
        objectMode: true,
        write(chunk: number, _: string, callback: (error?: Error | null) => void) {
            t.fail()
            callback()
        }
    })

    streamArray(array).pipe(sink)
    sink.on('finish', () => t.end())
})

test.cb('should stream null when given null', t => {
    const sink = new Writable({
        objectMode: true,
        write(chunk: number, _: string, callback: (error?: Error | null) => void) {
            t.fail()
            callback()
        }
    })

    streamArray(null).pipe(sink)
    sink.on('finish', () => t.end())
})

test.cb('should stream null when given undefined', t => {
    const sink = new Writable({
        objectMode: true,
        write(chunk: number, _: string, callback: (error?: Error | null) => void) {
            t.fail()
            callback()
        }
    })

    streamArray(undefined).pipe(sink)
    sink.on('finish', () => t.end())
})
