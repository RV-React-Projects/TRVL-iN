import './Navbar.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CustButton } from './Cust-Button';

function Navbar() {
	const [ click, setClick ] = useState(false);
	const [ button, setButton ] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileView = () => setClick(false);

	const ShowButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		ShowButton();
	}, []);

	window.addEventListener('resize', ShowButton);
	return (
		<div>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo" onClick={closeMobileView}>
						TRVL . <i class="fab fa-invision" />
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={closeMobileView}>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/services" className="nav-links" onClick={closeMobileView}>
								Services
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/product" className="nav-links" onClick={closeMobileView}>
								Products
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileView}>
								Sign-Up
							</Link>
						</li>
					</ul>
					{button && <CustButton buttonStyle="btn--outline">SIGN-UP</CustButton>}
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
