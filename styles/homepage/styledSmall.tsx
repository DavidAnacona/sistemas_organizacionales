import backgroundSeccion from '../../public/2022/backgroundSeccion.png';

export const useStyles = () => ({
	seccion: {
		container: {
			backgroundImage: `url('${backgroundSeccion.src}')`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100% 100%',
			backgroundPosition: 'center',
			display: 'flex',
			flexDirection: { md: '', lg: 'row-reverse' },
			justifyContent: { xs: 'center', md: 'space-between' },
			height: { md: '', lg: '100vh' },
		},
		separationSeccion: {
			display: 'flex',
			alignItems: 'center',
			marginBottom: '30px',
			justifyContent: { xs: '', md: 'end' },
			marginRight: { xs: '', md: '20px' },
		},
		containerNumber: {
			borderBottom: '1px solid  #424949',
			width: { xs: '100%', lg: '10.5vw' },
			display: 'flex',
			justifyContent: 'center',
		},
		number: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '30px',
			height: '30px',
			borderRadius: '50%',
			border: '1px solid #C0C0C0',
			opacity: '0.7',
			marginBottom: '-16px',
			backgroundColor: '#000000',
		},
		nameSeccion: {
			display: { xs: 'none', md: 'none', lg: 'none' },
			marginLeft: '20px',
			borderBottom: '1px solid  #424949',
			width: '10.3vw',
		},
		textNameSeccion: {
			marginBottom: '0',
			fontSize: '20px',
		},
		titleSeccion: {
			marginBottom: '15px',
			fontSize: { xs: '40px', md: '50px' },
		},
		containerRelatedLink: {
			display: 'flex',
			marginTop: '15px',
			justifyContent: { xs: 'center', md: 'start' },
		},
		firstRelatedLink: {
			fontWeight: 'lighter',
			marginRight: '30px',
			fontSize: '13px',
		},
		secondRelatedLink: {
			fontWeight: 'lighter',
			fontSize: '13px',
		},
		containerInformation: {
			display: 'flex',
			marginTop: '20px',
			justifyContent: 'center',
		},
		information: {
			paddingTop: '5px',
			marginRight: '20px',
		},
		containerAnimation: {
			marginTop: '30px',
			alignSelf: 'center',
			width: '400px',
		},
		animation: {
			width: '400px',
			height: '400px',
		},
	},
});
