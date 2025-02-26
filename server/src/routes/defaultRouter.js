import express from "express";
import { helloWorldController } from "../controllers/defaultController.js";
export const defaultRouter= express.Router();
defaultRouter.get('/helloworld', helloWorldController)