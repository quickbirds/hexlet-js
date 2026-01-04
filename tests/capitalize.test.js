import { strict as assert } from 'node:assert'
import capitalize from '../src/capitalize.js'

// обычная строка
assert.equal(capitalize('hello'), 'Hello')

// пустая строка
assert.equal(capitalize(''), '')

console.log('Все тесты пройдены!')
