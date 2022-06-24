import backgroundSeccion from '../../public/2022/backgroundSeccion.png';

export const useStyles = () => ({
	seccion: {
		container: {
			backgroundImage: `url('${backgroundSeccion.src}')`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100% 100%',
			backgroundPosition: 'center',
			display: 'flex',
			flexDirection: 'row-reverse',
			justifyContent: 'center',
			height: '100vh',
		},
		separationSeccion: {
			display: 'flex',
			alignItems: 'center',
			marginBottom: '30px',
		},
		containerNumber: {
			borderBottom: '1px solid  #424949',
			width: '10.5vw',
			display: 'flex',
			justifyContent: 'center',
		},
		containerText: {
			display: 'flex',
			flexDirection: 'row',
			width: '89.5vw',
			alignContent: 'center',
			flexWrap: 'wrap',
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
			display: 'none',
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
			fontSize: '40px',
		},
		containerRelatedLink: {
			display: 'flex',
			marginTop: '15px',
			justifyContent: 'center',
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
