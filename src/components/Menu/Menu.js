import {React, Fragment} from 'react';
import SimpleTabs from './SimpleTabs';

import classes from './Menu.module.css';

const Menu = () => {
	return (
		<Fragment>
			<div className={classes.titles}>
				<h1 className={classes.title}>
					MEDICINA <strong>NUCLEAR</strong>
				</h1>
				<h2 className={classes.title}>Dra. Silvia Lockhart</h2>
			</div>
			<SimpleTabs />
		</Fragment>
	);
};

export default Menu;
