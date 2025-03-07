import session from "express-session";
import MySQLStore from "express-mysql-session";
import pool from "./mysql.js";
const sessionToServer= MySQLStore(session);
const sessionStore= new sessionToServer({}, pool)

const useGlobalSession= session({
    key: process.env.PUBLIC_KEY,
    secret: process.env.SECRET_KEY,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 15 * 24 * 60 * 60 * 1000 // 15 days
    }
})

export default useGlobalSession;