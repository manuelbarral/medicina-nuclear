import React from 'react';

import classes from './Title.module.css';

const Title = () => {
	return (
		<div className={classes.container}>
			<h1 className={classes.title}>
				MEDICINA <strong>NUCLEAR</strong>
			</h1>
			<h2 className={classes.title}>Dra. Silvia Lockhart</h2>
		</div>
	);
};

export default Title;
