// 创建一个服务器，作为socket服务端
// 启动服务器的时候用node src/socket/socket.js，启动并监听3000端口
const express = require('express');
const app = express();
//
const {createServer} = require('http');
const {Server} = require('socket.io');
const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: '*',
        method: ['GET', 'POST'],
    }
});
//连接建立中
io.on('connection',(socket) => {
    //on是监听，监听连接
    console.log('一个用户与服务器建立连接', socket.handshake.query.id)
    socket.emit('message','socket服务端向客户端推送消息...');
    //监听接收客户端发送来的消息
    socket.on('hello',(data) => {//监听hello接口
        console.log(`收到客户端的消息了：${data}`,data);
        socket.emit('rehello',data) //向客户端发送rehello接口
    })
});


app.get('/',(request, response) => {
    io.emit('message','服务端向客户端推送消息...');
    response.writeHead(200, {"Content-type": "text/plain"});
    response.end();
});


httpServer.listen(3000,() => {
    console.log("启动端口3000");
});