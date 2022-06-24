import { Stack, Typography, Box, Button, TextField } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import Header from 'shared/components/Header';
import Footer from 'shared/components/Footer';
import MediaIcons from 'shared/components/MediaIcons';
import Image from 'next/image';
import { useStyles } from 'styles/LNDA/styled';

const ContactPage = () => {
	const stylesLDNA = useStyles();

	const classes = {
		input: {
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
		<>
			<Head>
				<title>Contact - Landian</title>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Contact - Landian" />
				<meta
					property="og:description"
					content="WELCOME TO LANDIAN, THE FUTURE OF METAVERSE 1 . 2 Landian Introduction Landian exists so that people, businesses, organizations, and cultures can engage in the Metaverse unencumbered and without limitations.&nbsp;Moreover, it is where becoming anyone or anything is limited only by the imagination. One’s ability to evolve and thrive is determined by level of effort. […]"
				/>
				<meta name="twitter:data1" content="7 minutes" />
				<meta property="og:url" content="https://www.landian.io/" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="og:site_name" content="Landian" />
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/2022/1/logo_black.svg" />
			</Head>
			<Header bg="black" />
			<MediaIcons />
			<Stack sx={stylesLDNA.token.container} height={{ xs: '100%', lg: '100vh' }}>
				<Stack height="100%" sx={stylesLDNA.token.overlay} justifyContent="center" alignItems="center">
					<Box sx={{ ...stylesLDNA.token.card, minWidth: { md: '500px' }, mt: { xs: 20 } }}>
						<Box sx={stylesLDNA.token.circle}>
							<Image src="/2022/03/circulo_pequeno.png" width={70} height={70} alt="small-circle" />
						</Box>
						<Box sx={stylesLDNA.token.group}>
							<Image src="/2022/03/Grupo-13.png" width={110} height={110} alt="group-13" />
						</Box>
						<Typography variant="h4" fontWeight="bold" mb={2}>
							Contacto
						</Typography>
						<Stack justifyContent="center" alignItems="center" spacing={2}>
							<TextField variant="outlined" size="small" placeholder="Nombre" sx={classes.input} />
							<TextField variant="outlined" size="small" placeholder="Correo" type="email" sx={classes.input} />
							<TextField multiline rows={6} variant="outlined" size="small" placeholder="Escribe un mensaje" sx={classes.input} />
							<Button variant="dashed" sx={{ width: 'fit-content' }}>
								Enviar
							</Button>
						</Stack>
					</Box>
				</Stack>
			</Stack>

			<Footer />
		</>
	);
};

export default ContactPage;
