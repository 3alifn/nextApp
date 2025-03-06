import session from "express-session";
import MYSQLStore from "express-mysql-session";
import pool from "./mysql.js";
const sessionStore= new MYSQLStore({}, pool)

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