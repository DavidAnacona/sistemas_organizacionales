import { Stack, Typography, Box, Button, TextField } from '@mui/material';
import React from 'react';
import Header from 'shared/components/Header';
import Footer from 'shared/components/Footer';
import MediaIcons from 'shared/components/MediaIcons';
import Image from 'next/image';
import { useStyles } from 'styles/LNDA/styled';
import { useTranslation } from 'react-i18next';
import SEO from 'shared/components/SEO';

const ContactPage = () => {
	const stylesLDNA = useStyles();
	const { t } = useTranslation();

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
			<SEO title="Contact" />
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
							{t('contact.title')}
						</Typography>
						<Stack justifyContent="center" alignItems="center" spacing={2}>
							<TextField variant="outlined" size="small" placeholder={t('contact.fields.0')} sx={classes.input} />
							<TextField variant="outlined" size="small" placeholder={t('contact.fields.1')} type="email" sx={classes.input} />
							<TextField
								multiline
								rows={6}
								variant="outlined"
								size="small"
								placeholder={t('contact.fields.2')}
								sx={classes.input}
							/>
							<Button variant="dashed" sx={{ width: 'fit-content' }}>
								{t('contact.submit')}
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
