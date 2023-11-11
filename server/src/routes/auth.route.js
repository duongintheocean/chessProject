const {
  loginController,
  registerController,
} = require("../controller/auth.controller");
const authRouter = (app) => {
  app.get("/api/login", loginController);
  app.post("/api/register", registerController);
};
module.exports = {
  authRouter,
};
