import { login,loginForm,logout,registerForm,register } from "../controllers/authAdminController.js";
import express from "express"

const authAdminRouter = express.Router()

authAdminRouter.get("/",loginForm)
authAdminRouter.post("/",login)

authAdminRouter.get("/register",registerForm)
authAdminRouter.post("/register",register)

authAdminRouter.get("/logout",logout)



export default authAdminRouter