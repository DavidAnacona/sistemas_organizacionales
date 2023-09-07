import Head from 'next/head';
import React from 'react';

const SEO = ({ title }: { title: string }) => {
	return (
		<Head>
			<title>{title} - Landian</title>
			<meta property="og:type" content="website" />
			<meta property="og:title" content={`${title} - Landian`} />
			
			<meta name="twitter:data1" content="7 minutes" />
			<meta property="og:url" content="https://www.landian.io/" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="og:site_name" content="Landian" />
			<link rel="icon" href="/2022/06/logo_empresa2.svg" sizes="32x32" />
		</Head>
	);
};

export default SEO;
