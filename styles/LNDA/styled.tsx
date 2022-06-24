import backgroundTextImage from 'public/2022/03/logo_landian_letras_gris.svg';
import backgroundCelphone from 'public/2022/03/manos_telefono.png';

export const useStyles = () => ({
	token: {
		container: {
			backgroundColor: '#272727',
			backgroundImage: `url('${backgroundTextImage.src}')`,
			backgroundPosition: 'center center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: '60% auto',
			py: {
				xs: 30,
				lg: 10
			},
		},
		overlay: { backdropFilter: 'blur(7px)' },
		card: {
			maxWidth: '900px',
			borderRadius: 10,
			border: '4px solid white',
			backgroundColor: '#000000A1',
			p: {
				xs: 10,
			},
			textAlign: 'center',
			position: 'relative',
		},
		circle: { position: 'absolute', top: -50, right: 100 },
		group: { position: 'absolute', bottom: -40, left: -40 },
	},
	story: {
		container: {
			backgroundColor: '#272727',
			backgroundImage: `url('${backgroundCelphone.src}')`,
			backgroundPosition: 'center center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: '50% auto',
			py: {
				xs: 10,
			},
			px: {
				xs: 2,
				lg: 2,
			},
		},
		overlay: { backdropFilter: 'blur(7px)' },
		card: {
			borderRadius: 10,
			border: '4px solid white',
			backgroundColor: '#000000A1',
			p: {
				xs: 3,
				lg: 10,
			},
			textAlign: 'center',
			position: 'relative',
		},
		circle: { position: 'absolute', top: -50, right: 100 },
		group: { position: 'absolute', top: -80, left: -50 },
		visor: { position: 'absolute', bottom: -80, left: 450 },
		cardRoadmap: {
			borderRadius: '50%',
			width: 50,
			height: 50,
			color: 'black',
			boxShadow: '0 0 20px 0 #fff',
			background: 'white',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			position: 'absolute',
			top: -20,
			left: 0,
			right: 0,
			margin: 'auto',
		},
	},
	circulation: {
		container: { position: 'relative', bgColor: 'black', py: { lg: 10, xs: 10 }, textAlign: 'center' },
	},
});
