import React from 'react';
import Grid from '@material-ui/core/Grid';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

import classes from './App.module.css';

const App = () => {
	return (
		<div className={classes.root}>
			<Grid container className={classes.container}>
				<Grid item xs={12}>
					<Menu />
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<Footer />
			</Grid>
		</div>
	);
};

export default App;
