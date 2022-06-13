import { AccessTimeFilledTwoTone } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import {
	AiFillDatabase,
	AiFillFacebook,
	AiFillInstagram,
	AiFillLinkedin,
	AiFillRedditSquare,
	AiFillTwitterCircle,
	AiFillTwitterSquare,
	AiFillWindows,
	AiFillYoutube,
} from 'react-icons/ai';

const MediaIcons = () => {
	return (
		<Box
			zIndex={7}
			sx={{ position: 'fixed', display: 'flex', flexDirection: 'column', right: 0, top: { xs: '130px', lg: '90px' } }}>
			<IconButton>
				<AiFillInstagram size={20} />
			</IconButton>
			<IconButton>
				<AiFillTwitterCircle size={20} />
			</IconButton>
			<IconButton>
				<AiFillFacebook size={20} />
			</IconButton>
			<IconButton>
				<AccessTimeFilledTwoTone fontSize="small" />
			</IconButton>
			<IconButton>
				<AiFillYoutube size={20} />
			</IconButton>
			<IconButton>
				<AiFillLinkedin size={20} />
			</IconButton>
			<IconButton>
				<AiFillTwitterSquare size={20} />
			</IconButton>
			<IconButton>
				<AiFillRedditSquare size={20} />
			</IconButton>
			<IconButton>
				<AiFillDatabase size={20} />
			</IconButton>
			<IconButton>
				<AiFillWindows size={20} />
			</IconButton>
		</Box>
	);
};

export default MediaIcons;
