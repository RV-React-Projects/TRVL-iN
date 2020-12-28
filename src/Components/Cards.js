import React from 'react';
import './Card.css';
import CardItems from './CardItems';

function Cards() {
	return (
		<div className="cards">
			<h1>Check Out Some Beautiful Places Of INDIA</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItems
							src={'/Images/taj-mahal02.jpg'}
							text="Taj Mahal Wonder of India "
							lebel="Wonder's of India"
							path="/services"
						/>
						<CardItems
							src={'/Images/Hawa-Mahal.jpg'}
							text="Hawa Mahal Tallest Palace"
							lebel="India Heritage"
							path="/services"
						/>
					</ul>
					<ul className="cards__items">
						<CardItems
							src={'/Images/amber-fort.jpg'}
							text="explore The Beauty of Amber Fort Jaipur"
							lebel="Tourist Place"
							path="/products"
						/>
						<CardItems
							src={'/Images/junagarh-fort.jpg'}
							text="Junagarh Fort Oldest Fort Heritage"
							lebel="India Heritage"
							path="/products"
						/>
						<CardItems
							src={'/Images/udaipur-city.jpg'}
							text="Udaipur City One of the Beautiful City"
							lebel="Beauty of City"
							path="/products"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
