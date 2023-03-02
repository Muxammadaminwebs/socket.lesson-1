import express from "express";
import {createServer} from "http";
import {Server} from "socket.io";
import path from "path";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.get(
    "/",
    (req, res) => res.sendFile(path.join(process.cwd(), "views", "index.html"))

);

io.on("connection", (socket) => {
    console.log("ulandi");
    socket.on("xabar ", (data) => {
        console.log(data);
        console.log("xabar keldi");
    });
    socket.on("desconnect", () => {
        console.log("uzildi");
    })
});

httpServer.listen(3000);
console.log("ishladi......");