import expressSession from "express-session";
import mysqlSession from "express-mysql-session";
import pool from "./mysql.js";
const clientToServerSession= expressSession(mysqlSession);
const sessionStore= new clientToServerSession({}, pool)

const useGlobalSessionMiddleware= expressSession({
    key: process.env.PUBLIC_KEY,
    secret: process.env.SECRET_KEY,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 15 * 24 * 60 * 60 * 1000 // 15 days
    }
})

export default useGlobalSessionMiddleware;