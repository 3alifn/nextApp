import { helloWorldModel } from "../models/defaultModel.js"
export const helloWorldController = async (req, res)=>{
    console.log(req.url);
    const out= await helloWorldModel("Hello World")
    res.status(200).json(out);
}