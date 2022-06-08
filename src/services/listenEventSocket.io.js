
export function processRequest(io, mqtt) {
  io.on('connection', (socket) => {
    socket.emit('connection', socket.id, []);
    socket.on('sendRequestControl', payload => {
      const { topic, value } = payload;
      // publish to mqtt
      mqtt.publish(topic, value, (error) => {
        if(error) console.error(error);
      })
      mqtt.on('message', (topic, payload) => {
        console.log(`${topic}: ${payload.toString()}`)
        io.emit('sendResponseControl', payload.toString());
        // disconnect
        socket.on("disconnect", () => {
          console.log("Client disconnected");
        });
      })
      // response to front end
    });

  });
}

export function sendRealTimeData(io) {
  io.on('connection', (socket) => {
    socket.emit('connection', socket.id);

  })
}