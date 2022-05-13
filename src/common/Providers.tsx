import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

function ProviderServices() {
	return (
		<Box
			sx={{
				background:
					'linear-gradient(180deg, #FFFFFF 14.32%, rgba(227, 248, 255, 0.15) 27.6%, #FFFFFF 75.52%, #FFFFFF 100%)',
			}}
		>
			<Box
				sx={{
					display: { sm: 'block', md: 'flex' },
					flexDirection: { sm: 'none', md: 'row' },
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Box
					sx={{
						display: { sm: 'block', md: 'flex' },
						flexDirection: { sm: 'none', md: 'column' },
						width: { xs: '100%', sm: '100%', md: '50%' },
					}}
				>
					<Box>
						<Typography
							variant='h4'
							sx={{
								fontWeight: 600,
								lineHeight: '16px',
								fontSize: { xs: '12px', sm: '16px', md: '18px' },
							}}
							color='secondary'
							component='h1'
							gutterBottom
						>
							WHY CHOOSE US
						</Typography>
					</Box>
					<br />
					<Typography
						sx={{
							fontWeight: 700,
							fontSize: { xs: '26px', sm: '40px', md: '48px' },
							lineHeight: '125%',
							letterSpacing: { xs: '-0.02em', sm: 'none', md: 'none' },
						}}
						color='secondary'
					>
						Quality Service Providers
					</Typography>

					<br />

					<Box>
						<>
							<Box display={'flex'} flexDirection={'row'}>
								<i>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<circle cx='12' cy='12' r='9' fill='#2752E7' />
										<path
											d='M9 12L11.1 14.25L15 9.75'
											stroke='white'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</i>

								<Typography
									sx={{
										fontWeight: 700,
										fontSize: { xs: '14px', sm: '16px', md: '18px' },

										letterSpacing: '0.02em',
										color: '#1D2130',
										pl: 1,
									}}
								>
									Verified Vendors
								</Typography>
							</Box>

							<Typography
								sx={{
									fontWeight: 400,
									fontSize: { xs: '14px', sm: '16px', md: '18px' },

									lineHeight: '165%',
									mb: 2,
									pl: 4,
									color: '#3C3C3C',
								}}
							>
								Only ACRA registered entities can sell their services
							</Typography>
						</>
					</Box>

					<Box>
						<>
							<Box display={'flex'} flexDirection={'row'}>
								<i>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<circle cx='12' cy='12' r='9' fill='#2752E7' />
										<path
											d='M9 12L11.1 14.25L15 9.75'
											stroke='white'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</i>
								<Typography
									sx={{
										fontWeight: 700,
										fontSize: { xs: '14px', sm: '16px', md: '18px' },

										letterSpacing: '0.02em',
										color: '#1D2130',
										pl: 1,
									}}
								>
									Vendor Mangement
								</Typography>
							</Box>

							<Typography
								sx={{
									fontWeight: 400,
									fontSize: { xs: '14px', sm: '16px', md: '18px' },

									lineHeight: '165%',
									mb: 2,
									pl: 4,
									color: '#3C3C3C',
								}}
							>
								Overview of all your past and existing contracts in one place
							</Typography>
						</>
					</Box>
				</Box>
				<br />
				<Box
					sx={{
						width: { xs: '100%', sm: '100%', md: '50%' },
					}}
				>
					<i>
						<img
							src={'mb2.svg'}
							alt='transaction'
							style={{ maxWidth: '100%', width: '100%' }}
						/>
					</i>
				</Box>
			</Box>
		</Box>
	);
}

export default ProviderServices;
