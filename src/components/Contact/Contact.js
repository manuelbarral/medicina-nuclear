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
						<h5>Clínica Pueyrredón</h5>
						<p>(0223) 499-2400 - int 373</p>
					</div>
					<div>
						<h5>Clínica 25 de Mayo</h5>
						<p>(0223) 499-4000 - int 373</p>
					</div>
				</section>
			</div>
			<div>
				<header>
					<LocationOnIcon />
				</header>
				<section>
					<div>
						<h5>Clínica Pueyrredón</h5>
						<p>Jujuy 2176, Mar del Plata, Buenos Aires</p>
					</div>
					<div>
						<h5>Clínica 25 de Mayo</h5>
						<p>25 De Mayo 3542/58, Mar del Plata, Buenos Aires</p>
					</div>
				</section>
			</div>
			<div>
				<header>
					<EmailIcon />
				</header>
				<section>
					<div>
						<h5>Clínica Pueyrredón</h5>
						<p>mnpuey@clinicapueyrredon.com</p>
					</div>
					<div>
						<h5>Clínica 25 de Mayo</h5>
						<p>mn25@clinica25demayo.com.ar</p>
					</div>
				</section>
			</div>
		</Card>
	);
};

export default Contact;
