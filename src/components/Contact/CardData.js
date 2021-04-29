import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardContent, Typography} from '@material-ui/core';

import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '450px',
		margin: '10px auto 10px auto',
		[theme.breakpoints.down('sm')]: {
			width: '250px',
		},
	},
	title: {
		textAlign: 'center',
	},
	text: {
		fontSize: 14,
		textAlign: 'start',
		margin: '10px 0',
		[theme.breakpoints.down('sm')]: {
			fontSize: 12,
		},
	},
}));

const CardData = (props) => {
	const classes = useStyles();

	return (
		<Card className={classes.root} variant='outlined'>
			<CardContent>
				<Typography
					variant='h5'
					component='h2'
					className={classes.title}>
					{props.name}
				</Typography>
				<Typography
					variant='body2'
					component='p'
					className={classes.text}>
					<PhoneIcon style={{marginRight: '10px'}} />
					{props.phone}
				</Typography>
				<Typography
					variant='body2'
					component='p'
					className={classes.text}>
					<LocationOnIcon style={{marginRight: '10px'}} />
					{props.address}
				</Typography>
				<Typography
					variant='body2'
					component='p'
					className={classes.text}>
					<EmailIcon style={{marginRight: '10px'}} />
					{props.email}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CardData;
