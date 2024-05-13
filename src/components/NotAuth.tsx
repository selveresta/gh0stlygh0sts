import React from "react";
import "./NotAuth.css";
import ConnectButton1 from "./ConnectButton1";

export const NotAuth = () => {
	return (
		<div className='box'>
			<h1 className='maintext'>You are not authenticated</h1>
			<p className='undertext'>Please connect with your wallet to check your airdrop.</p>
			<div className='btnConnect'>
				<ConnectButton1></ConnectButton1>
			</div>
		</div>
	);
};
