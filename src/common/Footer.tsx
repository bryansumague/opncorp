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
			}}
		>
			<Typography
				sx={{
					fontWeight: 700,
					fontSize: { xs: '14px', sm: '16px', md: '21px' },

					letterSpacing: '0.02em',
					color: '#1D2130',
					lineHeight: '20px',
					mb: 1,
				}}
			>
				About
			</Typography>
			<Typography
				sx={{
					fontSize: { xs: '12px', sm: '16px' },

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
					mb: 1,
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
					mb: 1,
				}}
			>
				Contact Us
			</Typography>

			<Box sx={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
				<Typography
					sx={{
						fontSize: { xs: '12px', sm: '16px' },

						fontWeight: 400,
						color: '#3C3C3C',
						lineHeight: { xs: '16px', sm: '23.1px', md: '26.4px' },
					}}
				>
					<i>
						<svg
							width='10'
							height='8'
							viewBox='0 0 10 8'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M6.53923 4.11864L9.33289 1.72397V6.31364L6.53923 4.11864ZM3.97606 4.56056L4.78272 5.25223C4.90772 5.35923 5.09172 5.35923 5.21672 5.25223L6.02339 4.56056L8.70239 6.6659H1.29639L3.97606 4.56056ZM4.99956 4.56036L1.23389 1.3327H8.76522L4.99956 4.56036ZM0.666181 1.72397L3.45985 4.11831L0.666181 6.31331V1.72397ZM9.99951 6.99935V0.999349C9.99951 0.812682 9.82651 0.666016 9.66618 0.666016H0.332845C0.164178 0.666016 -0.000488281 0.810682 -0.000488281 0.999349V6.99935C-0.000488281 7.17435 0.158512 7.33268 0.332845 7.33268H9.66618C9.85351 7.33268 9.99951 7.16702 9.99951 6.99935Z'
								fill='#2752E7'
							/>
						</svg>
					</i>
				</Typography>
				<Typography
					sx={{
						fontSize: { xs: '12px', sm: '16px' },

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
					sx={{
						fontSize: { xs: '12px', sm: '16px' },

						fontWeight: 400,
						color: '#3C3C3C',
						lineHeight: { xs: '16px', sm: '23.1px', md: '26.4px' },
					}}
				>
					<i>
						<svg
							width='10'
							height='10'
							viewBox='0 0 10 10'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M6 9.33327C5.44867 9.33327 5 8.8846 5 8.33327C5 7.78194 5.44867 7.33327 6 7.33327C6.55134 7.33327 7 7.78194 7 8.33327C7 8.8846 6.55134 9.33327 6 9.33327ZM1.66667 2.99994C2.218 2.99994 2.66667 3.44861 2.66667 3.99994C2.66667 4.55127 2.218 4.99994 1.66667 4.99994C1.11534 4.99994 0.666669 4.55127 0.666669 3.99994C0.666669 3.44861 1.11534 2.99994 1.66667 2.99994ZM6 6.66658C5.15967 6.66658 4.46933 7.29425 4.35633 8.10392L1.89567 5.64358C2.70567 5.53025 3.33333 4.84025 3.33333 3.99992C3.33333 3.08092 2.58567 2.33325 1.66667 2.33325C0.747667 2.33325 0 3.08092 0 3.99992C0 4.45692 0.185667 4.87125 0.484333 5.17259C0.486 5.17425 0.486667 5.17659 0.488333 5.17859L4.82167 9.51192C4.82367 9.51358 4.826 9.51392 4.82767 9.51592C5.12933 9.81458 5.54333 9.99992 6 9.99992C6.919 9.99992 7.66667 9.25225 7.66667 8.33325C7.66667 7.41425 6.919 6.66658 6 6.66658Z'
								fill='#2752E7'
							/>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M4.99984 -0.00012207C4.8155 -0.00012207 4.6665 0.149211 4.6665 0.333211C4.6665 0.517211 4.8155 0.666545 4.99984 0.666545C7.38917 0.666545 9.33317 2.61054 9.33317 4.99988C9.33317 5.18388 9.48217 5.33321 9.6665 5.33321C9.85084 5.33321 9.99984 5.18388 9.99984 4.99988C9.99984 2.24288 7.75684 -0.00012207 4.99984 -0.00012207Z'
								fill='#2752E7'
							/>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M4.99984 1.6665C4.8155 1.6665 4.6665 1.81584 4.6665 1.99984C4.6665 2.18384 4.8155 2.33317 4.99984 2.33317C6.47017 2.33317 7.6665 3.5295 7.6665 4.99984C7.6665 5.18384 7.8155 5.33317 7.99984 5.33317C8.18417 5.33317 8.33317 5.18384 8.33317 4.99984C8.33317 3.16184 6.83784 1.6665 4.99984 1.6665Z'
								fill='#2752E7'
							/>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M5.99984 4.99992C5.99984 5.18392 6.14884 5.33325 6.33317 5.33325C6.5175 5.33325 6.6665 5.18392 6.6665 4.99992C6.6665 4.08092 5.91884 3.33325 4.99984 3.33325C4.8155 3.33325 4.6665 3.48259 4.6665 3.66659C4.6665 3.85059 4.8155 3.99992 4.99984 3.99992C5.55117 3.99992 5.99984 4.44859 5.99984 4.99992Z'
								fill='#2752E7'
							/>
						</svg>
					</i>
				</Typography>
				<Typography
					sx={{
						fontSize: { xs: '12px', sm: '16px' },

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
					<g clip-path='url(#clip0_196_103)'>
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
					<g clip-path='url(#clip0_196_101)'>
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
		<>
			<Box sx={{ display: { xs: 'block', sm: 'none' } }}>
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
			<Box sx={{ display: { xs: 'none', sm: 'block', md: 'none' } }}>
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
					display: { xs: 'none', sm: 'none', md: 'block' },
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',

						gap: '15%',
					}}
				>
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<i>
							<img src={'logo.png'} alt='logo' />
						</i>
						<Typography
							sx={{
								fontWeight: 400,
								fontSize: '0.85rem',
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
					<Box sx={{ display: 'flex', flexDirection: 'row', gap: '9.375rem' }}>
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
						mt: 5,
						mb: 2,
						textAlign: 'center',
					}}
				>
					Copyright @ OPNCORP2022. All Rights Reserved.
				</Typography>
			</Box>
		</>
	);
}

export default Footer;
