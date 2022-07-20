import { Typography, Container, Paper, Stack, Divider, Button, Box } from '@mui/material';
import { createClient } from 'contentful';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Footer from 'shared/components/Footer';
import Header from 'shared/components/Header';
import MediaIcons from 'shared/components/MediaIcons';
import SEO from 'shared/components/SEO';

export async function getStaticProps({ locale }: any) {
	const client = createClient({ space: 'gaplxiqoo24e', accessToken: 'MHhFPSCj0xiUYWSbBu0m-sI-49msyaJSnc_vWKTGLAE' });
	const res = await client.getEntries({ content_type: 'blogPost', locale });

	return {
		props: {
			news: res.items,
		},
	};
}

const NewsPage = ({ news }: any) => {
	const { t } = useTranslation();
	const router = useRouter();
	return (
		<>
			<SEO title="News" />
			<Header bg="black" />
			<MediaIcons />
			<Container sx={{ pt: 10, pb: 30, flex: 1 }}>
				<Typography fontFamily="PhatBoy Slim" fontWeight="bold" textAlign="center" variant="h4" mt={{ xs: 18, md: 8 }}>
					{t('navbar.options.2')}
				</Typography>
				<Stack display="flex" direction="row" flexWrap="wrap" justifyContent="center" mt={3} gap={5}>
					{news
						?.filter((i: any) => i.fields.tags?.map((i: any) => i.fields.name).includes('News'))
						?.map((i: any, index: any) => (
							<Paper key={index} sx={{ background: 'white', color: 'black', width: '354px', height: 620 }}>
								<img src={i.fields.heroImage.fields.file.url} style={{ height: '254px', objectFit: 'cover', width: '100%' }} />
								<Stack p={4}>
									<Box maxHeight="200px" minHeight="200px" overflow="hidden" mb={2}>
										<Typography fontWeight="bold" variant="h6">
											{i?.fields?.title}
										</Typography>
										<Typography paragraph maxHeight="100px" overflow="hidden">
											{i?.fields?.description}
										</Typography>
									</Box>
									<Stack>
										<Link href={`/news/${i.fields.slug}`}>
											<Button sx={{ color: 'black', width: 'fit-content' }}>
												{router.locale === 'en-US' ? 'Read more' : 'Leer más'}
											</Button>
										</Link>
									</Stack>
									<Divider sx={{ borderColor: '#adadad' }} />
									<Stack
										direction="row"
										justifyContent="space-between"
										alignItems="center"
										spacing={2}
										sx={{ color: '#adadad' }}
										pt={1}>
										<Typography fontSize="0.8rem">
											{new Date(i?.fields?.publishDate).toLocaleDateString(router.locale, {
												weekday: 'short',
												year: 'numeric',
												month: 'long',
												day: 'numeric',
											})}
										</Typography>
										<Typography fontSize="0.8rem"> {router.locale === 'en-US' ? 'No Comments' : 'Sin comentarios'}</Typography>
									</Stack>
								</Stack>
							</Paper>
						))}
				</Stack>
			</Container>
			<Footer />
		</>
	);
};

export default NewsPage;
