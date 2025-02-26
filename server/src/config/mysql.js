import mysql from "mysql";
const pool= mysql.createPool({
    host: process.env.HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    connectionLimit: 100,
    queueLimit: 10,
    
})

export default pool;