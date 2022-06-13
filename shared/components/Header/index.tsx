import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Box, Stack, Typography, Paper, MenuItem, Select, FormControl } from '@mui/material';
import { useStyles } from './styled';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
	const { t } = useTranslation();
	const router = useRouter();

	const handleLocaleChange = (event: any) => {
		const value = event.target.value;

		router.push(router.route, router.asPath, {
			locale: value,
		});
	};
	const styles = useStyles();

	return (
		<header>
			<Box position="fixed" width="100%">
				<Stack direction="row" justifyContent="space-between" sx={styles.container} alignItems="center">
					<Box ml={4}>
						<Link href="/">
							<Image width={160} height={60} src="/2022/03/logo_landian_letras_blanco.svg" />
						</Link>
					</Box>
					<Stack direction="row" spacing={3} alignItems="center">
						<Typography>{t('navbar.options.0')}</Typography>
						<Typography>{t('navbar.options.1')}</Typography>
						<Typography>{t('navbar.options.2')}</Typography>
						<Typography>{t('navbar.options.3')}</Typography>
						<Typography>{t('navbar.options.4')}</Typography>
						<Typography>{t('navbar.options.5')}</Typography>
						<FormControl sx={styles.formcontrol} size="small">
							<Select onChange={handleLocaleChange} value={router.locale}>
								<MenuItem value="en-US">EN</MenuItem>
								<MenuItem value="es-ES">ES</MenuItem>
							</Select>
						</FormControl>
					</Stack>
					<Paper sx={styles.paper}>1 Landian Token (LNDA) = $0.34</Paper>
				</Stack>
			</Box>
		</header>
	);
};

export default Header;
