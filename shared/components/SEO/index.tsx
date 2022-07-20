import Head from 'next/head';
import React from 'react';

const SEO = ({ title }: { title: string }) => {
	return (
		<Head>
			<title>{title} - Landian</title>
			<meta property="og:type" content="website" />
			<meta property="og:title" content={`${title} - Landian`} />
			<meta
				property="og:description"
				content="WELCOME TO LANDIAN, THE FUTURE OF METAVERSE 1 . 2 Landian Introduction Landian exists so that people, businesses, organizations, and cultures can engage in the Metaverse unencumbered and without limitations.&nbsp;Moreover, it is where becoming anyone or anything is limited only by the imagination. One’s ability to evolve and thrive is determined by level of effort. […]"
			/>
			<meta name="twitter:data1" content="7 minutes" />
			<meta property="og:url" content="https://www.landian.io/" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="og:site_name" content="Landian" />
			<link rel="icon" href="/2022/01/logo_black.svg" sizes="32x32" />
		</Head>
	);
};

export default SEO;
