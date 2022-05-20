import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const Finances = () => {
	return (
		<Box>
			<i>
				<img src={'logo.png'} alt='logo' />
			</i>
			<Typography
				sx={{
					fontWeight: 400,
					fontSize: { xs: '0.8rem', sm: '14px', md: '16px' },
					lineHeight: '165%',
					mt: 1,
					mb: 2,
					color: '#3C3C3C',
				}}
			>
				Finance helps companies manage payments easily.
			</Typography>
		</Box>
	);
};

const About = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: { xs: 'column', sm: 'column', md: 'flex' },
				width: '150px',
			}}
		>
			<Typography
				sx={{
					fontWeight: 700,
					fontSize: { xs: '14px', sm: '16px', md: '21px' },

					letterSpacing: '0.02em',
					color: '#1D2130',
					lineHeight: '20px',
					marginBottom: { xs: '16px', sm: '12px', md: '20px' },
				}}
			>
				About
			</Typography>
			<Typography
				sx={{
					fontSize: { xs: '12px', sm: '16px', md: '16px' },
					marginBottom: { xs: '8px', sm: '8px', md: '12px' },

					fontWeight: 400,
					color: '#3C3C3C',
					lineHeight: { xs: '16px', sm: '23.1px', md: '26.4px' },
				}}
			>
				Privacy Policy
			</Typography>
			<Typography
				sx={{
					fontSize: { xs: '12px', sm: '16px' },

					fontWeight: 400,
					color: '#3C3C3C',
					lineHeight: { sm: '23.1px', md: '26.4px' },
				}}
			>
				Terms of Service
			</Typography>
		</Box>
	);
};

const Support = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: { xs: 'column', sm: 'column', md: 'flex' },
			}}
		>
			<Typography
				sx={{
					fontSize: { xs: '14px', sm: '16px', md: '21px' },

					fontWeight: 700,
					letterSpacing: '0.02em',
					color: '#1D2130',
					lineHeight: '20px',
					marginBottom: { xs: '16px', sm: '12px', md: '20px' },
				}}
			>
				Support
			</Typography>
			<Typography
				sx={{
					fontSize: { xs: '12px', sm: '16px' },

					fontWeight: 400,
					color: '#3C3C3C',
					lineHeight: { sm: '23.1px', md: '26.4px' },
				}}
			>
				Help and support
			</Typography>
		</Box>
	);
};

const ContactUs = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: { xs: 'column', sm: 'column', md: 'flex' },
			}}
		>
			<Typography
				sx={{
					fontSize: { xs: '14px', sm: '16px', md: '21px' },

					fontWeight: 700,
					letterSpacing: '0.02em',
					color: '#1D2130',
					lineHeight: '20px',
					marginBottom: { xs: '16px', sm: '12px', md: '20px' },
				}}
			>
				Contact Us
			</Typography>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					gap: '0.5rem',
					marginBottom: { xs: '8px', sm: '8px', md: '12px' },
				}}
			>
				<Typography
					sx={{
						fontSize: { xs: '12px', sm: '16px' },

						fontWeight: 400,
						color: '#3C3C3C',
						lineHeight: { xs: '16px', sm: '23.1px', md: '26.4px' },
					}}
				>
					<Typography
						sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' } }}
						component={'i'}
					>
						<img src={'email.svg'} alt='email' />
					</Typography>
					<Typography
						sx={{ display: { xs: 'flex', sm: 'none', md: 'none' } }}
						component={'i'}
					>
						<img src={'emailmobile.svg'} alt='email' />
					</Typography>
				</Typography>
				<Typography
					sx={{
						fontSize: { xs: '12px', sm: '16px', md: '16px' },

						fontWeight: 400,
						color: '#3C3C3C',
						lineHeight: { xs: '16px', sm: '23.1px', md: '26.4px' },
					}}
				>
					opn@leadiingtech.com
				</Typography>
			</Box>

			<Box sx={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
				<Typography
					sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' } }}
					component={'i'}
				>
					<img src={'call.svg'} alt='email' />
				</Typography>
				<Typography
					sx={{ display: { xs: 'flex', sm: 'none', md: 'none' } }}
					component={'i'}
				>
					<img src={'callmobile.svg'} alt='email' />
				</Typography>
				<Typography
					sx={{
						fontSize: { xs: '12px', sm: '16px', md: '16px' },

						fontWeight: 400,
						color: '#3C3C3C',
						lineHeight: { xs: '16px', sm: '23.1px', md: '26.4px' },
					}}
				>
					+11-200-38-3535
				</Typography>
			</Box>
		</Box>
	);
};

const SocialIcon = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				gap: '1.5rem',
				fontSize: '0.75rem',
				fontWeight: 400,
				color: '#3C3C3C',
				lineHeight: '16px',
			}}
		>
			<i>
				<svg
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g clipPath='url(#clip0_196_103)'>
						<path
							d='M15.9958 16V15.9993H15.9998V10.1313C15.9998 7.26065 15.3818 5.04932 12.0258 5.04932C10.4125 5.04932 9.32985 5.93465 8.88785 6.77398H8.84118V5.31732H5.65918V15.9993H8.97251V10.71C8.97251 9.31732 9.23651 7.97065 10.9612 7.97065C12.6605 7.97065 12.6858 9.55998 12.6858 10.7993V16H15.9958Z'
							fill='#2752E7'
						/>
						<path
							d='M0.26416 5.31824H3.58149V16.0002H0.26416V5.31824Z'
							fill='#2752E7'
						/>
						<path
							d='M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0V0Z'
							fill='#2752E7'
						/>
					</g>
					<defs>
						<clipPath id='clip0_196_103'>
							<rect width='16' height='16' fill='white' />
						</clipPath>
					</defs>
				</svg>
			</i>
			<i>
				<svg
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g clipPath='url(#clip0_196_101)'>
						<path
							d='M0 7.40733C0 9.738 1.16267 11.8173 2.98067 13.1753V16L5.70467 14.5053C6.43133 14.706 7.20133 14.8153 7.99933 14.8153C12.4173 14.8153 15.9993 11.4993 15.9993 7.408C16 3.31667 12.418 0 8 0C3.582 0 0 3.316 0 7.40733H0ZM7.156 5.33267L9.24267 7.50533L13.1673 5.33267L8.794 9.974L6.75733 7.802L2.782 9.97467L7.156 5.33267Z'
							fill='#2752E7'
						/>
					</g>
					<defs>
						<clipPath id='clip0_196_101'>
							<rect width='16' height='16' fill='white' />
						</clipPath>
					</defs>
				</svg>
			</i>
			<i>
				<svg
					width='16'
					height='14'
					viewBox='0 0 16 14'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M14.356 3.742C15.0067 3.28 15.554 2.70333 16 2.03933V2.03867C15.4047 2.29933 14.7713 2.47267 14.11 2.55667C14.79 2.15067 15.3093 1.51267 15.5533 0.744C14.9193 1.122 14.2193 1.38867 13.4733 1.538C12.8713 0.896667 12.0133 0.5 11.0773 0.5C9.26133 0.5 7.79933 1.974 7.79933 3.78067C7.79933 4.04067 7.82133 4.29067 7.87533 4.52867C5.14867 4.39533 2.73533 3.08867 1.114 1.09733C0.831333 1.58867 0.664667 2.15067 0.664667 2.75533C0.664667 3.89133 1.24933 4.898 2.122 5.48133C1.59467 5.47133 1.078 5.318 0.64 5.07733V5.11333C0.64 6.70733 1.77667 8.03133 3.268 8.33667C3.00067 8.41 2.71 8.44467 2.408 8.44467C2.198 8.44467 1.986 8.43267 1.78733 8.38867C2.212 9.68733 3.41867 10.6427 4.852 10.674C3.736 11.5467 2.31867 12.0727 0.784667 12.0727C0.516 12.0727 0.258 12.0607 0 12.028C1.45333 12.9647 3.17467 13.5 5.032 13.5C10.8207 13.5 14.5933 8.67067 14.356 3.742Z'
						fill='#2752E7'
					/>
				</svg>
			</i>
		</Box>
	);
};

function Footer() {
	return (
		<Box>
			<Box
				sx={{
					display: { xs: 'flex', sm: 'none' },
					flexDirection: 'column',
				}}
			>
				<Finances />
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid item xs={6}>
						<About />
					</Grid>
					<Grid item xs={6}>
						<ContactUs />
					</Grid>
					<Grid item xs={6} sx={{ mt: 3 }}>
						<Support />
					</Grid>
					<Grid item xs={6} sx={{ mt: 5 }}>
						<SocialIcon />
					</Grid>
				</Grid>
			</Box>
			<Box
				sx={{
					display: { xs: 'none', sm: 'flex', md: 'none' },
					flexDirection: 'column',
				}}
			>
				<i>
					<img src={'logo.png'} alt='logo' />
				</i>
				<Grid container>
					<Grid item sm={6}>
						<Typography
							sx={{
								fontWeight: 400,
								fontSize: { sm: '14px', md: '16px' },
								lineHeight: '165%',
								mt: 1,
								mb: 2,
								color: '#3C3C3C',
							}}
						>
							Finance helps companies manage payments easily.
						</Typography>
					</Grid>
					<Grid item sm={6}>
						<Box display='flex' justifyContent={'center'}>
							<SocialIcon />
						</Box>
					</Grid>
				</Grid>
				<Grid container sx={{ mt: 3 }}>
					<Grid item sm={4}>
						<About />
					</Grid>

					<Grid item sm={4}>
						<Support />
					</Grid>

					<Grid item sm={4}>
						<ContactUs />
					</Grid>
				</Grid>
			</Box>

			<Box
				sx={{
					display: { xs: 'none', sm: 'none', md: 'flex' },
					justifyContent: 'space-between',
				}}
			>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'row',
						background: '#ffffff',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							width: '100%',
						}}
					>
						<i>
							<img src={'logo.png'} alt='logo' />
						</i>
						<Typography
							sx={{
								fontWeight: 400,
								fontSize: { xs: '14px', sm: '14px', md: '16px' },
								lineHeight: '165%',
								mt: 1,
								mb: 2,
								color: '#3C3C3C',
							}}
						>
							Finance helps companies manage payments easily.
						</Typography>

						<Box display='flex'>
							<SocialIcon />
						</Box>
					</Box>
					<Box
						sx={{
							flexBasis: '100%',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<About />

						<Support />

						<ContactUs />
					</Box>
				</Box>
			</Box>
			<Box>
				<Typography
					sx={{
						fontSize: { xs: '12px', sm: '12px', md: '16px' },
						fontWeight: 400,
						lineHeight: '16px',
						color: '#9B9B9B',
						margin: '40px 0',
						textAlign: 'center',
					}}
				>
					Copyright @ OPNCORP2022. All Rights Reserved.
				</Typography>
			</Box>
		</Box>
	);
}

export default Footer;
