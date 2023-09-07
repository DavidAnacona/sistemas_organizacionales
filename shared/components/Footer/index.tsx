import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<Box width="100%" sx={{ background: 'black' }}>
			<Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" px={[2, 9]} py="30px">
				<Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" ml={{ xs: 0, md: 4 }} spacing={4}>
					<Image width={160} height={60} src="/2022/03/logo_landian_letras_blanco.svg" />
					<Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" spacing={2}>
						<Link href="/privacy-policy">
							<Typography>Privacy Policy</Typography>
						</Link>
						<Link href="/terms-and-conditions">
							<Typography>Terms and Conditions</Typography>
						</Link>
					</Stack>
				</Stack>
				<Typography mt={{ xs: 4, md: 0 }} mr={{ xs: 0, md: 6 }}>
					Copyright 2022
				</Typography>
			</Stack>
		</Box>
	);
};

export default Footer;
