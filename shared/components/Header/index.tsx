import React from 'react';
import { useRouter } from 'next/router';
import { Box, Stack, Typography, Paper, MenuItem, Select, FormControl } from '@mui/material';
import { useStyles } from './styled';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
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
						<Typography>Home</Typography>
						<Typography>LNDA</Typography>
						<Typography>News</Typography>
						<Typography>Whitepaper</Typography>
						<Typography>Media</Typography>
						<Typography>Contact</Typography>
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
