const authAdmin = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.render("auth/login");
  }
};

export {authAdmin}