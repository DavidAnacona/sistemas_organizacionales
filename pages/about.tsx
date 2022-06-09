import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from 'shared/components/Header';
import Lottie from 'react-lottie';
import animationData from '../public/2022/03/101036-coff3.json';
import Box from '@mui/material/Box';
import Footer from 'shared/components/Footer';

const About = () => {
	const { t } = useTranslation('translation', {
		keyPrefix: 'homepage',
	});
	// ? animation
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		renderer: 'svg',
	};
	return (
		<div>
			<Header />
			<p>{t('title')}</p>
			{/* ? animation */}
			<Lottie options={defaultOptions} height={500} width={500} />
			<Footer />
		</div>
	);
};

export default About;
