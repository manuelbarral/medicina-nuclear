import React from 'react';
import Grid from '@material-ui/core/Grid';
import Menu from './components/Menu/Menu';
import SectionInfo from './components/SectionInfo/SectionInfo';
import Footer from './components/Footer/Footer';

import classes from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Whattsapp from './components/Whattsapp/Whattsapp';

const App = () => {
	return (
		<div className={classes.root}>
			<Grid container className={classes.container}>
				<Grid item xs={12}>
					<Menu />
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<SectionInfo />
				<Whattsapp />
				<Footer />
			</Grid>
		</div>
	);
};

export default App;
