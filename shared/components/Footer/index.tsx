import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const Footer = () => {
	return (
		<Box width="100%" sx={{ background: 'black' }}>
			<Stack direction="row" justifyContent="space-between" alignItems="center" px={[2, 40]} py="30px">
				<Box ml={4}>
					<Image width={160} height={60} src="/2022/03/logo_landian_letras_blanco.svg" />
				</Box>
				<Typography mr={6}>Copyright 2022</Typography>
			</Stack>
		</Box>
	);
};

export default Footer;
