import capitalize from '../src/capitalize.js'

if (capitalize('hello') !== 'Hello') {
  throw new Error('capitalize работает неверно с обычной строкой')
}

if (capitalize('') !== '') {
  throw new Error('capitalize работает неверно с пустой строкой')
}

console.log('Все тесты пройдены!')
