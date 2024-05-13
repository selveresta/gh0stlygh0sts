import express, { json } from "express";
import * as fs from "fs";
import cors from "cors";
const app = express();
const port = 5000;

app.use(json());
app.use(
	cors({
		origin: ["http://gh0stlygh0sts.fun/", "http://gh0stlygh0sts.fun/airdrop", "http://89.116.22.98"],
	})
);

app.use(function (req, res, next) {
	//Enabling CORS
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
	);
	next();
});

app.get("/", (req, res) => {
	const currectCount = fs.readFileSync("./count.txt");
	console.log(Number(currectCount));
	res.end(String(currectCount));
});

app.post("/", (req, res) => {
	console.log(req.body);
	const currectCount = req.body.count;
	fs.writeFileSync("./count.txt", String(currectCount));
	res.end(String(currectCount));
});

app.get("/count", (req, res) => {
	const currectCount = fs.readFileSync("./count1.txt");
	console.log(Number(currectCount));
	res.end(String(currectCount));
});

app.post("/count", (req, res) => {
	console.log(req.body);
	const currectCount = req.body.count;
	fs.writeFileSync("./count1.txt", String(currectCount));
	res.end(String(currectCount));
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
