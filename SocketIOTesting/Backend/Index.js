// const express = require('express');
// const http = require('http');
// const { Server } = require('socket.io');
// const cors = require('cors');

// const app = express();
// app.use(cors());

// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: '*', // or "http://10.0.2.2:3000" for stricter config
//     methods: ['GET', 'POST']
//   }
// });

// io.on('connection', (socket) => {
//   console.log('A user connected');

//   socket.on('send_message', (data) => {
//     io.emit('received_message', data); // broadcast to all clients
//   });

//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
// });

// server.listen(3000, () => {
//   console.log('Server running on port 3000');
// });










// const express = require('express');
// const http = require('http');
// const { Server } = require('socket.io');
// const cors = require('cors');
// const fs = require('fs');

// const app = express();
// app.use(cors());

// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: '*',
//     methods: ['GET', 'POST']
//   }
// });

// const readMessages = () => {
//   try {
//     const data = fs.readFileSync('message.json', 'utf8');
//     return JSON.parse(data).messages;
//   } catch (err) {
//     console.error('Error reading messages:', err);
//     return [];
//   }
// };

// // Emit messages on connect
// io.on('connection', (socket) => {
//   console.log('User connected');

//   const messages = readMessages();
//   socket.emit('received_message', { messages });

//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
// });

// // Watch for changes in message.json
// fs.watchFile('message.json', (curr, prev) => {
//   const messages = readMessages();
//   io.emit('received_message', { messages }); // Send to all clients
// });

// server.listen(3000, () => {
//   console.log('Server running on port 3000');
// });












const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Read notifications from file
const readNotifications = () => {
  try {
    const data = fs.readFileSync('notifications.json', 'utf8');
    return JSON.parse(data).notifications;
  } catch (err) {
    console.error('Error reading notifications:', err);
    return [];
  }
};

// Emit on client connect
io.on('connection', (socket) => {
  console.log('User connected');

  const notifications = readNotifications();
  socket.emit('received_notifications', { notifications });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Watch for changes
fs.watchFile('notifications.json', (curr, prev) => {
  const notifications = readNotifications();
  io.emit('received_notifications', { notifications });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});