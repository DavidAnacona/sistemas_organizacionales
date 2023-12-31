import backgroundSeccion from '../../public/2022/03/logo-linear-fondo-dark.svg';

export const useStyles = () => ({
	seccion: {
		container: {
			backgroundImage: `url('${backgroundSeccion.src}')`,
			backgroundPosition: 'center center',

			backgroundRepeat: 'no-repeat',
			backgroundSize: { xs: '90% auto', md: '650px auto' },
			minHeight: { xs: 'auto', md: '100vh' },
			transition: 'all ease 1s',
			transitionTimingFunction: 'cubic-bezier(0,.33,.07,1.03)',
		},
		separationSeccion: {
			display: 'flex',
			alignItems: 'center',
			marginBottom: '30px',
			justifyContent: { xs: '', md: 'end', lg: 'end' },
			marginRight: { xs: '', md: '20px' },
		},
		containerNumber: {
			borderBottom: '1px solid  #424949',
			width: { xs: '100vw', md: '10.5vw' },
			display: 'flex',
			justifyContent: { xs: 'center', md: 'right', lg: 'right' },
		},
		number: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: { xs: '30px', lg: '40px' },
			height: { xs: '30px', lg: '40px' },
			borderRadius: '50%',
			border: '1px solid #C0C0C0',
			opacity: '0.7',
			marginBottom: { xs: '-16px', lg: '-20px' },
			backgroundColor: '#000000',
		},
		nameSeccion: {
			display: { xs: 'none', md: 'none', xl: 'block' },
			marginLeft: '20px',
			borderBottom: '1px solid  #424949',
			width: '10.3vw',
			height: '30px',
			alignSelf: 'center',
		},
		textNameSeccion: {
			marginBottom: '0',
			fontSize: '20px',
		},
		titleSeccion: {
			marginBottom: '15px',
			fontSize: { xs: '22px', md: '42px' },
			fontWeight: 500,
		},
		titleSeccion2: {
			textAlign: 'right',
			marginBottom: '15px',
			fontSize: { xs: '22px', md: '42px' },
			fontWeight: 500,
			
		},
		titleSeccion3: {
			textAlign: 'center',
			marginBottom: '15px',
			fontSize: { xs: '22px', md: '42px' },
			fontWeight: 500,
			
		},
		containerRelatedLink: {
			display: 'flex',
			marginTop: '15px',
			justifyContent: { xs: 'center', md: 'start' },
		},
		firstRelatedLink: {
			fontWeight: 'lighter',
			marginRight: '30px',
			fontSize: { xs: '13px', md: '14px' },
		},
		secondRelatedLink: {
			fontWeight: 'lighter',
			fontSize: { xs: '13px', md: '14px' },
		},
		containerInformation: {
			display: 'flex',
			marginTop: '20px',
			justifyContent: { xs: 'center', md: 'left', lg: 'left' },
		},
		information: {
			paddingTop: '5px',
			marginRight: '20px',
		},
		containerAnimation: {
			alignSelf: 'center',
			borderRadius: '50%',
			overflow: 'hidden',
			width: { xs: '90px', md: '110px', lg: '130px' },
			height: { xs: '90px', md: '110px', lg: '130px' },
		},
		containerEconomicsTags: {
			display: 'flex',
			flexDirection: 'row',
			marginBottom: '-5px',
			justifyContent: { xs: 'center', md: 'left', lg: 'left' },
		},
		economicsTagsFirst: {
			marginLeft: '8px',
			marginTop: '-1px',
			marginRight: '20px',
		},
		economicsTagsSecond: {
			marginLeft: '8px',
			marginTop: '-1px',
		},
		containerMembers: {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			maxWidth: { md: '500px', lg: '700px' },
			justifyContent: { xs: 'center', md: 'left', lg: 'left' },
		},
		containerTeam: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			flexDirection: 'column',
			width: { xs: '90px', md: '110px', lg: '130px' },
			marginRight: '25px',
		},
		containerImage: {
			borderRadius: '50%',
			overflow: 'hidden',
			width: { xs: '90px', md: '110px', lg: '130px' },
			height: { xs: '90px', md: '110px', lg: '130px' },
		},
		containerImage2: {
			borderRadius: '20px',
			overflow: 'hidden',
		},
		memberName: {
			textAlign: 'center',
			marginTop: '10px',
		},
		containerAnimationTeam: {
			alignSelf: 'center',
			width: { xs: '450px', md: '650px', lg: '650px' },
		},
		paper: {
			background: 'white',
			color: 'black',
			padding: '5px 15px',
			borderRadius: '10px',
			cursor: 'pointer',
			width: 'auto',
		},
		blackpaper: {
			width: 'auto',
			textAlign: 'center',
			fontSize: '1rem',
			fontWeight: 500,
			textTransform: 'uppercase',
			fill: '#FFFFFF',
			color: '#FFFFFF',
			backgroundColor: '#00000000',
			borderStyle: 'solid',
			borderWidth: '1px 1px 1px 1px',
			borderRadius: '10px 10px 10px 10px',
			boxShadow: '0px 0px 15px 0px rgb(255 255 255 / 84%)',
			padding: '5px 15px 5px 15px',
			cursor: 'pointer',
		},
		dwarf: {
			alignSelf: 'center',
			width: '230px',
			
		},
	},
});
