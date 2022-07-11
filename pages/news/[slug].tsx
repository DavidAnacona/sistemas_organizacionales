import { Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { createClient } from 'contentful';
import React from 'react';
import Footer from 'shared/components/Footer';
import Header from 'shared/components/Header';
import MediaIcons from 'shared/components/MediaIcons';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({ space: 'gaplxiqoo24e', accessToken: 'MHhFPSCj0xiUYWSbBu0m-sI-49msyaJSnc_vWKTGLAE' });

export async function getStaticPaths() {
	const res = await client.getEntries({ content_type: 'blogPost' });

	const paths = res.items.map((item: any) => {
		return { params: { slug: item?.fields?.slug } };
	});
	return {
		paths,
		fallback: true,
	};
}
export async function getStaticProps({ params }: any) {
	const { items } = await client.getEntries({ content_type: 'blogPost', 'fields.slug': params.slug });
	return { props: { news: items[0], params } };
}

const DetailNews = ({ news, params }: any) => {
	return (
		<>
			<Header bg="black" />
			<MediaIcons />

			<Container sx={{ pt: { xs: 40, lg: 30 }, pb: 30, flex: 1 }}>
				<Stack spacing={2}>
					<img
						src={news?.fields?.heroImage?.fields?.file?.url}
						width="100%"
						height="400px"
						style={{ objectFit: 'cover' }}
						alt="blog-image"
					/>
					<Typography variant="h4" textAlign="center">
						{news?.fields?.title}
					</Typography>
					<Stack mt={4}>{documentToReactComponents(news?.fields?.content)}</Stack>
				</Stack>
			</Container>
			<Footer />
		</>
	);
};

export default DetailNews;
