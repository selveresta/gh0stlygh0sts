import React from "react";
import { NotAuth } from "../components/NotAuth";

const Airdrop = () => {
	const mystyle = {
		display: "flex",
		justifyContent: "space-between",
	};

	return (
		<div style={mystyle}>
			<div></div>
			<NotAuth></NotAuth>
			<div></div>
		</div>
	);
};

export default Airdrop;
