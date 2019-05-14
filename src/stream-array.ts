/**
 * stream-array
 * Pipe an array through a stream
 */

import ow from 'ow'
import { Readable } from 'readable-stream'


/**
 * Pipe `array` through a readable stream.
 *
 * @param array Contents to pipe through readable stream
 * @returns Readable stream piping contents of `array`
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function streamArray<T = any>(array: readonly T[] | null | undefined): Readable {

    if (array !== undefined && array !== null) {
        ow(array as T[], ow.array)
    }

    let index = 0
    const safeArray = !Array.isArray(array) || array === null || array === undefined ? [] : array

    return new Readable({
        objectMode: true,
        read() {
            this.push(index < safeArray.length ? safeArray[index++] : null)
        }
    })
}
