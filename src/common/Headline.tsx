import {
	Box,
	Button,
	Grid,
	InputBase,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import React from 'react';
import VectorArt from './VectorArt';

const HeadingTablet = () => {
	return (
		<>
			<Typography
				variant='h4'
				sx={{
					display: { xs: 'none', sm: 'block' },
					fontWeight: 700,
					fontSize: { sm: '48px', md: '56px' },
					lineHeight: '120%',
					maxWidth: '17ch',
					color: '#1D2130',
					'&:first-line': {
						color: '#2752E7',
					},
					mt: { sm: 10 },
				}}
				color='secondary'
				component='h1'
				gutterBottom
			>
				Starting a business has never been easier
			</Typography>
		</>
	);
};

const Subtitle = () => {
	return (
		<>
			<Typography
				sx={{
					fontWeight: 400,
					fontSize: { xs: '14px', sm: '18px', md: '18px' },
					lineHeight: '165%',
					mb: 2,
				}}
			>
				Search for corporate services to help you start, manage and run your
				businesses.
			</Typography>
		</>
	);
};

const HeadingMobile = () => {
	return (
		<Box>
			<Typography
				sx={{
					width: '327px',

					display: { xs: 'block', sm: 'none', md: 'none' },
					fontWeight: 700,
					fontSize: '36px',
					lineHeight: '43px',
					letterSpacing: '-0.02em',
					color: '#1D2130',
					'&:first-line': {
						color: '#2752E7',
					},
				}}
				color='secondary'
				component='h1'
				gutterBottom
			>
				Starting a business has never been easier
			</Typography>
		</Box>
	);
};

const InputFields = () => {
	return (
		<Grid container sx={{ position: 'relative' }}>
			<TextField
				inputProps={{ style: { padding: '15px 0px 15px 24px' } }}
				fullWidth
				sx={{
					color: '#000000',
				}}
				variant='outlined'
				placeholder='What service are you looking for? '
			/>
			<Box>
				<Button
					variant='contained'
					color='secondary'
					sx={{
						position: 'absolute',
						right: 0,
						bottom: 3,
						top: 0,
						textTransform: 'capitalize',
						minheight: '56px',
					}}
				>
					<span style={{ marginTop: '10px' }}>
						<i>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4ZM2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11Z'
									fill='white'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M15.9428 15.9429C16.3333 15.5524 16.9665 15.5524 17.357 15.9429L21.707 20.2929C22.0975 20.6834 22.0975 21.3166 21.707 21.7071C21.3165 22.0977 20.6833 22.0977 20.2928 21.7071L15.9428 17.3571C15.5523 16.9666 15.5523 16.3334 15.9428 15.9429Z'
									fill='white'
								/>
							</svg>
						</i>
					</span>
					&nbsp;{' '}
					<Typography
						sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}
					>
						Search
					</Typography>
				</Button>
			</Box>
		</Grid>
	);
};

function Headline() {
	return (
		<Box>
			<Box
				sx={{
					my: 4,
					display: {
						xs: 'block',
						sm: 'block',
						md: 'none',
					},
				}}
			>
				<Box sx={{ display: { xs: 'block', sm: 'none' } }}>
					<HeadingMobile />
				</Box>
				<HeadingTablet />
				<Subtitle />

				<Grid container sx={{ position: 'relative' }}>
					<InputFields />
				</Grid>

				<VectorArt />
			</Box>
			<Box
				sx={{
					display: { xs: 'none', sm: 'none', md: 'block' },
					background:
						'linear-gradient(180deg, #FFFFFF 14.32%, rgba(227, 248, 255, 0.15) 27.6%, #FFFFFF 75.52%, #FFFFFF 100%)',
				}}
			>
				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='center'
					spacing={2}
				>
					<Box>
						<HeadingTablet />
						<Subtitle />
						<InputFields />
					</Box>

					<Box>
						<i>
							<img
								style={{ maxWidth: '100%', width: '100%', marginLeft: '50px' }}
								src={'vector.svg'}
								alt='Vector'
							/>
						</i>
					</Box>
				</Stack>
			</Box>
		</Box>
	);
}

export default Headline;
