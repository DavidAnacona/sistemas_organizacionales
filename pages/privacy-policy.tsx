import { Stack, Typography, Box } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from 'shared/components/Header';
import MediaIcons from 'shared/components/MediaIcons';
import { useStyles } from 'styles/terms/styled';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Footer from 'shared/components/Footer';

const PrivacyPolicy = () => {
	const styles = useStyles();
	const { t } = useTranslation();
	return (
		<>
			<Head>
				{/* TODO componentizar los head */}
				<title>Privacy Policy - Landian</title>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Privacy Policy - Landian" />
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
			<Header bg="black" />
			<MediaIcons />
			<Stack sx={styles.token.container}>
				<Stack height="100%" sx={styles.token.overlay} justifyContent="center" alignItems="center">
					<Box sx={styles.token.card}>
						<Box sx={styles.token.circle}>
							<Image src="/2022/03/circulo_pequeno.png" width={70} height={70} alt="small-circle" />
						</Box>
						<Box sx={styles.token.group}>
							<Image src="/2022/03/Grupo-13.png" width={110} height={110} alt="group-13" />
						</Box>
						<Stack>
							<ReactMarkdown>{t('Privacy.content')}</ReactMarkdown>
						</Stack>
					</Box>
				</Stack>
			</Stack>
			<Footer />
		</>
	);
};

export default PrivacyPolicy;
