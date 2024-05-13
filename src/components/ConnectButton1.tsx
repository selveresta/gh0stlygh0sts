import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function ConnectButton1() {
	const [count, setCount] = useState<number>(0);

	const btn = useRef<HTMLButtonElement>(null);

	// useEffect(() => {
	// 	axios.get("http://localhost:5000/count").then((response) => {
	// 		console.log(response.data);
	// 		setCount(Number(response.data));
	// 	});
	// }, []);
	useEffect(() => {
		axios.get("http://89.116.22.98:5000/count").then((response) => {
			// console.log(response.data);
			setCount(Number(response.data));
		});
	}, []);

	const sendRequest = () => {
		const body = {
			count: count + 1,
		};
		axios
			.post("http://89.116.22.98:5000/count", body)
			.then(function (response) {
				// console.log(response.data);
				setCount(response.data);
				// console.log(count);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div onClick={sendRequest}>
			<button ref={btn} className='connectionButton connectButton'>
				Connect Wallet
			</button>
		</div>
	);
}
