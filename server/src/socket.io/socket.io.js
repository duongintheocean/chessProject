const { Server } = require("socket.io");
const socket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });
  io.on("connection", (socket) => {
    
  });
};
module.exports = socket;
