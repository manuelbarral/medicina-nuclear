import {React, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

import classes from './Wellcome.module.css';

import img_1 from '../../img/medicina_1.png';
import img_2 from '../../img/medicina_2.png';
import img_3 from '../../img/medicina_3.png';

const images = [
	{
		title: 'CLÍNICA PUEYRREDÓN',
		image: img_1,
	},
	{
		title: 'CLÍNICA 25 DE MAYO',
		image: img_2,
	},
	{
		title: 'NUESTROS PROFESIONALES',
		image: img_3,
	},
];

const CarouselImage = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel
			activeIndex={index}
			onSelect={handleSelect}
			className={classes.carousel}>
			<Carousel.Item>
				<img
					className='d-block w-100'
					src={images[0].image}
					alt={images[0].title}
				/>
				<Carousel.Caption className={classes.caption}>
					<h2 className={classes.title}>{images[0].title}</h2>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className='d-block w-100'
					src={images[1].image}
					alt={images[1].title}
				/>

				<Carousel.Caption className={classes.caption}>
					<h2 className={classes.title}>{images[1].title}</h2>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className='d-block w-100'
					src={images[2].image}
					alt={images[2].title}
				/>

				<Carousel.Caption className={classes.caption}>
					<h2 className={classes.title}>{images[2].title}</h2>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselImage;
