const express = require('express');
const {routes} = require('./routes.js');
const cors = require('cors');
const path = require('path');
const { init } = require('./websocket.js');
const http = require('http');

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.static(path.join(__dirname, "public")))
app.use(routes);

const server = http.createServer(app);
init(server);

server.listen(5001, "0.0.0.0", () => {
    console.log('App rodando na porta 5001');
});
