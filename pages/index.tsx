import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Stack, Button, TextField, Checkbox, useMediaQuery, Hidden, Paper } from '@mui/material';
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
import { FaArrowUp, FaTwitter } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import Image from 'next/image';
import { useStyles } from '../styles/homepage/styled';
import { CheckBox } from '@mui/icons-material';
import { useLayoutEffect, useRef, useState } from 'react';
import { useViewportScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import seo from '../public/2022/1/logo_black.svg';

const defaultOptionsGlobal = {
	loop: true,
	autoplay: true,
	renderer: 'svg',
};

const Home: NextPage = () => {
	const { t } = useTranslation();
	// ? animation

	const medium = useMediaQuery('(max-width:1190px)');
	const small = useMediaQuery('(max-width:899px)');
	const dwarf = useMediaQuery('(max-width:450px)');

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

	const { scrollY } = useViewportScroll();
	const rotate = useTransform(scrollY, [0, 150], [0, 3], { clamp: false });
	const rotate2 = useTransform(scrollY, [100, 0], [-9, -8], { clamp: false });

	const ContainerSection = ({ step = 1, children }: { step: number; children: React.ReactNode | React.ReactFragment }) => {
		return (
			<Stack sx={stylesGeneral.seccion.container}>
				<motion.div
					className="container"
					style={{
						y: rotate2,
						transitionTimingFunction: 'cubic-bezier(0,.33,.07,1.03)',
						transition: 'all ease 1s',
						minHeight: '100vh',
						display: 'flex',
					}}
					transition={{ duration: 1 }}>
					<Stack
						pl={{ xs: 0, md: '60px', xl: 0 }}
						direction={{ xs: 'column', md: 'row-reverse' }}
						justifyContent={{ xs: 'center', md: 'space-between' }}
						width="100%">
						<Box sx={stylesGeneral.seccion.separationSeccion}>
							<Box sx={stylesGeneral.seccion.containerNumber}>
								<Box sx={stylesGeneral.seccion.number}>
									<Typography paragraph sx={{ margin: '0' }}>
										{step}
									</Typography>
								</Box>
							</Box>
						</Box>
						{children}
					</Stack>
				</motion.div>
			</Stack>
		);
	};
	return (
		<div>
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
				<link rel="icon" href="/2022/01/logo_black.svg" sizes="32x32" />
			</Head>
			<Header />
			<MediaIcons />
			<Stack sx={{ ...stylesGeneral.seccion.container, position: 'relative' }}>
				<Box
					sx={{
						minHeight: '100vh',
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Box
						sx={{
							textAlign: 'center',
							display: 'flex',
							gap: 2,
							justifyContent: 'center',
						}}>
						<Hidden mdDown>
							<Stack width={200}></Stack>
						</Hidden>
						<motion.div
							className="container"
							style={{
								y: rotate,
								transitionTimingFunction: 'cubic-bezier(0,.33,.07,1.03)',
								transition: 'all ease 1s',
							}}
							transition={{ duration: 0.5 }}>
							<Typography
								sx={{
									fontFamily: 'PhatBoy Slim',
									fontWeight: 'bold',
									textTransform: 'uppercase',
									lineHeight: '1.1em',
									letterSpacing: '5px',
								}}
								fontSize={{ xs: '27px', lg: '42px' }}>
								<pre style={{ fontFamily: 'PhatBoy Slim', textAlign: 'center' }}>{t('homepage.title')}</pre>
							</Typography>
						</motion.div>
						<Hidden mdDown>
							<Box sx={stylesGeneral.seccion.separationSeccion}>
								<Box sx={stylesGeneral.seccion.containerNumber}>
									<Box sx={stylesGeneral.seccion.number}>
										<Typography paragraph sx={{ margin: '0' }}>
											1
										</Typography>
									</Box>
								</Box>
							</Box>
						</Hidden>
					</Box>
					<Box position="absolute" left={{ xs: '10%', md: '20%' }} top="5%">
						<AnimatePresence exitBeforeEnter>
							<motion.div
								initial={{ x: -100, opacity: 0 }}
								animate={{ x: 10, opacity: 1 }}
								exit={{ x: -10, opacity: 0 }}
								transition={{ duration: 1 }}>
								<img src="/2022/03/circulo_grande.png" width="80px" />
							</motion.div>
						</AnimatePresence>
					</Box>
					<Box position="absolute" left={{ xs: '10%', md: '20%' }} bottom="0">
						<AnimatePresence exitBeforeEnter>
							<motion.div
								initial={{ x: -100, opacity: 0 }}
								animate={{ x: 10, opacity: 1 }}
								exit={{ x: -10, opacity: 0 }}
								transition={{ duration: 1 }}>
								<Box component="img" src="/2022/03/Grupo-13.png" width={{ xs: '87px', lg: '228px' }} />
							</motion.div>
						</AnimatePresence>
					</Box>
					<Box position="absolute" right={{ xs: '10%', md: '20%' }} bottom="5%">
						<AnimatePresence exitBeforeEnter>
							<motion.div
								initial={{ x: -100, opacity: 0 }}
								animate={{ x: 10, opacity: 1 }}
								exit={{ x: -10, opacity: 0 }}
								transition={{ duration: 1 }}>
								<img src="/2022/03/circulo_grande.png" width="100px" />
							</motion.div>
						</AnimatePresence>
					</Box>
					<Box position="absolute" right={{ xs: '10%', md: '20%' }} top="5%">
						<AnimatePresence exitBeforeEnter>
							<motion.div
								initial={{ x: -100, opacity: 0 }}
								animate={{ x: 10, opacity: 1 }}
								exit={{ x: -10, opacity: 0 }}
								transition={{ duration: 1 }}>
								<img src="/2022/03/Grupo-353-1.png" />
							</motion.div>
						</AnimatePresence>
					</Box>
				</Box>
			</Stack>

			{
				//Introduction
			}
			<ContainerSection step={2}>
				<Hidden mdDown>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationIntroduction} />
					</Box>
				</Hidden>

				<Box textAlign={{ xs: 'center', md: 'left' }} px={4} top={0} sx={{ alignSelf: 'center' }}>
					<Typography sx={stylesGeneral.seccion.titleSeccion}>{t('homepage.Introduction.title')}</Typography>
					<Content seccion="Introduction" numberWords={507}></Content>
					<Box sx={{ marginTop: '25px' }}>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '16.8px', fontFamily: 'Oswald', lineHeight: 1 }}>
							{t('homepage.seccionLink')}
						</Typography>
						<Box sx={stylesGeneral.seccion.containerRelatedLink}>
							<Typography paragraph sx={stylesGeneral.seccion.firstRelatedLink}>
								{t('homepage.Introduction.relatedLink.0')}
							</Typography>
							<Typography sx={stylesGeneral.seccion.secondRelatedLink}>{t('homepage.Introduction.relatedLink.1')}</Typography>
						</Box>
						<Box>
							<Typography paragraph sx={stylesGeneral.seccion.firstRelatedLink}>
								{t('homepage.Introduction.relatedLink.2')}
							</Typography>
						</Box>
						<Box>
							<Typography paragraph sx={stylesGeneral.seccion.secondRelatedLink}>
								{t('homepage.Introduction.relatedLink.3')}
							</Typography>
						</Box>
						<Box sx={stylesGeneral.seccion.containerInformation}>
							<Typography paragraph sx={stylesGeneral.seccion.information}>
								{t('homepage.information')}
							</Typography>
							<Box>
								<Button variant="dashed">
									Whitepaper
									<HiDownload style={{ paddingLeft: '5px' }} size={17} />
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>

				<Hidden mdUp>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationIntroduction} />
					</Box>
				</Hidden>
				<Box sx={stylesGeneral.seccion.nameSeccion}>
					<Typography paragraph sx={stylesGeneral.seccion.textNameSeccion}>
						{t('homepage.seccion.1')}
					</Typography>
				</Box>
			</ContainerSection>

			{
				//Technology
			}
			<ContainerSection step={3}>
				<Hidden mdDown>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationTechnology} />
					</Box>
				</Hidden>

				<Box textAlign={{ xs: 'center', md: 'left' }} px={4} top={0} sx={{ alignSelf: 'center' }}>
					<Typography variant="h3" sx={stylesGeneral.seccion.titleSeccion}>
						{t('homepage.Technology.title')}
					</Typography>
					<Content seccion="Technology" numberWords={460}></Content>
					<Box sx={{ marginTop: '25px' }}>
						<Typography paragraph sx={{ fontWeight: 'bold' }}>
							{t('homepage.seccionLink')}
						</Typography>
						<Box sx={stylesGeneral.seccion.containerRelatedLink}>
							<Typography paragraph sx={stylesGeneral.seccion.firstRelatedLink}>
								{t('homepage.Technology.relatedLink.0')}
							</Typography>
							<Typography sx={stylesGeneral.seccion.secondRelatedLink}>{t('homepage.Technology.relatedLink.1')}</Typography>
						</Box>
						<Box>
							<Typography paragraph sx={stylesGeneral.seccion.firstRelatedLink}>
								{t('homepage.Technology.relatedLink.2')}
							</Typography>
						</Box>
						<Box>
							<Typography paragraph sx={stylesGeneral.seccion.secondRelatedLink}>
								{t('homepage.Technology.relatedLink.3')}
							</Typography>
						</Box>
						<Box sx={stylesGeneral.seccion.containerInformation}>
							<Typography paragraph sx={stylesGeneral.seccion.information}>
								{t('homepage.information')}
							</Typography>
							<Box>
								<Button variant="dashed">
									Whitepaper
									<HiDownload style={{ paddingLeft: '5px' }} size={17} />
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
				<Hidden mdUp>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationTechnology} />
					</Box>
				</Hidden>
				<Box sx={stylesGeneral.seccion.nameSeccion}>
					<Typography paragraph sx={stylesGeneral.seccion.textNameSeccion}>
						{t('homepage.seccion.2')}
					</Typography>
				</Box>
			</ContainerSection>

			{
				//Ecosystem
			}
			<ContainerSection step={4}>
				<Hidden mdDown>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationEcosystem} />
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
								<Button variant="dashed">
									Whitepaper
									<HiDownload style={{ paddingLeft: '5px' }} size={17} />
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
				<Hidden mdUp>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationEcosystem} />
					</Box>
				</Hidden>
				<Box sx={stylesGeneral.seccion.nameSeccion}>
					<Typography paragraph sx={stylesGeneral.seccion.textNameSeccion}>
						{t('homepage.seccion.3')}
					</Typography>
				</Box>
			</ContainerSection>
			{
				//Economics
			}
			<ContainerSection step={5}>
				<Hidden mdDown>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationEconomics} />
					</Box>
				</Hidden>

				<Box textAlign={{ xs: 'center', md: 'left' }} px={4} top={0} sx={{ alignSelf: 'center' }}>
					<Typography variant="h3" sx={stylesGeneral.seccion.titleSeccion}>
						{t('homepage.Economics.title')}
					</Typography>
					<Stack sx={{ opacity: '0.7' }}>
						<Stack sx={stylesGeneral.seccion.containerEconomicsTags}>
							<GiNestedHexagons size={20} />
							<Typography paragraph sx={stylesGeneral.seccion.economicsTagsFirst}>
								{t('homepage.Economics.tags.0')}
							</Typography>
							<BsFileEarmarkText size={20} />
							<Typography paragraph sx={stylesGeneral.seccion.economicsTagsSecond}>
								{t('homepage.Economics.tags.1')}
							</Typography>
						</Stack>
						<Stack sx={stylesGeneral.seccion.containerEconomicsTags}>
							<BiVector size={20} />
							<Typography paragraph sx={stylesGeneral.seccion.economicsTagsFirst}>
								{t('homepage.Economics.tags.2')}
							</Typography>
							<FaArrowUp size={20} />
							<Typography paragraph sx={stylesGeneral.seccion.economicsTagsSecond}>
								{t('homepage.Economics.tags.3')}
							</Typography>
						</Stack>
						<Stack sx={stylesGeneral.seccion.containerEconomicsTags}>
							<BsFillTagFill size={20} />
							<Typography paragraph sx={stylesGeneral.seccion.economicsTagsFirst}>
								{t('homepage.Economics.tags.4')}
							</Typography>
							<BiShareAlt size={20} />
							<Typography paragraph sx={stylesGeneral.seccion.economicsTagsSecond}>
								{t('homepage.Economics.tags.5')}
							</Typography>
						</Stack>
					</Stack>
					<Content seccion="Economics" numberWords={332}></Content>
					<Box sx={{ marginTop: '25px' }}>
						<Box sx={stylesGeneral.seccion.containerInformation}>
							<Typography paragraph sx={stylesGeneral.seccion.information}>
								{t('homepage.information')}
							</Typography>
							<Box>
								<Button variant="dashed">
									Whitepaper
									<HiDownload style={{ paddingLeft: '5px' }} size={17} />
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
				<Hidden mdUp>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationEconomics} />
					</Box>
				</Hidden>
				<Box sx={stylesGeneral.seccion.nameSeccion}>
					<Typography paragraph sx={stylesGeneral.seccion.textNameSeccion}>
						{t('homepage.seccion.4')}
					</Typography>
				</Box>
			</ContainerSection>
			{
				//Connection
			}
			<ContainerSection step={6}>
				<Hidden mdDown>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationConnection} />
					</Box>
				</Hidden>

				<Box textAlign={{ xs: 'center', md: 'left' }} px={4} top={0} sx={{ alignSelf: 'center' }}>
					<Typography variant="h3" sx={stylesGeneral.seccion.titleSeccion}>
						{t('homepage.Connection.title')}
					</Typography>
					<Content seccion="Connection" numberWords={300}></Content>
					<Box sx={{ marginTop: '25px' }}>
						<Typography paragraph sx={{ fontWeight: 'bold' }}>
							{t('homepage.seccionLink')}
						</Typography>
						<Box sx={stylesGeneral.seccion.containerRelatedLink}>
							<Typography paragraph sx={stylesGeneral.seccion.firstRelatedLink}>
								{t('homepage.Connection.relatedLink.0')}
							</Typography>
							<Typography sx={stylesGeneral.seccion.secondRelatedLink}>{t('homepage.Connection.relatedLink.1')}</Typography>
						</Box>
						<Box>
							<Typography paragraph sx={stylesGeneral.seccion.firstRelatedLink}>
								{t('homepage.Connection.relatedLink.2')}
							</Typography>
						</Box>
						<Box>
							<Typography paragraph sx={stylesGeneral.seccion.secondRelatedLink}>
								{t('homepage.Connection.relatedLink.3')}
							</Typography>
						</Box>
						<Box sx={stylesGeneral.seccion.containerInformation}>
							<Typography paragraph sx={stylesGeneral.seccion.information}>
								{t('homepage.information')}
							</Typography>
							<Box>
								<Button variant="dashed">
									Whitepaper
									<HiDownload style={{ paddingLeft: '5px' }} size={17} />
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
				<Hidden mdUp>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationConnection} />
					</Box>
				</Hidden>
				<Box sx={stylesGeneral.seccion.nameSeccion}>
					<Typography paragraph sx={stylesGeneral.seccion.textNameSeccion}>
						{t('homepage.seccion.5')}
					</Typography>
				</Box>
			</ContainerSection>
			{
				//The future
			}
			<ContainerSection step={7}>
				<Hidden mdDown>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationFuture} />
					</Box>
				</Hidden>
				<Box textAlign={{ xs: 'center', md: 'left' }} px={4} top={0} sx={{ alignSelf: 'center' }}>
					<Typography variant="h3" sx={stylesGeneral.seccion.titleSeccion}>
						{t('homepage.TheFuture.title')}
					</Typography>
					<Box sx={{ fontSize: { xs: '10.5px', md: '13px', lg: '15px' } }}>
						<pre style={{ textAlign: small ? 'center' : 'left' }}>{t('homepage.TheFuture.description')}</pre>
					</Box>
					<Box sx={{ marginTop: '25px' }}>
						<Typography paragraph sx={{ fontWeight: 'bold' }}>
							{t('homepage.seccionLink')}
						</Typography>
						<Box sx={stylesGeneral.seccion.containerRelatedLink}>
							<Typography paragraph sx={stylesGeneral.seccion.firstRelatedLink}>
								{t('homepage.TheFuture.relatedLink.0')}
							</Typography>
							<Typography sx={stylesGeneral.seccion.secondRelatedLink}>{t('homepage.TheFuture.relatedLink.1')}</Typography>
						</Box>
						<Box>
							<Typography paragraph sx={stylesGeneral.seccion.firstRelatedLink}>
								{t('homepage.TheFuture.relatedLink.2')}
							</Typography>
						</Box>
						<Box>
							<Typography paragraph sx={stylesGeneral.seccion.secondRelatedLink}>
								{t('homepage.TheFuture.relatedLink.3')}
							</Typography>
						</Box>
						<Box sx={stylesGeneral.seccion.containerInformation}>
							<Typography paragraph sx={stylesGeneral.seccion.information}>
								{t('homepage.information')}
							</Typography>
							<Box>
								<Button variant="dashed">
									Whitepaper
									<HiDownload style={{ paddingLeft: '5px' }} size={17} />
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
				<Hidden mdUp>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationFuture} />
					</Box>
				</Hidden>
				<Box sx={stylesGeneral.seccion.nameSeccion}>
					<Typography paragraph sx={stylesGeneral.seccion.textNameSeccion}>
						{t('homepage.seccion.6')}
					</Typography>
				</Box>
			</ContainerSection>
			{
				//Team
			}
			<ContainerSection step={8}>
				<Hidden mdDown>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimationTeam}>
						<Lottie options={AnimationTeam} />
					</Box>
				</Hidden>
				<Box
					textAlign={{ xs: 'center', md: 'left', lg: 'left' }}
					px={4}
					top={0}
					sx={{
						alignSelf: 'center',
						flexWrap: 'wrap',
						display: 'flex',
						justifyContent: { xs: 'center', md: 'left', lg: 'left' },
					}}>
					<Typography variant="h3" sx={stylesGeneral.seccion.titleSeccion}>
						{t('homepage.Team.title')}
					</Typography>
					<Stack sx={stylesGeneral.seccion.containerMembers}>
						<Box sx={stylesGeneral.seccion.containerTeam}>
							<Box sx={stylesGeneral.seccion.containerImage}>
								<Image
									src="/2022/05/Austin-300x300.jpg"
									layout="responsive"
									width={medium ? 110 : small ? 90 : 130}
									height={medium ? 110 : small ? 90 : 130}
								/>
							</Box>
							<Typography paragraph sx={stylesGeneral.seccion.memberName}>
								{t('homepage.Team.members.0')}
							</Typography>
						</Box>
						<Box sx={stylesGeneral.seccion.containerTeam}>
							<Box sx={stylesGeneral.seccion.containerImage}>
								<Image
									src="/2022/05/Alejo-300x300.jpg"
									layout="responsive"
									width={medium ? 110 : small ? 90 : 130}
									height={medium ? 110 : small ? 90 : 130}
								/>
							</Box>
							<Typography paragraph sx={stylesGeneral.seccion.memberName}>
								{t('homepage.Team.members.1')}
							</Typography>
						</Box>
						<Box sx={stylesGeneral.seccion.containerTeam}>
							<Box sx={stylesGeneral.seccion.containerImage}>
								<Image
									src="/2022/05/Charlie-300x300.jpg"
									layout="responsive"
									width={medium ? 110 : small ? 90 : 130}
									height={medium ? 110 : small ? 90 : 130}
								/>
							</Box>
							<Typography paragraph sx={stylesGeneral.seccion.memberName}>
								{t('homepage.Team.members.2')}
							</Typography>
						</Box>
						<Box sx={stylesGeneral.seccion.containerTeam}>
							<Box sx={stylesGeneral.seccion.containerImage}>
								<Image
									src="/2022/05/Miguel-300x300.jpg"
									layout="responsive"
									width={medium ? 110 : small ? 90 : 130}
									height={medium ? 110 : small ? 90 : 130}
								/>
							</Box>
							<Typography paragraph sx={stylesGeneral.seccion.memberName}>
								{t('homepage.Team.members.3')}
							</Typography>
						</Box>
						<Box sx={stylesGeneral.seccion.containerTeam}>
							<Box sx={stylesGeneral.seccion.containerImage}>
								<Image
									src="/2022/05/Omar-300x300.jpg"
									layout="responsive"
									width={medium ? 110 : small ? 90 : 130}
									height={medium ? 110 : small ? 90 : 130}
								/>
							</Box>
							<Typography paragraph sx={stylesGeneral.seccion.memberName}>
								{t('homepage.Team.members.4')}
							</Typography>
						</Box>
						<Box sx={stylesGeneral.seccion.containerTeam}>
							<Box sx={stylesGeneral.seccion.containerImage}>
								<Image
									src="/2022/05/Daniel.jpg"
									layout="responsive"
									width={medium ? 110 : small ? 90 : 130}
									height={medium ? 110 : small ? 90 : 130}
								/>
							</Box>
							<Typography paragraph sx={stylesGeneral.seccion.memberName}>
								{t('homepage.Team.members.5')}
							</Typography>
						</Box>
						<Box sx={stylesGeneral.seccion.containerTeam}>
							<Box sx={stylesGeneral.seccion.containerImage}>
								<Image
									src="/2022/05/Elias.jpg"
									layout="responsive"
									width={medium ? 110 : small ? 90 : 130}
									height={medium ? 110 : small ? 90 : 130}
								/>
							</Box>
							<Typography paragraph sx={stylesGeneral.seccion.memberName}>
								{t('homepage.Team.members.6')}
							</Typography>
						</Box>
					</Stack>
					<Box sx={{ marginTop: '25px' }}>
						<Box sx={stylesGeneral.seccion.containerInformation}>
							<Typography paragraph sx={stylesGeneral.seccion.information}>
								{t('homepage.information')}
							</Typography>
							<Box>
								<Button variant="dashed">
									Whitepaper
									<HiDownload style={{ paddingLeft: '5px' }} size={17} />
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
				<Hidden mdUp>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimationTeam}>
						<Lottie options={AnimationTeam} />
					</Box>
				</Hidden>
				<Box sx={stylesGeneral.seccion.nameSeccion}>
					<Typography paragraph sx={stylesGeneral.seccion.textNameSeccion}>
						{t('homepage.seccion.7')}
					</Typography>
				</Box>
			</ContainerSection>
			{
				//LNDA
			}
			<ContainerSection step={9}>
				<Hidden mdDown>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationLnda} />
					</Box>
				</Hidden>

				<Box textAlign={{ xs: 'center', md: 'left' }} px={4} top={0} sx={{ alignSelf: 'center' }}>
					<Typography variant="h3" sx={stylesGeneral.seccion.titleSeccion}>
						{t('homepage.Experience.title')}
					</Typography>
					<Box sx={{ fontSize: { xs: '10px', md: '13px', lg: '15px' } }}>
						<pre style={{ textAlign: small ? 'center' : 'left' }}>{t('homepage.Experience.description')}</pre>
					</Box>
					<Box sx={{ marginTop: '25px' }}>
						<Typography paragraph fontSize={dwarf ? '8px' : ''} sx={{ fontWeight: 'bold' }}>
							{t('homepage.Experience.contract')}
						</Typography>
					</Box>

					<Box sx={stylesGeneral.seccion.containerInformation}>
						<Stack direction={{ xs: 'row', lg: 'row' }} alignItems="center" justifyContent="center" height="100%" gap="5px">
							<Paper sx={stylesGeneral.seccion.paper}>{t('homepage.shortInformation')}</Paper>
							<Paper sx={stylesGeneral.seccion.blackpaper}>swap LNDA</Paper>
						</Stack>
					</Box>
				</Box>
				<Hidden mdUp>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationLnda} />
					</Box>
				</Hidden>
				<Box sx={stylesGeneral.seccion.nameSeccion}>
					<Typography paragraph sx={stylesGeneral.seccion.textNameSeccion}>
						{t('homepage.seccion.8')}
					</Typography>
				</Box>
			</ContainerSection>

			{
				//Suscribe
			}
			<ContainerSection step={10}>
				<Box textAlign={'center'} px={4} top={0} sx={{ alignSelf: 'center' }}>
					<Typography fontSize={{ xs: '27px', md: '42px' }} fontWeight="500">
						{t('homepage.Suscribe.title')}
					</Typography>
					<Box>
						<Button variant="dashed">
							<FaTwitter size={20} />
							<Typography fontSize={20} sx={{ marginLeft: '10px' }}>
								Twitter
							</Typography>
						</Button>
					</Box>
				</Box>

				<Box sx={stylesGeneral.seccion.nameSeccion}>
					<Typography paragraph sx={stylesGeneral.seccion.textNameSeccion}>
						{t('homepage.seccion.9')}
					</Typography>
				</Box>
			</ContainerSection>
			<ContainerSection step={11}>
				<Box textAlign={'center'} px={4} top={0} sx={{ alignSelf: 'center', width: '100%' }}>
					<Typography fontSize={{ xs: '27px', md: '42px' }} fontWeight="500">
						{t('homepage.Count.title')}
					</Typography>
					<Box>
						<h1>count down</h1>
					</Box>
				</Box>

				<Box sx={stylesGeneral.seccion.nameSeccion}>
					<Typography paragraph sx={stylesGeneral.seccion.textNameSeccion}>
						{t('homepage.seccion.10')}
					</Typography>
				</Box>
			</ContainerSection>
			<Footer />
		</div>
	);
};

export default Home;
