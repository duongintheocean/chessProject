const http = require("http");
const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const socket = require("./src/socket.io/socket.io");
const server = http.createServer(app);
const { authRouter } = require("./src/routes/auth.route");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
socket(server);
// router 
authRouter(app);
server.listen(3001, () => {
  console.log("http://localhost:3001");
});
