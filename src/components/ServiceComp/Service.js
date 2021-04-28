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
				<Tab label='PET/CT' {...a11yProps(0)} />
				<Tab label='PET/MR' {...a11yProps(1)} />
				<Tab label='SPECT/CT' {...a11yProps(2)} />
			</Tabs>
			<TabPanel value={value} index={0}>
				<h5>PET/CT</h5>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<h5>PET/MR</h5>
			</TabPanel>
			<TabPanel value={value} index={2} className={classes.tabpanel}>
				<h5>SPECT/CT</h5>
				<p>
					El SPECT/CT es una técnica de imágenes híbridas que combina
					la tomografía por emisión de fotón único (SPECT) y la
					tomografía computada (CT). La metodología de adquisición de
					imágenes SPECT permite realizar distintos tipos de estudios
					diagnósticos capaces de detectar enfermedades óseas,
					renales, endocrinas, hepáticas, cardíacas, vasculares,
					gastrointestinales, linfáticas y neurológicas, entre otras.
				</p>
			</TabPanel>
		</div>
	);
};

export default Service;
