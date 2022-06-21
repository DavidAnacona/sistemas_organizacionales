import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Box, Stack, Typography, Paper, MenuItem, Select, FormControl, Hidden } from '@mui/material';
import { useStyles } from './styled';
import Link from 'next/link';
import Image from 'next/image';

interface IProps {
	bg?: string;
}

const Header: React.FC<IProps> = ({ bg }) => {
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
			<Box position="fixed" width="100%" bgcolor={bg} zIndex={6}>
				<Stack direction={['column', 'row']} justifyContent="space-between" sx={styles.container} alignItems="center">
					<Box ml={4}>
						<Link href="/">
							<Image width={160} height={60} src="/2022/03/logo_landian_letras_blanco.svg" />
						</Link>
					</Box>
					<Stack direction="row" spacing={[1, 3]} mb={[2, 0]} alignItems="center" sx={{ fontSize: '11px' }}>
						<Link href="/">
							<Typography>{t('navbar.options.0')}</Typography>
						</Link>
						<Link href="/LNDA">
							<Typography>{t('navbar.options.1')}</Typography>
						</Link>
						<Typography>{t('navbar.options.2')}</Typography>
						<Typography>{t('navbar.options.3')}</Typography>
						<Typography>{t('navbar.options.4')}</Typography>
						<Typography>{t('navbar.options.5')}</Typography>
						<Hidden smDown>
							<FormControl sx={styles.formcontrol} size="small">
								<Select onChange={handleLocaleChange} value={router.locale}>
									<MenuItem value="en-US">EN</MenuItem>
									<MenuItem value="es-ES">ES</MenuItem>
								</Select>
							</FormControl>
						</Hidden>
					</Stack>
					<Stack>
						<Hidden smUp>
							<FormControl sx={styles.formcontrol} size="small">
								<Select onChange={handleLocaleChange} value={router.locale}>
									<MenuItem value="en-US">EN</MenuItem>
									<MenuItem value="es-ES">ES</MenuItem>
								</Select>
							</FormControl>
						</Hidden>
					</Stack>
					<Stack alignItems="center" justifyContent="center" height="100%">
						<Paper sx={styles.paper}>1 Landian Token (LNDA) = $0.34</Paper>
					</Stack>
				</Stack>
			</Box>
		</header>
	);
};

export default Header;
