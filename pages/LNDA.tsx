import { Stack, Typography, Box, useMediaQuery, Grow, Slide } from '@mui/material';
import React, { ReactFragment } from 'react';
import Header from 'shared/components/Header';
import Footer from 'shared/components/Footer';
import MediaIcons from 'shared/components/MediaIcons';
import animationCoinData from 'public/2022/03/100583-coin.json';
import Lottie from 'react-lottie';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useStyles } from 'styles/LNDA/styled';
import { LNDA } from 'lang/en-US/pages/LNDA';
import SEO from 'shared/components/SEO';

const defaultOptionsGlobal = {
	loop: true,
	autoplay: true,
	renderer: 'svg',
};

const LNDAPage = () => {
	const animationCoin = {
		...defaultOptionsGlobal,
		animationData: animationCoinData,
	};

	const { t } = useTranslation();
	const matches = useMediaQuery('(max-width:930px)');
	const styles = useStyles();

	const RoadMapCard = ({ title = 'Q1', children }: { title?: string; children?: ReactFragment | React.ReactNode }) => {
		return (
			<Box minWidth={['100%', 280]} maxWidth={['100%', 280]} bgcolor="#636363" borderRadius={4} pr={1} py={6} position="relative">
				<Box sx={styles.story.cardRoadmap}>
					<Typography variant="h6">{title}</Typography>
				</Box>
				<Stack textAlign="center">{children}</Stack>
			</Box>
		);
	};

	return (
		<>
			<SEO title="LNDA" />
			<Header bg="black" />
			<MediaIcons />
			<Stack
				height="100vh"
				pt={[40, 0]}
				mb={[10, 0]}
				spacing={2}
				direction={['column', 'column', 'column', 'row']}
				px={[0, 5, 25]}
				alignItems="center"
				justifyContent="center">
				<Stack spacing={2} px={[4, 0]}>
					<Typography variant="h2" fontWeight="bold">
						{t('LNDA.introduction.title')}
					</Typography>
					<Typography paragraph>
						<pre>{t('LNDA.introduction.description')}</pre>
					</Typography>
				</Stack>
				<Stack>
					<Lottie options={animationCoin} height={matches ? 250 : 500} width={matches ? 250 : 500} />
				</Stack>
			</Stack>
			<Stack sx={styles.token.container}>
				<Stack height="100%" sx={styles.token.overlay} justifyContent="center" alignItems="center">
					<Box sx={styles.token.card}>
						<Box sx={styles.token.circle}>
							<Image src="/2022/03/circulo_pequeno.png" width={70} height={70} alt="small-circle" />
						</Box>
						<Box sx={styles.token.group}>
							<Image src="/2022/03/Grupo-13.png" width={110} height={110} alt="group-13" />
						</Box>
						<Typography variant="h4" fontWeight="bold" mb={2}>
							{t('LNDA.tokens.title')}
						</Typography>
						<Stack>
							<Typography>
								<pre>{t('LNDA.tokens.description')}</pre>
							</Typography>
						</Stack>
					</Box>
				</Stack>
			</Stack>
			<Stack sx={styles.circulation.container} justifyContent="center" alignItems="center" direction={['column-reverse', 'row']}>
				<Box>
					<Image src="/2022/03/mano_arriba.png" width={1500} height={487} alt="small-circle" />
				</Box>
				<Stack px={6} spacing={2}>
					<Typography variant="h3" fontWeight="bold">
						{t('LNDA.circulation.title')}
					</Typography>
					<Typography paragraph>
						<pre>{t('LNDA.circulation.description')}</pre>
					</Typography>
					<Link href="/">
						<Typography>{t('LNDA.circulation.link')}</Typography>
					</Link>
				</Stack>
				<Box>
					<Image src="/2022/03/mano_abajo.png" width={1500} height={487} alt="small-circle" />
				</Box>
			</Stack>
			<Stack sx={styles.story.container}>
				<Stack height="100%" sx={styles.story.overlay} justifyContent="center" alignItems="center">
					<Box sx={styles.story.card}>
						<Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1000 } : {})}>
							<Box sx={styles.story.circle}>
								<Image src="/2022/03/circulo_pequeno.png" width={70} height={70} alt="small-circle" />
							</Box>
						</Grow>
						<Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1000 } : {})}>
							<Box sx={styles.story.group}>
								<Image src="/2022/03/Grupo-13.png" width={150} height={150} alt="group-13" />
							</Box>
						</Grow>
						<Slide direction="up" in={true} mountOnEnter unmountOnExit>
							<Box sx={styles.story.visor}>
								<Image src="/2022/03/OCF-1.png" width={250} height={150} alt="OCF" />
							</Box>
						</Slide>
						<Typography variant="h4" fontWeight="bold" mb={6}>
							LNDA Token Roadmap
						</Typography>
						<Stack
							spacing={2}
							gap="20px"
							alignItems={['center', 'center', 'center', 'initial']}
							justifyContent="center"
							direction={['column', 'column', 'column', 'row']}>
							{Object.keys(LNDA.roadmap).map((i, key) => (
								<RoadMapCard
									key={key}
									title={i}
									children={
										<>
											{Object.keys(LNDA.roadmap[i]).map((j) => (
												<>
													<Typography fontWeight="bold">{t(`LNDA.roadmap.${i}.${j}.title`)}</Typography>
													<ul>
														{Object.keys(LNDA.roadmap[i][j].items).map((z) => (
															<li>{t(`LNDA.roadmap.${i}.${j}.items.${z}`)}</li>
														))}
													</ul>
												</>
											))}
										</>
									}
								/>
							))}
						</Stack>
					</Box>
				</Stack>
			</Stack>
			<Footer />
		</>
	);
};

export default LNDAPage;
