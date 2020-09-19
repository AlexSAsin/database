require ('dotenv').config()
const {Client} =require('pg')
const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

const name = '1 or 1 = 1'

client.connect()
client
.query('SELECT NOW()')
.then(result => console.log(result))
.catch(e => console.error(e.stack))
.then(() => client.end())
// client.connect()
// client.query(`
//     SELECT *
//     FROM student
//     WHERE name = $1
//     `,[name],function(err,res){
//     console.log(err,res)
//     client.end()
// })
console.log(1)
