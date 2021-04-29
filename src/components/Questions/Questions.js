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
						¿Cómo saco un turno?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Para pedir un turno puede llamar al teléfono del servicio,
						escribir al whattsap o enviar un e-mail. Se le responderá
						a la brevedad.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel2a-content'
					id='panel2a-header'>
					<Typography className={classes.font}>
						¿Con que obras sociales trabajan?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Trabajamos con muchas obras sociales prepagas y contamos
						con diferentes convenios. Consulte por su obra social.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel3a-content'
					id='panel3a-header'>
					<Typography className={classes.font}>
						¿Me tengo que hacer una perfusión miocárdica en reposo y
						esfuerzo, cómo es el estudio?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						El estudio se realiza los días lunes y martes
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel3a-content'
					id='panel3a-header'>
					<Typography className={classes.font}>
						¿Me tengo que hacer una perfusión miocárdica en reposo y
						con apremio, cómo es el estudio?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Suspendisse malesuada lacus ex, sit amet blandit leo
						lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default Questions;
