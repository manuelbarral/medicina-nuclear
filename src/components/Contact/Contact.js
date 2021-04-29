import React from 'react';
import Card from '../UI/Card';
import CardData from './CardData';

const data = [
	{
		name: 'Clínica Pueyrredón',
		phone: '(0223) 499-2400 - INTERNO 373',
		address: 'Jujuy 2176, Mar del Plata, Buenos Aires, Argentina',
		email: 'mnpuey@clinicapueyrredon.com',
	},
	{
		name: 'Clínica 25 de Mayo',
		phone: '(0223) 499-4000 - INTERNO 373',
		address:
			'25 de Mayo 3542/58, Mar del Plata, Buenos Aires, Argentina',
		email: 'mn25y@clinica25demayo.com.ar',
	},
];

const Contact = () => {
	return (
		<Card>
			<CardData
				name={data[0].name}
				phone={data[0].phone}
				address={data[0].address}
				email={data[0].email}
			/>
			<CardData
				name={data[1].name}
				phone={data[1].phone}
				address={data[1].address}
				email={data[1].email}
			/>
		</Card>
	);
};

export default Contact;
