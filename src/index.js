import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<App />
	</Router>
);

let s = [
	"AFGHANISTAN",
	"TURKMENISTAN",
	"KYRGYZSTAN",
	"KAZAKHSTAN",
	"TAJIKISTAN",
	"AASDASD",
];

let borders = ["AFG", "KAZ", "KGZ", "TJK", "TKM"];
const reg = /[A-Z]/g


console.log(
	borders.map((ite, i) => {
		return s[i].match(reg).join()
	})
);
