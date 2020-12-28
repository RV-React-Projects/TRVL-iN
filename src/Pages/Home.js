import React from 'react';
import '../App.css';
import Cards from '../Components/Cards';
import Footer from '../Components/Footer';
import MainSection from '../Components/MainSection';

export default function Home() {
	return (
		<div>
			<MainSection />
			<Cards />
			<Footer />
		</div>
	);
}
