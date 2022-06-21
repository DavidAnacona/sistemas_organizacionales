import { Box, Typography, useMediaQuery } from '@mui/material';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface IProps {
	children: React.ReactFragment | React.ReactNode;
	numberWords: number;
}

const ReadMore: FC<IProps> = ({ children, numberWords }) => {
	const { t } = useTranslation();
	const Mobil = useMediaQuery('(max-width:1000px)');
	if (typeof children === 'string') {
		const text: string = children;
		const [isReadMore, setIsReadMore] = useState(true);
		const toggleReadMore = () => {
			setIsReadMore(!isReadMore);
		};
		return (
			<Typography fontSize={[11, 13, 16]}>
				<pre>
					{isReadMore ? text?.slice(0, numberWords) : text}
					<span style={{ display: 'block', cursor: 'pointer' }} onClick={toggleReadMore}>
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
			<Typography variant="body1">
				<ReadMore numberWords={numberWords}>{t(`homepage.${seccion}.description`)}</ReadMore>
			</Typography>
		</Box>
	);
};
