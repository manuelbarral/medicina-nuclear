import {React, useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import {Tabs, Tab, Box} from '@material-ui/core';

const TabPanel = (props) => {
	const {children, value, index, ...other} = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}>
			{value === index && (
				<Box p={3}>
					<div>{children}</div>
				</Box>
			)}
		</div>
	);
};

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
};

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		height: 224,
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
	},
	tabpanel: {
		width: '75%',
	},
}));

const Service = () => {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<Tabs
				orientation='vertical'
				variant='standard'
				value={value}
				onChange={handleChange}
				indicatorColor='primary'
				aria-label='Vertical tabs example'
				className={classes.tabs}>
				<Tab label='SPECT' {...a11yProps(0)} />
			</Tabs>
			<TabPanel value={value} index={0} className={classes.tabpanel}>
				<h5>SPECT</h5>
				<p>
					La cámara especial y las técnicas de toma de imágenes
					utilizadas en la medicina nuclear incluyen la cámara gamma y
					la tomografía computarizada de emisión monofotónica (SPECT).
					<br />
					La cámara gamma, también denominada cámara de gammagrafía,
					detecta la energía radioactiva que es emitida desde el
					cuerpo del paciente, y la convierte en una imágen. La cámara
					gamma por sí misma no emite ningún tipo de radiación. La
					cámara gamma está compuesta de detectores de radiación,
					llamados cabezas de cámara, que están encapsulados en metal
					y plástico, y generalmente tienen la forma de una caja unida
					a un gantry con forma de donut redonda circular. El paciente
					yace sobre la camilla que se mueve entre dos cabezas
					paralelas de la cámara gamma que están posicionadas por
					arriba y por debajo de la camilla y ubicadas debajo de la
					camilla. A veces, las cabezas de la cámara gamma están
					orientadas en un ángulo de 90 grados y ubicadas sobre el
					cuerpo del paciente.
					<br /> La SPECT involucra la rotación de las cabezas de una
					cámara gamma alrededor del cuerpo del paciente para producir
					imágenes más detalladas (imágenes tridimensionales).
					<br /> Una computadora cercana colabora con la elaboración
					de imágenes a partir de los datos obtenidos por la cámara o
					el escáner.
				</p>
			</TabPanel>
		</div>
	);
};

export default Service;
