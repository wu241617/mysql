// 连表查询
// 1，表A inner join 表B on条件；表A与表B匹配的行会出现在结果中
// 2，表A left join 表B on条件；表A与表B匹配的行会出现在结果中，外加表A中独有的数据，未队应的数据使用null填充
// 3, 表A right join 表B on条件；表A与表B匹配的行会出现在结果中，外加表B中独有的数据，未队应的数据使用null填充
// 在查询或条件中推荐使用 '表名.列名' 的语法
// 如果多个表中列名不重复，可以省略 '表名.'
// 如果表的名称太长，可以在表名后面使用 'as 简写名' 或 '简写名'，为表起个临时的简写名称

// 连接表
let sqlStr = 'select * from author inner join authorbook on author.id=authorbook.id' 
// 条件查询
let sqlStr1 = 'select * from author inner join authorbook on author.id=authorbook.id where author.name = "neizi"' 
