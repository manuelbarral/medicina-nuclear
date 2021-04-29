import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	font: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
		color: '#005480',
	},
}));

const Questions = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'>
					<Typography className={classes.font}>
						¿En que consiste la medicina nuclear general?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						La medicina nuclear constituye una subespecialidad del
						campo de las imágenes médicas que utiliza cantidades muy
						pequeñas de material radioactivo para diagnosticar y
						determinar la gravedad, o para tratar, una variedad de
						enfermedades, incluyendo varios tipos de cánceres,
						enfermedades cardíacas, gastrointestinales, endocrinas,
						desórdenes neurológicos, y otras anomalías dentro del
						cuerpo. Debido a que los procedimientos de medicina
						nuclear pueden detectar actividades moleculares dentro del
						cuerpo, ofrecen la posibilidad de identificar enfermedades
						en sus etapas tempranas, como así tambiém las respuestas
						inmediatas de los pacientes a las intervenciones
						terapéuticas.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel2a-content'
					id='panel2a-header'>
					<Typography className={classes.font}>
						¿En qué consiste un estudio de Cámara Gamma?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						El diagnóstico por imágenes de medicina nuclear por lo
						general se lleva a cabo en forma ambulatoria, pero en
						algunas ocasiones se realiza también en pacientes
						hospitalizados.
						<br /> Se lo ubicará en una mesa de examen. De ser
						necesario, el técnico le insertará un catéter intravenosa
						(IV) en una vena de la mano o del brazo.
						<br /> Cuando llega el momento de iniciar el diagnóstico
						por imágenes, la cámara tomará una serie de imágenes. La
						cámara podría rotar alrededor suyo o mantenerse en una
						posición y se le solicitará a usted que cambie de posición
						entre las imágenes. Mientras la cámara captura las
						imágenes, usted debe permanecer quieto por breves períodos
						de tiempo. En algunos casos la cámara puede moverse bien
						cerca del cuerpo. Esto es necesario para obtener imágenes
						de mejor calidad. Si usted padece de claustrofobia, hay
						que informar al técnico o médico antes de iniciarse el
						examen.
						<br />
						La duración de tiempo para los procedimientos de medicina
						nuclear varía considerablemente, según el tipo de examen.
						El tiempo real de exploración para los exámenes de
						diagnóstico por imágenes de medicina nuclear puede llevar
						desde 20 minutos hasta varias horas y podría realizarse
						por varios días.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel3a-content'
					id='panel3a-header'>
					<Typography className={classes.font}>
						¿Qué información debo proporcionar para solicitar un
						turno?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Al momento de solicitar el turno, debe contar con toda la
						información personal del paciente junto al pedido médico.
						El administrativo le explicará, de una forma
						personalizada, la preparación para el mismo.
						Adicionalmente, se le entregará por escrito todas las
						indicaciones previas al estudio.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel3a-content'
					id='panel3a-header'>
					<Typography className={classes.font}>
						¿Qué debo llevar el día del turno?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<ul>
						<li>
							<Typography variant='body1'>PEDIDO MÉDICO</Typography>
						</li>
						<li>
							<Typography variant='body1'>
								Todos los estudios anteriores. Si ha realizado
								estudios de Cámara Gamma anteriormente, deberá traer
								los originales.
							</Typography>
						</li>
						<li>
							<Typography variant='body1'>
								Asegúrese de tener la autorización de su Obra Social,
								y que la misma no esté vencida.
							</Typography>
						</li>
						<li>
							<Typography variant='body1'>
								NO concurrir con niños ni mujeres embarazadas.
							</Typography>
						</li>
						<li>
							<Typography variant='body1'>
								El Servicio le dará instrucciones adicionales según el
								estudio específico que vaya a realizarse.
							</Typography>
						</li>
					</ul>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel3a-content'
					id='panel3a-header'>
					<Typography className={classes.font}>
						¿Hay efectos secundarios en estudios de Cámara Gamma?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Los estudios de Cámara Gamma son seguros y no causan
						efectos secundarios. Un estudio con Cámara Gamma tiene
						aproximadamente la misma cantidad de radiación que usted
						recibe con otras pruebas diagnósticas. El material
						radiactivo que se utiliza en la exploración de Cámara
						Gamma no permanecerá mucho tiempo en su organismo. Según
						el estudio, se le podría pedir no permanecer cerca de
						embarazadas ni niños menores de 2 años por 24 hs.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel3a-content'
					id='panel3a-header'>
					<Typography className={classes.font}>
						Instrucciones al salir
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<ul>
						<li>
							<Typography variant='body1'>
								Al salir no hay ningún efecto secundario, puede comer
								sin restricciones adicionales a la que usted tiene
								diariamente.
							</Typography>
						</li>
						<li>
							<Typography variant='body1'>
								Como única precaución, se recomienda no cargar o
								mantener niños pequeños o bebes muy cerca de su cuerpo
								(esta restricción termina a las 24 horas de realizado
								el estudio).
							</Typography>
						</li>
						<li>
							<Typography variant='body1'>
								Si es madre que está amamantado, debe suspender la
								lactancia por 24hs.
							</Typography>
						</li>
					</ul>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default Questions;
