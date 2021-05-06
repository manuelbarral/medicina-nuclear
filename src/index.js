import {React, lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Ring} from 'react-spinners-css';
import classes from './index.module.css';

const App = lazy(() => {
	return Promise.all([
		import('./App'),
		new Promise((resolve) => setTimeout(resolve, 300)),
	]).then(([moduleExports]) => moduleExports);
});

ReactDOM.render(
	<Suspense
		fallback={<Ring color='#67B426' className={classes.spinner} />}>
		<App className={classes.app} />
	</Suspense>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
