let a = 123
let b = 456
let c = 789
    // export 默认导出的对象
exports.a = a
    // 系统默认设置了 exports = module.exports 
module.exports.c = c
exports = { user: '吴浩' }

module.exports = { password: '241617' }

// 注意，使用 exports 时只能单个设置属性，module.exports 可以，单个设置属性或者设置为整个对象