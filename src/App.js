import {React, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Title from './components/Title/Title';
import Menu from './components/Menu/Menu';
import SectionInfo from './components/SectionInfo/SectionInfo';
import Footer from './components/Footer/Footer';
import Whattsapp from './components/Whattsapp/Whattsapp';
import {Roller} from 'react-spinners-css';

import 'bootstrap/dist/css/bootstrap.min.css';

import classes from './App.module.css';

const App = () => {
	const [loading, setLoading] = useState(true);

	setTimeout(() => {
		setLoading(false);
	}, 1000);

	return (
		<div className={classes.app}>
			{loading ? (
				<Roller
					load={loading}
					className={classes.spinner}
					color='#67B426'
				/>
			) : (
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
			)}
		</div>
	);
};

export default App;
