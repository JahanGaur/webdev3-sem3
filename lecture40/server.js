const WebSocket = require('ws');

const wsServer = new WebSocket.Server({ port: 3000 });

webServer.on('connection', (socket) => {
    console.log('Client Connected.')

    socekt.on('message', (message) => {
        console.log(`Reveived Message: ${message}`)
        socket.send(`message ${message}`)
    })

    socket.on('close', () => {
        console.log('Client Disconnected.')
    })

    socket.on('error', (error) => {
        console.log(`WebSocket Error: ${error}`)
    })

})

