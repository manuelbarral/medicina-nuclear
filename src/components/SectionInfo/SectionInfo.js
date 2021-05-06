import React from 'react';
import classes from './SectionInfo.module.css';
import Card from '../UI/Card';

const text = [
	{
		title: 'SOBRE NOSOTROS',
		about:
			'Somos el servicio de Medicina Nuclear de la Clínica Pueyrredón y Clínica 25 de Mayo de la ciudad de Mar del Plata.',
	},
	{
		title: 'SEDES',
		sedePuey: {
			title: 'Sede Clínica Pueyrredón:',
			address: 'Jujuy 2176',
		},
		sede25: {
			title: 'Sede Clínica 25 de Mayo:',
			address: '25 de Mayo 3542/58',
		},
	},
];

const SectionInfo = () => {
	return (
		<Card className={classes.card}>
			<div>
				<header>
					<h5>{text[0].title}</h5>
				</header>
				<section>
					<p>{text[0].about}</p>
				</section>
			</div>
			<div>
				<header>
					<h5>{text[1].title}</h5>
				</header>
				<section>
					<ul>
						<li>
							<strong>{text[1].sedePuey.title}</strong> <br />
							{text[1].sedePuey.address}
						</li>
						<li>
							<strong>{text[1].sede25.title}</strong>
							<br />
							{text[1].sede25.address}
						</li>
					</ul>
				</section>
			</div>
		</Card>
	);
};

export default SectionInfo;
