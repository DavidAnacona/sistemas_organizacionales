import { Box, IconButton } from '@mui/material';
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { FaFacebookF, FaLinkedinIn, FaTiktok, FaTwitch, FaRedditAlien, FaTelegramPlane } from 'react-icons/fa';
import { IoLogoDiscord } from 'react-icons/io5';

const MediaIcons = () => {
	return (
		<Box
			zIndex={7}
			sx={{ position: 'fixed', display: 'flex', flexDirection: 'column', right: 0, top: { xs: '130px', lg: '90px' } }}>
			<IconButton>
				<FiInstagram size={17} />
			</IconButton>
			<IconButton>
				<AiOutlineTwitter size={17} />
			</IconButton>
			<IconButton>
				<FaFacebookF size={17} />
			</IconButton>
			<IconButton>
				<FaTiktok size={17} />
			</IconButton>
			<IconButton>
				<AiFillYoutube size={17} />
			</IconButton>
			<IconButton>
				<FaLinkedinIn size={17} />
			</IconButton>
			<IconButton>
				<FaTwitch size={17} />
			</IconButton>
			<IconButton>
				<FaRedditAlien size={17} />
			</IconButton>
			<IconButton>
				<IoLogoDiscord size={17} />
			</IconButton>
			<IconButton>
				<FaTelegramPlane size={17} />
			</IconButton>
		</Box>
	);
};

export default MediaIcons;
