import { blue, red } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		dashed: true;
	}
}

const lightThemeOptions: ThemeOptions = {
	palette: {
		mode: 'dark',
	},
	components: {
		MuiTypography: {
			styleOverrides: {
				root: {
					fontFamily: "'Montserrat', sans-serif",
				},
			},
		},
		MuiButton: {
			variants: [
				{
					props: { variant: 'dashed' },
					style: {
						fontWeight: 400,
						lineHeight: '1.3em',
						textTransform: 'none',
						border: `1px solid #767f8b`,
						boxShadow: '0 0 20px 0 rgb(255 255 255 / 50%)',
						background: 'white',
						padding: '5px 25px',
						color: 'black',
						borderRadius: '10px 0px 10px 0px',
						'&:hover': {
							background: 'white',
							color: 'black',
							opacity: 0.8,
						},
					},
				},
				{
					props: { variant: 'dashed', color: 'secondary' },
					style: {
						border: `4px dashed ${red[500]}`,
					},
				},
			],
		},
	},
};

export default lightThemeOptions;
