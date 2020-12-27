import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function CardItems({ path, src, text, lebel }) {
	return (
		<li className="cards__item">
			<Link className="cards__item__link" to={path}>
				<figure className="cards__item__pic-wrap" data-category={lebel}>
					<img src={src} alt="Travel Images" className="cards__item__img" />
				</figure>
				<div className="cards__item__info">
					<h5 className="cards__item__text">{text}</h5>
				</div>
			</Link>
		</li>
	);
}

export default CardItems;
