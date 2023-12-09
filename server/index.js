const express=require("express");
const {Server} =require("socket.io")
const PORT=4000;
const app=express();

const cors=require("cors");

const http=require("http").Server(app);

const socketIO=new Server(http,{
    cors:{
        origin:"http://localhost:3000"
    }
})

app.use(cors());

const users=[];

socketIO.on('connection',(socket)=>{
    console.log(`⚡: ${socket.id} user just connected`);

    socket.on('message',(data)=>{
        socket.emit('messageResponse',data);
    })

    socket.on('newUser',(data)=>{
        users.push(data)
        socket.emit('newUserResponse',users)     
    })

    socket.on('disconnect',()=>{
        console.log('🔥: A user is Disconnected')
    })
})

app.get("/api",(req,res)=>{
    res.json({
        message:'Hello World',
    })
})


//** Server Listening or Running on */ 

http.listen(PORT,()=>{
    console.log(`Server Listening on =>`,PORT)
})