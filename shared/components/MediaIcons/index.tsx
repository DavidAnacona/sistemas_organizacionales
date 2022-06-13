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
		<Box sx={{ position: 'fixed', display: 'flex', flexDirection: 'column', right: 0, top: '90px' }}>
			<IconButton>
				<AiFillInstagram />
			</IconButton>
			<IconButton>
				<AiFillTwitterCircle />
			</IconButton>
			<IconButton>
				<AiFillFacebook />
			</IconButton>
			<IconButton>
				<AccessTimeFilledTwoTone />
			</IconButton>
			<IconButton>
				<AiFillYoutube />
			</IconButton>
			<IconButton>
				<AiFillLinkedin />
			</IconButton>
			<IconButton>
				<AiFillTwitterSquare />
			</IconButton>
			<IconButton>
				<AiFillRedditSquare />
			</IconButton>
			<IconButton>
				<AiFillDatabase />
			</IconButton>
			<IconButton>
				<AiFillWindows />
			</IconButton>
		</Box>
	);
};

export default MediaIcons;
