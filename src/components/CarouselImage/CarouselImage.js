import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import img_1 from '../../img/medicina_1.png';
import img_2 from '../../img/medicina_2.png';
import img_3 from '../../img/medicina_3.png';

import classes from './CarouselImage.module.css';

const images = [
	{
		image: img_1,
		title: 'Medicina foto uno',
	},
	{
		image: img_2,
		title: 'Medicina foto dos',
	},
	{
		image: img_3,
		title: 'Medicina foto tres',
	},
];

const CarouselImage = () => {
	return (
		<Carousel fade className={classes.carousel}>
			<Carousel.Item>
				<img
					className={classes.img}
					src={images[0].image}
					alt={images[0].title}
				/>
				<Carousel.Caption className={classes.caption}>
					<h2>Clínica Pueyrredón</h2>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className={classes.img}
					src={images[1].image}
					alt={images[1].title}
				/>
				<Carousel.Caption className={classes.caption}>
					<h2>Clínica 25 de Mayo</h2>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className={classes.img}
					src={images[2].image}
					alt={images[2].title}
				/>
				<Carousel.Caption className={classes.caption}>
					<h2>Nuestros profesionales</h2>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselImage;
