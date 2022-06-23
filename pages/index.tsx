import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Stack, Button, TextField, Checkbox, useMediaQuery, Hidden } from '@mui/material';
import Header from 'shared/components/Header';
import MediaIcons from 'shared/components/MediaIcons';
import Footer from 'shared/components/Footer';
import Lottie from 'react-lottie';
import animationIntroduction from '../public/2022/03/100801-eyes-intro.json';
import animationTechnology from '../public/2022/03/100739-tec3.json';
import animationEcosystem from '../public/2022/03/100788-builds3.json';
import animationEconomics from '../public/2022/03/101035-layer8.json';
import animationConnection from '../public/2022/03/101036-coff3.json';
import animationFuture from '../public/2022/03/100751-occulus.json';
import animationTeam from '../public/2022/03/100741-team-2.json';
import animationLnda from '../public/2022/03/100583-coin.json';
import backgroundSeccion from '../public/2022/backgroundSeccion.png';
import backgroundMain from '../public/2022/backgroundMain.png';
import background from '../public/2022/backgroundMain.png';
import { Content } from '../shared/components/ReadMore';
import { BiShareAlt, BiVector } from 'react-icons/bi';
import { BsFileEarmarkText, BsFillTagFill } from 'react-icons/bs';
import { GiNestedHexagons } from 'react-icons/gi';
import { FaArrowUp } from 'react-icons/fa';
import Image from 'next/image';
import { useStyles } from '../styles/homepage/styledSmall';
import { CheckBox } from '@mui/icons-material';

const defaultOptionsGlobal = {
	loop: true,
	autoplay: true,
	renderer: 'svg',
};

const Home: NextPage = () => {
	const { t } = useTranslation();
	// ? animation

	const matches = useMediaQuery('(max-width:1700px)');
	const matches2 = useMediaQuery('(max-width:1250px)');
	const Mobil = useMediaQuery('(max-width:1000px)');

	const stylesGeneral = useStyles();

	const AnimationIntroduction = {
		...defaultOptionsGlobal,
		animationData: animationIntroduction,
	};

	const AnimationTechnology = {
		...defaultOptionsGlobal,
		animationData: animationTechnology,
	};

	const AnimationEcosystem = {
		...defaultOptionsGlobal,
		animationData: animationEcosystem,
	};

	const AnimationEconomics = {
		...defaultOptionsGlobal,
		animationData: animationEconomics,
	};
	const AnimationConnection = {
		...defaultOptionsGlobal,
		animationData: animationConnection,
	};
	const AnimationFuture = {
		...defaultOptionsGlobal,
		animationData: animationFuture,
	};
	const AnimationTeam = {
		...defaultOptionsGlobal,
		animationData: animationTeam,
	};

	const AnimationLnda = {
		...defaultOptionsGlobal,
		animationData: animationLnda,
	};
	const classes = {
		input: {
			width: '80%',
			paddingBottom: '10px',
			'& .MuiOutlinedInput-root': {
				background: 'grey',
				borderRadius: '10px 0px 10px 0px',
				'&:hover': {
					cursor: 'pointer',
				},
				'& fieldset': {
					borderRadius: '10px 0px 10px 0px',
				},
			},
		},
	};
	return (
		<div className={styles.container}>
			<Head>
				<title>Home - Landian</title>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Home - Landian" />
				<meta
					property="og:description"
					content="WELCOME TO LANDIAN, THE FUTURE OF METAVERSE 1 . 2 Landian Introduction Landian exists so that people, businesses, organizations, and cultures can engage in the Metaverse unencumbered and without limitations.&nbsp;Moreover, it is where becoming anyone or anything is limited only by the imagination. One’s ability to evolve and thrive is determined by level of effort. […]"
				/>
				<meta name="twitter:data1" content="7 minutes" />
				<meta property="og:url" content="https://www.landian.io/" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="og:site_name" content="Landian" />
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="public/2022/1/logo_black.svg" />
			</Head>

			<Header />

			<MediaIcons />
			<Stack
				sx={{
					backgroundImage: `url('${backgroundMain.src}')`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: '100% 100%',
					backgroundPosition: 'center',
				}}>
				<Box
					sx={{
						height: '100vh',
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Box sx={{ textAlign: 'center' }}>
						<Typography sx={{ maxWidth: '700px' }} variant="h2">
							{t('homepage.title')}
						</Typography>
					</Box>
				</Box>
			</Stack>
			{
				//Ecosystem
			}

			<Stack sx={stylesGeneral.seccion.container}>
				<Box sx={stylesGeneral.seccion.separationSeccion}>
					<Box sx={stylesGeneral.seccion.containerNumber}>
						<Box sx={stylesGeneral.seccion.number}>
							<Typography paragraph sx={{ margin: '0' }}>
								5
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box sx={stylesGeneral.seccion.nameSeccion}>
					<Typography paragraph sx={stylesGeneral.seccion.textNameSeccion}>
						{t('homepage.seccion.3')}
					</Typography>
				</Box>
				<Hidden mdDown>
					<Box sx={stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationEcosystem} height={400} width={400} />
					</Box>
				</Hidden>
				<Box textAlign={{ xs: 'center', md: 'left' }} px={4} top={0} sx={{ alignSelf: 'center' }}>
					<Typography variant="h3" sx={stylesGeneral.seccion.titleSeccion}>
						{t('homepage.Ecosystem.title')}
					</Typography>
					<Content seccion="Ecosystem" numberWords={505}></Content>
					<Box sx={{ marginTop: '25px' }}>
						<Typography paragraph sx={{ fontWeight: 'bold' }}>
							{t('homepage.seccionLink')}
						</Typography>
						<Box sx={stylesGeneral.seccion.containerRelatedLink}>
							<Typography paragraph sx={stylesGeneral.seccion.firstRelatedLink}>
								{t('homepage.Ecosystem.relatedLink.0')}
							</Typography>
							<Typography sx={stylesGeneral.seccion.secondRelatedLink}>{t('homepage.Ecosystem.relatedLink.1')}</Typography>
						</Box>
						<Box>
							<Typography paragraph sx={stylesGeneral.seccion.firstRelatedLink}>
								{t('homepage.Ecosystem.relatedLink.2')}
							</Typography>
						</Box>
						<Box>
							<Typography paragraph sx={stylesGeneral.seccion.secondRelatedLink}>
								{t('homepage.Ecosystem.relatedLink.3')}
							</Typography>
						</Box>
						<Box sx={stylesGeneral.seccion.containerInformation}>
							<Typography paragraph sx={stylesGeneral.seccion.information}>
								{t('homepage.information')}
							</Typography>
							<Box>
								<Button variant="dashed">Whitepaper</Button>
							</Box>
						</Box>
					</Box>
				</Box>
				<Hidden mdUp>
					<Box sx={stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationEcosystem} height={400} width={400} />
					</Box>
				</Hidden>
			</Stack>
			{/*
			<Stack display="flex" flexDirection="row" alignItems="center" height={'100vh'}>
				<Box sx={{ marginLeft: '20px', borderBottom: '1px solid  #424949', width: '10.3vw' }}>
					<Typography paragraph sx={{ marginBottom: '0', fontSize: '20px' }}>
						{t('homepage.seccion.4')}
					</Typography>
				</Box>

				<Box marginLeft={'85px'} textAlign="left" px={4} maxWidth={600} top={0}>
					<Typography variant="h3" sx={{ marginBottom: '15px' }}>
						{t('homepage.Economics.title')}
					</Typography>
					<Stack sx={{ opacity: '0.7' }}>
						<Stack sx={{ display: 'flex', flexDirection: 'row', marginBottom: '-5px' }}>
							<GiNestedHexagons size={20} />
							<Typography paragraph sx={{ marginLeft: '8px', marginTop: '-1px', marginRight: '20px' }}>
								{t('homepage.Economics.tags.0')}
							</Typography>
							<BsFileEarmarkText size={20} />
							<Typography paragraph sx={{ marginLeft: '8px', marginTop: '-1px' }}>
								{t('homepage.Economics.tags.1')}
							</Typography>
						</Stack>
						<Stack sx={{ display: 'flex', flexDirection: 'row', marginBottom: '-5px' }}>
							<BiVector size={20} />
							<Typography paragraph sx={{ marginLeft: '8px', marginTop: '-1px', marginRight: '20px' }}>
								{t('homepage.Economics.tags.2')}
							</Typography>
							<FaArrowUp size={20} />
							<Typography paragraph sx={{ marginLeft: '8px', marginTop: '-1px' }}>
								{t('homepage.Economics.tags.3')}
							</Typography>
						</Stack>
						<Stack sx={{ display: 'flex', flexDirection: 'row', marginBottom: '-5px' }}>
							<BsFillTagFill size={20} />
							<Typography paragraph sx={{ marginLeft: '8px', marginTop: '-1px', marginRight: '20px' }}>
								{t('homepage.Economics.tags.4')}
							</Typography>
							<BiShareAlt size={20} />
							<Typography paragraph sx={{ marginLeft: '8px', marginTop: '-1px' }}>
								{t('homepage.Economics.tags.5')}
							</Typography>
						</Stack>
					</Stack>
					<Content seccion="Economics" numberWords={331}></Content>
					<Box sx={{ display: 'flex', marginTop: '10px' }}>
						<Typography paragraph sx={{ paddingTop: '5px', marginRight: '20px' }}>
							{t('homepage.information')}
						</Typography>
						<Box>
							<Button variant="dashed">Whitepaper</Button>
						</Box>
					</Box>

					<Box width={700}>
						<Lottie options={AnimationEconomics} height={600} width={600} />
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '50px' }}>
						<Box sx={{ borderBottom: '1px solid  #424949', width: '10.5vw' }}></Box>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								width: '50px',
								height: '50px',
								borderRadius: '50%',
								border: '1px solid #C0C0C0',
								opacity: '0.7',
							}}>
							<Typography paragraph sx={{ margin: '0' }}>
								5
							</Typography>
						</Box>
					</Box>
				</Box>
			</Stack>
			{
				//Conexion
			}
			<Stack display="flex" flexDirection="row" alignItems="center" height={'100vh'}>
				<Box sx={{ marginLeft: '20px', borderBottom: '1px solid  #424949', width: '10.3vw' }}>
					<Typography paragraph sx={{ marginBottom: '0', fontSize: '20px' }}>
						{t('homepage.seccion.5')}
					</Typography>
				</Box>
				<Box marginLeft={'85px'} textAlign="left" px={4} maxWidth={600} top={0}>
					<Typography variant="h3" sx={{ marginBottom: '15px' }}>
						{t('homepage.Connection.title')}
					</Typography>
					<Content seccion="Connection" numberWords={300}></Content>
					<Box sx={{ marginTop: '25px' }}>
						<Typography paragraph sx={{ fontWeight: 'bold' }}>
							{t('homepage.seccionLink')}
						</Typography>
						<Box sx={{ display: 'flex', marginTop: '15px' }}>
							<Typography paragraph sx={{ fontWeight: 'lighter', marginRight: '30px' }}>
								{t('homepage.Connection.relatedLink.0')}
							</Typography>
							<Typography paragraph sx={{ fontWeight: 'lighter' }}>
								{t('homepage.Connection.relatedLink.2')}
							</Typography>
						</Box>
						<Box>
							<Typography paragraph sx={{ fontWeight: 'lighter', marginRight: '30px' }}>
								{t('homepage.Connection.relatedLink.1')}
							</Typography>
						</Box>
						<Box>
							<Typography paragraph sx={{ fontWeight: 'lighter' }}>
								{t('homepage.Connection.relatedLink.3')}
							</Typography>
						</Box>
						<Box sx={{ display: 'flex', marginTop: '10px' }}>
							<Typography paragraph sx={{ paddingTop: '5px', marginRight: '20px' }}>
								{t('homepage.information')}
							</Typography>
							<Box>
								<Button variant="dashed">Whitepaper</Button>
							</Box>
						</Box>
					</Box>

					<Box width={700}>
						<Lottie options={AnimationConnection} height={600} width={600} />
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '50px' }}>
						<Box sx={{ borderBottom: '1px solid  #424949', width: '10.5vw' }}>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: '50px',
									height: '50px',
									borderRadius: '50%',
									border: '1px solid #C0C0C0',
									opacity: '0.7',
								}}>
								<Typography paragraph sx={{ margin: '0' }}>
									6
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</Stack>
			{
				//The future
			}
			<Stack display="flex" flexDirection="row" alignItems="center" height={'100vh'}>
				<Box sx={{ marginLeft: '20px', borderBottom: '1px solid  #424949', width: '10.3vw' }}>
					<Typography paragraph sx={{ marginBottom: '0', fontSize: '20px' }}>
						{t('homepage.seccion.6')}
					</Typography>
				</Box>
				<Box marginLeft={'85px'} textAlign="left" px={4} maxWidth={600} top={0}>
					<Typography variant="h3" sx={{ marginBottom: '15px' }}>
						{t('homepage.TheFuture.title')}
					</Typography>
					<Box sx={{ fontSize: '13px' }}>
						<pre>{t('homepage.TheFuture.description')}</pre>
					</Box>
					<Box sx={{ marginTop: '25px' }}>
						<Typography paragraph sx={{ fontWeight: 'bold' }}>
							{t('homepage.seccionLink')}
						</Typography>
						<Box sx={{ display: 'flex', marginTop: '15px' }}>
							<Typography paragraph sx={{ fontWeight: 'lighter', marginRight: '30px' }}>
								{t('homepage.TheFuture.relatedLink.0')}
							</Typography>
							<Typography paragraph sx={{ fontWeight: 'lighter' }}>
								{t('homepage.TheFuture.relatedLink.2')}
							</Typography>
						</Box>
						<Box>
							<Typography paragraph sx={{ fontWeight: 'lighter', marginRight: '30px' }}>
								{t('homepage.TheFuture.relatedLink.1')}
							</Typography>
						</Box>
						<Box>
							<Typography paragraph sx={{ fontWeight: 'lighter' }}>
								{t('homepage.TheFuture.relatedLink.3')}
							</Typography>
						</Box>
						<Box sx={{ display: 'flex', marginTop: '10px' }}>
							<Typography paragraph sx={{ paddingTop: '5px', marginRight: '20px' }}>
								{t('homepage.information')}
							</Typography>
							<Box>
								<Button variant="dashed">Whitepaper</Button>
							</Box>
						</Box>
					</Box>

					<Box width={700}>
						<Lottie options={AnimationFuture} height={500} width={500} />
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Box sx={{ borderBottom: '1px solid  #424949', width: '10.5vw' }}>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: '50px',
									height: '50px',
									borderRadius: '50%',
									border: '1px solid #C0C0C0',
									opacity: '0.7',
								}}>
								<Typography paragraph sx={{ margin: '0' }}>
									7
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</Stack>
			{
				//Team
			}
			<Stack display="flex" flexDirection="row" alignItems="center" height={'100vh'}>
				<Box sx={{ marginLeft: '20px', borderBottom: '1px solid  #424949', width: '10.3vw' }}>
					<Typography paragraph sx={{ marginBottom: '0', fontSize: '20px' }}>
						{t('homepage.seccion.7')}
					</Typography>
				</Box>
				<Box marginLeft={'85px'} textAlign="left" px={4} maxWidth={600} top={0}>
					<Typography variant="h3" sx={{ marginBottom: '15px' }}>
						{t('homepage.Team.title')}
					</Typography>
					<Stack sx={{ display: 'flex', flexDirection: 'row' }}>
						<Box sx={{ width: '140px', marginRight: '25px' }}>
							<Box sx={{ borderRadius: '50%', overflow: 'hidden', width: '130px', height: '130px' }}>
								<Image src="/2022/05/Austin-300x300.jpg" width={130} height={130} />
							</Box>
							<Typography paragraph sx={{ textAlign: 'center', marginTop: '10px' }}>
								{t('homepage.Team.members.0')}
							</Typography>
						</Box>
						<Box sx={{ width: '140px', marginRight: '25px' }}>
							<Box sx={{ borderRadius: '50%', overflow: 'hidden', width: '130px', height: '130px' }}>
								<Image src="/2022/05/Alejo-300x300.jpg" width={130} height={130} />
							</Box>
							<Typography paragraph sx={{ textAlign: 'center', marginTop: '10px' }}>
								{t('homepage.Team.members.1')}
							</Typography>
						</Box>
						<Box sx={{ width: '140px', marginRight: '25px' }}>
							<Box sx={{ borderRadius: '50%', overflow: 'hidden', width: '130px', height: '130px' }}>
								<Image src="/2022/05/Charlie-300x300.jpg" width={130} height={130} />
							</Box>
							<Typography paragraph sx={{ textAlign: 'center', marginTop: '10px' }}>
								{t('homepage.Team.members.2')}
							</Typography>
						</Box>
						<Box sx={{ width: '140px', marginRight: '25px' }}>
							<Box sx={{ borderRadius: '50%', overflow: 'hidden', width: '130px', height: '130px' }}>
								<Image src="/2022/05/Miguel-300x300.jpg" width={130} height={130} />
							</Box>
							<Typography paragraph sx={{ textAlign: 'center', marginTop: '10px' }}>
								{t('homepage.Team.members.3')}
							</Typography>
						</Box>
					</Stack>
					<Stack sx={{ display: 'flex', flexDirection: 'row' }}>
						<Box sx={{ width: '140px', marginRight: '25px' }}>
							<Box sx={{ borderRadius: '50%', overflow: 'hidden', width: '130px', height: '130px' }}>
								<Image src="/2022/05/Omar-300x300.jpg" width={130} height={130} />
							</Box>
							<Typography paragraph sx={{ textAlign: 'center', marginTop: '10px' }}>
								{t('homepage.Team.members.4')}
							</Typography>
						</Box>
						<Box sx={{ width: '140px', marginRight: '25px' }}>
							<Box sx={{ borderRadius: '50%', overflow: 'hidden', width: '130px', height: '130px' }}>
								<Image src="/2022/05/Daniel.jpg" width={130} height={130} />
							</Box>
							<Typography paragraph sx={{ textAlign: 'center', marginTop: '10px' }}>
								{t('homepage.Team.members.5')}
							</Typography>
						</Box>
						<Box sx={{ width: '140px', marginRight: '25px' }}>
							<Box sx={{ borderRadius: '50%', overflow: 'hidden', width: '130px', height: '130px' }}>
								<Image src="/2022/05/Elias.jpg" width={130} height={130} />
							</Box>
							<Typography paragraph sx={{ textAlign: 'center', marginTop: '10px' }}>
								{t('homepage.Team.members.6')}
							</Typography>
						</Box>
					</Stack>
					<Box sx={{ display: 'flex', marginTop: '10px' }}>
						<Typography paragraph sx={{ paddingTop: '5px', marginRight: '20px' }}>
							{t('homepage.information')}
						</Typography>
						<Box>
							<Button variant="dashed">Whitepaper</Button>
						</Box>
					</Box>

					<Box width={700}>
						<Lottie options={AnimationTeam} height={400} width={400} />
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Box sx={{ borderBottom: '1px solid  #424949', width: '10.5vw' }}>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: '50px',
									height: '50px',
									borderRadius: '50%',
									border: '1px solid #C0C0C0',
									opacity: '0.7',
								}}>
								<Typography paragraph sx={{ margin: '0' }}>
									8
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</Stack>
			{
				//LNDA
			}
			<Stack display="flex" flexDirection="row" alignItems="center" height={'100vh'}>
				<Box sx={{ marginLeft: '20px', borderBottom: '1px solid  #424949', width: '10.3vw' }}>
					<Typography paragraph sx={{ marginBottom: '0', fontSize: '20px' }}>
						{t('homepage.seccion.8')}
					</Typography>
				</Box>
				<Box marginLeft={'85px'} textAlign="left" px={4} maxWidth={600} top={0}>
					<Typography variant="h3" sx={{ marginBottom: '15px' }}>
						{t('homepage.Experience.title')}
					</Typography>
					<Box sx={{ fontSize: '13px' }}>
						<pre>{t('homepage.Experience.description')}</pre>
					</Box>
					<Box sx={{ marginTop: '25px' }}>
						<Typography paragraph sx={{ fontWeight: 'bold' }}>
							{t('homepage.Experience.contract')}
						</Typography>
					</Box>
					<Box sx={{ display: 'flex', marginTop: '10px' }}>
						<Typography paragraph sx={{ paddingTop: '5px', marginRight: '20px' }}>
							{t('homepage.information')}
						</Typography>
						<Box>
							<Button variant="dashed">Whitepaper</Button>
						</Box>
					</Box>
					<Box width={600}>
						<Lottie options={AnimationLnda} height={600} width={600} />
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Box sx={{ borderBottom: '1px solid  #424949', width: '10.5vw' }}>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: '50px',
									height: '50px',
									borderRadius: '50%',
									border: '1px solid #C0C0C0',
									opacity: '0.7',
								}}>
								<Typography paragraph sx={{ margin: '0' }}>
									9
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</Stack>
			{
				//Suscribe
			}
			<Stack display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" height={'100vh'}>
				<Box sx={{ marginLeft: '20px', borderBottom: '1px solid  #424949', width: '10.3vw' }}>
					<Typography paragraph sx={{ marginBottom: '0', fontSize: '20px' }}>
						{t('homepage.seccion.9')}
					</Typography>
				</Box>
				<Stack justifyContent="center" alignItems="center" spacing={2}>
					<Typography variant="h4" fontWeight="bold" mb={2}>
						{t('homepage.Suscribe.title')}
					</Typography>
					<TextField variant="outlined" size="small" placeholder={t('homepage.Suscribe.fields.0')} sx={classes.input} />
					<TextField
						variant="outlined"
						size="small"
						placeholder={t('homepage.Suscribe.fields.1')}
						type="email"
						sx={classes.input}
					/>
					<TextField
						variant="outlined"
						type="text"
						size="small"
						placeholder={t('homepage.Suscribe.fields.2')}
						sx={classes.input}
					/>
					<TextField
						variant="outlined"
						size="small"
						placeholder={t('homepage.Suscribe.fields.3')}
						type="text"
						sx={classes.input}
					/>
					<Box sx={{ display: 'flex', paddingTop: '10 px' }}>
						<CheckBox></CheckBox>
						<Typography paragraph sx={{ marginLeft: '5px' }}>
							{t('homepage.Suscribe.check')}
						</Typography>
					</Box>
					<Button variant="dashed" sx={{ width: 'fit-content' }}>
						{t('homepage.Suscribe.submit')}
					</Button>
				</Stack>
				<Box sx={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
					<Box sx={{ borderBottom: '1px solid  #424949', width: '10.5vw' }}>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								width: '50px',
								height: '50px',
								borderRadius: '50%',
								border: '1px solid #C0C0C0',
								opacity: '0.7',
							}}>
							<Typography paragraph sx={{ margin: '0' }}>
								10
							</Typography>
						</Box>
					</Box>
				</Box>
			</Stack>
			*/}
			<Footer />
		</div>
	);
};

export default Home;
