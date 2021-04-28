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
					<p>Un poco de historia</p>
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