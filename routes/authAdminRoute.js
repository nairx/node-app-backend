import { login,loginForm,logout } from "../controllers/authAdminController.js";
import express from "express"

const authAdminRouter = express.Router()

authAdminRouter.get("/",loginForm)
authAdminRouter.post("/",login)
authAdminRouter.get("/logout",logout)

export default authAdminRouter