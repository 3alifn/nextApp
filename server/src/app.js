import {app}  from "./config/server.js";
import { defaultRouter } from "./routes/defaultRouter.js";

app.use("/api/", defaultRouter);

app.use("/api/*", (req, res)=>{
    res.status(404).json({error: "not found page"})
})