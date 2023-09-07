import { Box, Typography, useMediaQuery } from '@mui/material';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface IProps {
	children: React.ReactFragment | React.ReactNode;
	numberWords: number;
}

const ReadMore: FC<IProps> = ({ children, numberWords }) => {
	const matches = useMediaQuery('(max-width:899px)');
	const { t } = useTranslation();
	if (typeof children === 'string') {
		const text: string = children;
		const [isReadMore, setIsReadMore] = useState(true);
		const toggleReadMore = () => {
			setIsReadMore(!isReadMore);
		};
		return (
			<Typography sx={{ textAlign: { xs: 'center', md: 'left', lg: 'left' } }}>
				<pre
					style={{
						textAlign: matches ? 'center' : 'left',
						fontFamily: 'Montserrat',
						fontSize: '14px',
						fontWeight: 400,
						lineHeight: '1.5em',
					}}>
					{isReadMore ? text?.slice(0, numberWords) : text}
					<span style={{ display: 'block', cursor: 'pointer', fontWeight: 'bold' }} onClick={toggleReadMore}>
						{isReadMore ? t('homepage.toggleMore') : t('homepage.toggleLess')}
					</span>
				</pre>
			</Typography>
		);
	} else {
		return <p></p>;
	}
};

interface PropsContent {
	seccion: string;
	numberWords: number;
}
export const Content: FC<PropsContent> = ({ seccion, numberWords }) => {
	const { t } = useTranslation();
	return (
		<Box>
			<Typography sx={{ fontSize: '1rem', fontWeight: 400, lineHeight: '1.5em' }}>
				<ReadMore numberWords={numberWords}>{t(`homepage.${seccion}.description`)}</ReadMore>
			</Typography>
		</Box>
	);
};
