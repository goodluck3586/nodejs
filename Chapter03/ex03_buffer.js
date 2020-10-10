const buffer = Buffer.from('버퍼 시퀀스에 담긴 데이터')
console.log('buffer: ', buffer)
console.log('length: ', buffer.length)
console.log('toString(): ', buffer.toString())

const array = [Buffer.from('버퍼 '), Buffer.from('시퀀스 '), Buffer.from('데이터')]
const buffer2 = Buffer.concat(array)
console.log('concat(): ', buffer2.toString())