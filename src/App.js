import {React, Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import Title from './components/Title/Title';
import Menu from './components/Menu/Menu';
import SectionInfo from './components/SectionInfo/SectionInfo';
import Footer from './components/Footer/Footer';
import Whattsapp from './components/Whattsapp/Whattsapp';

import 'bootstrap/dist/css/bootstrap.min.css';

import classes from './App.module.css';

const App = () => {
	return (
		<Fragment>
			<div className={classes.root}>
				<Grid container className={classes.container}>
					<Grid item xs={12}>
						<Title />
						<Menu />
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<SectionInfo />
					<Whattsapp />
					<Footer />
				</Grid>
			</div>
		</Fragment>
	);
};

export default App;
