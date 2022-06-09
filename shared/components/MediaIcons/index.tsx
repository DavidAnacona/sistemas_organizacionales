import { Box, IconButton } from '@mui/material';
import { AiFillInstagram } from 'react-icons/ai';

const MediaIcons = () => {
	return (
		<Box sx={{ position: 'fixed', display: 'flex', flexDirection: 'column', right: 0, top: '90px' }}>
			<IconButton>
				<AiFillInstagram />
			</IconButton>
			<IconButton>
				<AiFillInstagram />
			</IconButton>
			<IconButton>
				<AiFillInstagram />
			</IconButton>
			<IconButton>
				<AiFillInstagram />
			</IconButton>
			<IconButton>
				<AiFillInstagram />
			</IconButton>
			<IconButton>
				<AiFillInstagram />
			</IconButton>
		</Box>
	);
};

export default MediaIcons;
