import React, { useState } from "react";
import Arbitrum from "../imgs/arbitrum.png";
import Eth from "../imgs/ethereum.png";
import OP from "../imgs/optimism.png";
import Base from "../imgs/base.png";

const Home = () => {
	const chainOptions = [
		{ img: Arbitrum, chain: "Arbitrum One" },
		{ img: Eth, chain: "Ethereum" },
		{ img: OP, chain: "Optimist" },
		{ img: Base, chain: "Base" },
	];

	const [userBalance, setUserBalace] = useState(0);
	const [currentAmount, setCurrentAmount] = useState(0);

	const [firstIMGSelect, setFirstIMGSelect] = useState(Arbitrum);
	const [secondIMGSelect, setSecondINGSelect] = useState(Eth);

	const change1Select = (event: any) => {
		const currentChain = chainOptions.find((c) => c.chain === event.target.value);
		console.log(currentChain);
		// eslint-disable-next-line react-hooks/rules-of-hooks
		setFirstIMGSelect(currentChain?.img);
	};

	const change2Select = (event: any) => {
		const currentChain = chainOptions.find((c) => c.chain === event.target.value);
		console.log(currentChain);
		// eslint-disable-next-line react-hooks/rules-of-hooks
		setSecondINGSelect(currentChain?.img);
	};

	return (
		<div className='homeBox'>
			<p className='textBoo'>$BOO Bridge</p>
			<br></br>
			<br></br>
			<div className='Bridge'>
				<div>
					<div className='firstLine'>
						<p style={{ fontWeight: "bold" }}>Bridge</p>
						<div>Balance: 0.00</div>
					</div>
				</div>
				<div className='inputField'>
					<label>Amount</label>
					<input
						value={currentAmount}
						onChange={(e) => setCurrentAmount(Number(e.target.value))}
						placeholder='0'
						className='amountInput'
						type='number'
					></input>
				</div>

				<div className='selectPart'>
					<div className='outerSelect'>
						<img className='chainImage' src={firstIMGSelect} alt='img'></img>

						<select onChange={change1Select} className='selectChain' style={{ marginRight: 30 }}>
							{chainOptions.map((c, i) => (
								<option key={i}>{c.chain}</option>
							))}
						</select>
					</div>

					<p> ----- </p>
					<div className='outerSelect'>
						<img className='chainImage' style={{ marginLeft: 30 }} src={secondIMGSelect} alt='img'></img>

						<select onChange={change2Select} defaultValue='Ethereum' className='selectChain' style={{ marginLeft: 30 }}>
							{chainOptions.map((c, i) => (
								<option key={i}>{c.chain}</option>
							))}
						</select>
					</div>
				</div>
				<br></br>
				<p style={{ color: "#888888" }}>Bridge fee: 0.0000 ETH</p>
				<br />
				{userBalance < currentAmount ? <p className='errorBalance'>You cannot bridge more tokens than you have</p> : <p></p>}
				<p className='errorBalance'>Connect Wallet</p>
				<button disabled className='bridgeBtn'>
					Bridge
				</button>
			</div>
		</div>
	);
};

export default Home;
