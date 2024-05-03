import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Airdrop from "./pages/Airdrop";

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header></Header>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/airdrop' element={<Airdrop />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
