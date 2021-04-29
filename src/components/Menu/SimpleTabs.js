import {React, useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Tabs, Tab, Box} from '@material-ui/core';

import Wellcome from '../Wellcome/Wellcome';
import Service from '../ServiceComp/Service';
import Questions from '../Questions/Questions';
import Contact from '../Contact/Contact';

const appbar = {
	backgroundColor: '#67B426',
	color: '#ffffff',
};

const TabPanel = (props) => {
	const {children, value, index, ...other} = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
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
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
};

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
}));

const SimpleTabs = () => {
	const styles = useStyles();
	const [value, setValue] = useState(0);

	const changeHandler = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={styles.root}>
			<AppBar position='static' style={appbar}>
				<Tabs
					value={value}
					onChange={changeHandler}
					aria-label='simple tabs example'
					indicatorColor='primary'
					scrollButtons='on'
					variant='scrollable'>
					<Tab label='Inicio' {...a11yProps(0)} />
					<Tab label='Prácticas' {...a11yProps(1)} />
					<Tab label='Contacto' {...a11yProps(2)} />
					<Tab label='Preguntas frecuentes' {...a11yProps(3)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<Wellcome />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Service />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Contact />
			</TabPanel>
			<TabPanel value={value} index={3}>
				<Questions />
			</TabPanel>
		</div>
	);
};

export default SimpleTabs;
