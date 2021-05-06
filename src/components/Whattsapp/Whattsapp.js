import {React, lazy} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const WhatsAppIcon = lazy(() =>
	import('@material-ui/icons/WhatsApp')
);

const link =
	'https://wa.me/5492235976016?text=Quisiera%20pedir%20un%20turno';

const blank = '_blank';

const useStyles = makeStyles((theme) => ({
	whatsapp: {
		position: 'fixed',
		bottom: '50px',
		right: '10px',
		backgroundColor: '#58D463',
		color: '#ffffff',
		zIndex: '100',
		[theme.breakpoints.up('sm')]: {
			bottom: '20px',
			right: '20px',
		},

		'&:hover': {
			backgroundColor: '#08cf19',
			color: '#005480',
		},
	},
	icon: {
		position: 'absolute',
		top: '20%',
		right: '20%',
	},
}));

const Whattsapp = () => {
	const styles = useStyles();

	return (
		<Fab
			className={styles.whatsapp}
			href={link}
			size='small'
			target={blank}>
			<WhatsAppIcon className={styles.icon} />
		</Fab>
	);
};

export default Whattsapp;
