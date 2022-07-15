export const useStyles = () => ({
	token: {
		container: {
			backgroundColor: '#272727',
			py: {
				xs: 30,
			},
		},
		overlay: { backdropFilter: 'blur(7px)' },
		card: {
			maxWidth: '900px',
			borderRadius: 10,
			border: '4px solid white',
			backgroundColor: '#000000A1',
			p: {
				xs: 10,
			},
			position: 'relative',
		},
		circle: { position: 'absolute', top: -50, right: 100 },
		group: { position: 'absolute', bottom: -40, left: -40 },
	},
});
