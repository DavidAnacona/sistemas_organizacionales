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
			<a href="https://www.instagram.com/landianmeta/" target="_blank">
				<IconButton>
					<FiInstagram size={17} />
				</IconButton>
			</a>
			<a href="https://twitter.com/landianmeta" target="_blank">
				<IconButton>
					<AiOutlineTwitter size={17} />
				</IconButton>
			</a>
			<a href="https://www.facebook.com/landianmeta" target="_blank">
				<IconButton>
					<FaFacebookF size={17} />
				</IconButton>
			</a>
			<a href="https://www.tiktok.com/@landianmeta" target="_blank">
				<IconButton>
					<FaTiktok size={17} />
				</IconButton>
			</a>
			<a href="https://www.youtube.com/c/landian" target="_blank">
				<IconButton>
					<AiFillYoutube size={17} />
				</IconButton>
			</a>
			<a href="https://www.linkedin.com/company/landian/?original_referer=https%3A%2F%2Fwww.landian.io%2F" target="_blank">
				<IconButton>
					<FaLinkedinIn size={17} />
				</IconButton>
			</a>
			<a href="https://www.twitch.tv/landianmeta" target="_blank">
				<IconButton>
					<FaTwitch size={17} />
				</IconButton>
			</a>
			<a href="https://www.reddit.com/user/landianmeta" target="_blank">
				<IconButton>
					<FaRedditAlien size={17} />
				</IconButton>
			</a>
			<a href="https://discord.com/invite/TjWCurwyv6" target="_blank">
				<IconButton>
					<IoLogoDiscord size={17} />
				</IconButton>
			</a>
			<a href="https://t.me/landianportal" target="_blank">
				<IconButton>
					<FaTelegramPlane size={17} />
				</IconButton>
			</a>
		</Box>
	);
};

export default MediaIcons;
