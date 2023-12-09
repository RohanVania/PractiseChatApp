
const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io")

const app = express();
const server = createServer(app);

const io = new Server(server, {
    connectionStateRecovery: {}
})

app.use(express.static("."))

app.get("/", (req, res) => {
    res.sendFile("index.html");
})


io.on('connection', (socket) => {
    console.log('A user is Connected =>');
    

    socket.on('chat message', (msg) => {
        console.log("Message from User ", msg);
        io.emit('chat message', msg);
    })

    socket.on('disconnect', (arg) => {
        console.log("User Disconnected =>", arg)
    })

})


server.listen(3005, () => {
    console.log("Server Running at 3005")
})
