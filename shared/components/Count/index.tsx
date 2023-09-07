import { Box, Stack } from '@mui/material';
import React from 'react';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => (
	<Stack sx={{ color: 'black', width: '100%', justifyContent: 'center', mt: 5 }}>
		<h1>You are good to go!!</h1>
	</Stack>
);

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
	if (completed) {
		// Render a complete state
		return <Completionist />;
	} else {
		// Render a countdown
		return (
			<Stack
				flexWrap="wrap"
				direction="row"
				spacing={[1, 3]}
				sx={{ color: 'black', width: '100%', justifyContent: 'center', mt: 5 }}>
				<Box
					sx={{
						backgroundColor: '#FFFFFFA8',
						width: { xs: 70, md: 130 },
						height: { xs: 64, md: 124 },
						borderRadius: ' 10px 10px 10px 10px',
					}}>
					<Box sx={{ fontSize: { xs: '2rem', md: '4rem' }, fontWeight: 500 }}>{days}</Box>
					<Box sx={{ fontSize: { xs: '0.5rem', md: '1rem' } }}>Days</Box>
				</Box>
				<Box
					sx={{
						backgroundColor: '#FFFFFFA8',
						width: { xs: 70, md: 130 },
						height: { xs: 64, md: 124 },
						borderRadius: ' 10px 10px 10px 10px',
					}}>
					<Box sx={{ fontSize: { xs: '2rem', md: '4rem' }, fontWeight: 500 }}>{hours}</Box>
					<Box sx={{ fontSize: { xs: '0.5rem', md: '1rem' } }}>Hours</Box>
				</Box>
				<Box
					sx={{
						backgroundColor: '#FFFFFFA8',
						width: { xs: 70, md: 130 },
						height: { xs: 64, md: 124 },
						borderRadius: ' 10px 10px 10px 10px',
					}}>
					<Box sx={{ fontSize: { xs: '2rem', md: '4rem' }, fontWeight: 500 }}>{minutes}</Box>
					<Box sx={{ fontSize: { xs: '0.5rem', md: '1rem' } }}>Minutes</Box>
				</Box>
				<Box
					sx={{
						backgroundColor: '#FFFFFFA8',
						width: { xs: 70, md: 130 },
						height: { xs: 64, md: 124 },
						borderRadius: ' 10px 10px 10px 10px',
					}}>
					<Box sx={{ fontSize: { xs: '2rem', md: '4rem' }, fontWeight: 500 }}>{seconds}</Box>
					<Box sx={{ fontSize: { xs: '0.5rem', md: '1rem' } }}>Seconds</Box>
				</Box>
			</Stack>
		);
	}
};

const Count = () => {
	const diffTime = new Date('Thu Sep 2 2022 00:00:00 GMT-0500').getTime() - new Date().getTime();
	console.log(diffTime);
	return <Countdown date={new Date().getTime() + diffTime} renderer={renderer} />;
};

export default Count;
