import {React, lazy} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './App.module.css';
import Menu from './components/Menu/Menu';

const Grid = lazy(() => import('@material-ui/core/Grid'));
const Title = lazy(() => import('./components/Title/Title'));
const SectionInfo = lazy(() =>
	import('./components/SectionInfo/SectionInfo')
);
const Footer = lazy(() => import('./components/Footer/Footer'));
const Whattsapp = lazy(() =>
	import('./components/Whattsapp/Whattsapp')
);

const App = (props) => {
	return (
		<div className={`${classes.app} ${props.className}`}>
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
		</div>
	);
};

export default App;
