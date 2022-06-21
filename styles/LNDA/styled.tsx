import backgroundTextImage from 'public/2022/03/logo_landian_letras_gris.svg';

export const useStyles = () => ({
	token: {
		container: {
			backgroundColor: '#272727',
			backgroundImage: `url('${backgroundTextImage.src}')`,
			backgroundPosition: 'center center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: '60% auto',
			py: {
				xs: 10,
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
	circulation: {
		container: { position: 'relative', bgColor: 'black', py: { lg: 10 }, textAlign: 'center' },
	},
});
