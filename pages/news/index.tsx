import { Typography, Container, Paper, Stack, Divider, Button } from '@mui/material';
import { createClient } from 'contentful';
import Link from 'next/link';
import Footer from 'shared/components/Footer';
import Header from 'shared/components/Header';
import MediaIcons from 'shared/components/MediaIcons';

export async function getStaticProps() {
	const client = createClient({ space: 'gaplxiqoo24e', accessToken: 'MHhFPSCj0xiUYWSbBu0m-sI-49msyaJSnc_vWKTGLAE' });
	const res = await client.getEntries({ content_type: 'blogPost' });

	return {
		props: {
			news: res.items,
		},
	};
}

const NewsPage = ({ news }: any) => {
	return (
		<>
			<Header bg="black" />
			<MediaIcons />
			<Container sx={{ pt: { xs: 40, lg: 30 }, pb: 30, flex: 1 }}>
				<Typography fontWeight="bold" textAlign="center" variant="h4">
					News
				</Typography>
				<Stack display="flex" direction="row" flexWrap="wrap" mt={3} gap={5}>
					{news?.map((i: any, index: any) => (
						<Paper key={index} sx={{ background: 'white', color: 'black', width: '354px', height: 620 }}>
							<img src={i.fields.heroImage.fields.file.url} style={{ height: '254px', objectFit: 'cover', width: '100%' }} />
							<Stack p={4}>
								<Typography fontWeight="bold" variant="h6">
									{i?.fields?.title}
								</Typography>
								<Typography paragraph>{i?.fields?.description}</Typography>
								<Stack>
									<Link href={`/news/${i.fields.slug}`}>
										<Button sx={{ color: 'black' }}>Read more</Button>
									</Link>
								</Stack>
								<Divider sx={{ borderColor: '#adadad' }} />
								<Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ color: '#adadad' }} pt={1}>
									<Typography>{i?.fields?.publishDate}</Typography>
									<Typography>.</Typography>
									<Typography>No Comments</Typography>
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