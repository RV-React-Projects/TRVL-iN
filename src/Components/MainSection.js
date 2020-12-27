import './MainSection.css';
import '../App.css';
import React from 'react';
import { CustButton } from './Cust-Button';

function MainSection() {
	return (
		<div className="hero-container">
			<video src="/videos/video-2.mp4" autoPlay loop muted />
			<h1>
				<span className="span1">INDIA's</span>ADVENTURES<span className="span2">TOUR</span>
			</h1>
			<p>Let's Have a Tour of INDIA</p>
			<div className="hero-btns">
				<CustButton className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
					GET STARTED
				</CustButton>
				<CustButton className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
					WATCH TRAILER <i className="far fa-play-circle" />
				</CustButton>
			</div>
		</div>
	);
}

export default MainSection;
