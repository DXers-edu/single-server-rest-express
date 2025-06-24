require('dotenv').config();
const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`🚀 Server is running at port : ${PORT}`);
});

server.on('error', (err) => {
    console.error('❌ Server error:', err);
});