const fs = require('fs')
    // buffer 简介
    // 1, 数组不能进行二进制数据的操作
    // 2, JS 数组不像 java, python 等语言效率高
    // 3，为了提高数组性能，出现 buffer，会在内存空间开辟出固定大小的内存（连续）
    // 将字符串转成 buffer
const str = 'hello,world'
const buf = Buffer.from(str)
console.log(buf)
    // 输出 buffer 内容
console.log(buf.toString())
    // 开辟一个空的 buffer (缓存区)
let buf1 = Buffer.alloc(10) // 开辟10个字节,清空原本内容
buf1[0] = 10
buf1[1] = 255
buf1[2] = 256
console.log(buf1)

let buf2 = Buffer.allocUnsafe(10) // 开辟10个字节,不会清空原本内容
console.log(buf2)