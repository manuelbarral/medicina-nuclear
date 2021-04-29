import React from 'react';
import Card from '../UI/Card';

import classes from './SectionInfo.module.css';

const SectionInfo = () => {
	return (
		<Card className={classes.card}>
			<div>
				<header>
					<h5>SOBRE NOSOTROS</h5>
				</header>
				<section>
					<p>
						Somos el servicio de Medicina Nuclear de la Clínica
						Pueyrredón y Clínica 25 de Mayo de la ciudad de Mar del
						Plata.
					</p>
				</section>
			</div>
			<div>
				<header>
					<h5>SEDES</h5>
				</header>
				<section>
					<ul>
						<li>
							<strong>Sede Clínica 25 de Mayo:</strong> <br /> 25 de
							Mayo 3542/58
						</li>
						<li>
							<strong>Sede Clínica Pueyrredón:</strong>
							<br /> Jujuy 2176
						</li>
					</ul>
				</section>
			</div>
		</Card>
	);
};

export default SectionInfo;
