import {React, Fragment, useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {AppBar, Tabs, Tab, Box} from '@material-ui/core';

import Wellcome from '../Wellcome/Wellcome';
import Service from '../ServiceComp/Service';
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

const SimpleTabs = () => {
	const theme = useTheme();
	const [value, setValue] = useState(0);

	const changeHandler = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	return (
		<Fragment>
			<AppBar position='static' style={appbar}>
				<Tabs
					value={value}
					onChange={changeHandler}
					aria-label='simple tabs example'
					centered={true}
					indicatorColor='primary'>
					<Tab label='Inicio' {...a11yProps(0)} />
					<Tab label='Prácticas' {...a11yProps(1)} />
					<Tab label='Contacto' {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<SwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={value}
				onChangeIndex={handleChangeIndex}>
				<TabPanel value={value} index={0} dir={theme.direction}>
					<Wellcome />
				</TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
					<Service />
				</TabPanel>
				<TabPanel value={value} index={2} dir={theme.direction}>
					<Contact />
				</TabPanel>
			</SwipeableViews>
		</Fragment>
	);
};

export default SimpleTabs;
