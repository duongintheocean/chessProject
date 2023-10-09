const http= require("http");
const app= require("express")();
const bodyParser=require("body-parser")
const cors=require("cors");
const socket=require("./src/socket.io/socket.io")
const server=http.createServer(app);
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
socket(server)
app.get("/",(req,res)=>{
    res.json({message:"done set up"})
})
server.listen(3001,()=>{
    console.log("http://localhost:3000");
})
