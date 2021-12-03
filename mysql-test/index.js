const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '20121130',
    port: '3306',
    database: 'myblog'
})

con.connect()

const sql1 = 'select * from users;'
const sql2 = `update users set realname='李四' where username='lisi';`
con.query(sql2, (err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(result);
})

con.end();