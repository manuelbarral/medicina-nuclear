import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import img from '../../img/medicina.png';

import classes from './CarouselImage.module.css';

const images = [
	{
		image: img,
		title: 'Medicina',
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
					<h2>First slide label</h2>
					<p>
						Nulla vitae elit libero, a pharetra augue mollis interdum.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className={classes.img}
					src={images[0].image}
					alt={images[0].title}
				/>
				<Carousel.Caption className={classes.caption}>
					<h2>Second slide label</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className={classes.img}
					src={images[0].image}
					alt={images[0].title}
				/>
				<Carousel.Caption className={classes.caption}>
					<h2>Third slide label</h2>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl
						consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselImage;
