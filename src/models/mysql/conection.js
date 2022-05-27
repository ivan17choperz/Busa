
// connection
const mysql = require('mysql');
const { promisify } = require('util');
const options = {
    host:'us-cdbr-east-05.cleardb.net',
    user:'b00ffec9743004',
    password:'d1f35982',
    database:'heroku_b7a402090c0e2a6',
    waitForConnections:true,
    connectionLimit:20,
}
const pool = mysql.createPool(options)

pool.getConnection((err,conn)=>{
    if(err){
        if(err.code ==="PORTOCOL_CONNECTION_LOST"){
            console.error('database connecion was closed')
        } 
        if(err.code ==="ER_CON_COUNT_ERROR"){
            console.error('Database has many connections')
        } 
        if(err.code ==="ECONNREFUSHED"){
            console.error('Database Connecion was refushed')
        } 
        
    }

    if (conn)conn.release();
    console.log('there is connection');
    return
});

// sentenncias sql en pormesas
pool.query = promisify(pool.query)


module.exports = pool