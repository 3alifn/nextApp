import express from "express";
import dotenv from "dotenv";
import cookeParser from "cookie-parser";
dotenv.config();
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
export const __filename= fileURLToPath(import.meta.url);
export const __dirname= path.dirname(__filename);

import useGlobalCorsMiddleware from "./cors.js";
export const app= express();

app.use(express.json()); // parse url data
app.use(express.urlencoded({extended: true})); // parse url form-data
app.use(express.static('../../../client/src/public')) // set static path for file serve
app.use(useGlobalCorsMiddleware);
app.use(useGlobalCorsMiddleware);
const PORT= process.env.PORT || 5000;

app.listen(PORT, ()=>{
console.log(`Server running on http://localhost:${PORT}`);

})