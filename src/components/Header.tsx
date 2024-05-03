import React from "react";
import "./Header.css";
import logo from "../imgs/logo.jpeg";
import { Link } from "react-router-dom";
import ConnectButton from "./ConnectButton";

const Header = () => {
	return (
		<header className='nav'>
			<div className='leftPart'>
				<div>
					<Link to='/'>
						<img src={logo} alt='Logo' className='logo' />
					</Link>
				</div>
				<div>
					<Link to='/airdrop' className='airdrop'>
						Airdrop
					</Link>
				</div>
			</div>
			<div className='rightPart'>
				<ConnectButton></ConnectButton>
			</div>
		</header>
	);
};

export default Header;
