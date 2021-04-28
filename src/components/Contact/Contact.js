import React from 'react';
import Card from '../UI/Card';

import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';

const Contact = () => {
	return (
		<Card>
			<div>
				<header>
					<PhoneIcon />
				</header>
				<section>
					<div>
						<h4>Clínica Pueyrredón</h4>
						<h5>(0223) 499-2400</h5>
					</div>
					<div>
						<h4>Clínica 25 de Mayo</h4>
						<h5>(0223) 499-4000</h5>
					</div>
				</section>
			</div>
			<div>
				<header>
					<LocationOnIcon />
				</header>
				<section>
					<div>
						<h4>Clínica Pueyrredón</h4>
						<h5>Jujuy 2176, Mar del Plata, Buenos Aires</h5>
					</div>
					<div>
						<h4>Clínica 25 de Mayo</h4>
						<h5>25 De Mayo 3542/58, Mar del Plata, Buenos Aires</h5>
					</div>
				</section>
			</div>
			<div>
				<header>
					<EmailIcon />
				</header>
				<section>
					<div>
						<h4>Clínica Pueyrredón</h4>
						<h5>mnpuey@clinicapueyrredon.com</h5>
					</div>
					<div>
						<h4>Clínica 25 de Mayo</h4>
						<h5>mn25@clinica25demayo.com</h5>
					</div>
				</section>
			</div>
		</Card>
	);
};

export default Contact;
