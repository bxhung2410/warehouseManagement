require('dotenv').config();
import express from "express"
import bodyParser from "body-parser"
import viewEngine from "./config/viewEngine"
import initWebRoutes from "./route/web"
import connectDB from "./config/connectDB"
import cors from 'cors';
import { client } from './config/configMqtt';
import { subscribeFeed } from "./services/subMqtt";


const app = express();
const port = process.env.PORT || 6969;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

subscribeFeed(client);
connectDB();

app.listen(port, () => {
	console.log("Backend Nodejs is running on the port: " + port)
});