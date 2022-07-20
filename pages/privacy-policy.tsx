import { Stack, Typography, Box } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from 'shared/components/Header';
import MediaIcons from 'shared/components/MediaIcons';
import { useStyles } from 'styles/terms/styled';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Footer from 'shared/components/Footer';
import SEO from 'shared/components/SEO';

const PrivacyPolicy = () => {
	const styles = useStyles();
	const { t } = useTranslation();
	return (
		<>
			<SEO title="Privacy Policy" />
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
