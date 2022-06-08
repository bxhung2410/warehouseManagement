require('dotenv').config();
import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
import cors from 'cors';
import { Server } from 'socket.io';
import { createServer } from 'http';
import { client as mqtt, FEED_LED } from './config/configMqtt';
import { subscribeFeed } from "./services/subMqtt";
import { processRequest } from "./services/listenEventSocket.io";

const app = express();
const port = process.env.PORT || 6969;
const server = createServer(app);
const io = new Server(server, {cors: { origin: "*" }});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

// mqtt
subscribeFeed(mqtt);

// socket.io
processRequest(io, mqtt);
// mqtt.on('message', () => {
// 	mqtt.subscribe(FEED_LED, data => console.log('data: ', data))
// })

server.listen(port, () => {
	console.log("Backend Nodejs is running on the port: " + port)
});

