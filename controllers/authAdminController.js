import userModel from "../models/userModel.js";

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email, password,role:"admin" });
  if (user) {
    req.session.user = user;
    res.redirect("/admin/products");
  } else {
    res.redirect("/");
  }
};

const loginForm = async (req, res) => {
  res.render("auth/login");
};

const registerForm = async (req, res) => {
  res.render("auth/register");
};

const register = async (req, res) => {
  const user = await userModel.create(req.body);
  res.redirect("/");
};
const logout = async (req, res) => {
  req.session.destroy();
  res.locals.user = null;
  res.redirect("/");
};
export { login, loginForm, logout, registerForm, register };
