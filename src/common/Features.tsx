import React from 'react';
import { Box, Typography } from '@mui/material';

function FeaturesBox() {
	return (
		<Box
			sx={{
				background:
					'linear-gradient(180deg, #FFFFFF 11.46%, rgba(255, 250, 239, 0.49) 25.66%, rgba(227, 248, 255, 0.51) 41.61%, #FFFFFF 73.86%, #FFFFFF 92.23%)',
			}}
		>
			<Box
				sx={{
					display: { sm: 'block', md: 'flex' },
					flexDirection: { sm: 'none', md: 'row-reverse' },
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Box sx={{ width: { xs: '100%', sm: '100%', md: '50%' } }}>
					<Box>
						<Typography
							sx={{
								fontWeight: 600,
								fontSize: { xs: '12px', sm: '16px', md: '18px' },
								lineHeight: '16px',
							}}
							color='secondary'
							gutterBottom
						>
							Our Features
						</Typography>
					</Box>
					<Typography
						sx={{
							fontWeight: 700,
							fontSize: { xs: '26px', sm: '40px', md: '48px' },
							lineHeight: '125%',
							letterSpacing: { xs: '-0.02em', sm: 'none', md: 'none' },
						}}
						color='secondary'
						component={'h2'}
					>
						Basic customer relationship management and invoicing system
					</Typography>
					<Typography
						sx={{
							fontWeight: 400,
							fontSize: { xs: '14px', sm: '16px', md: '18px' },
							maxWidth: '50ch',
							lineHeight: '165%',
							mt: 2,
							mb: 5,
						}}
					>
						For new entrepreneurs, we provide basic customer relationship
						management flow and invoicing assistance to kickstart your business
					</Typography>
				</Box>
				<Box sx={{ width: { xs: '100%', sm: '100%', md: '50%' } }}>
					<i>
						<img
							src={'mb3.svg'}
							alt='transaction'
							style={{ maxWidth: '100%', width: '100%' }}
						/>
					</i>
				</Box>
			</Box>
			<br /> <br /> <br /> <br />
			<Box sx={{ textAlign: 'center', display: { sm: 'flex', md: 'none' } }}>
				<i>
					<img
						src={'ads.svg'}
						alt='ads'
						style={{ maxWidth: '100%', width: '100%' }}
					/>
				</i>
			</Box>
			<Box
				sx={{
					textAlign: 'center',
					display: { xs: 'none', sm: 'none', md: 'flex' },
					justifyContent: 'center',
				}}
			>
				<i>
					<img
						src={'adsdesk.svg'}
						alt='ads'
						style={{ maxWidth: '100%', width: '100%' }}
					/>
				</i>
			</Box>
			<br /> <br />
		</Box>
	);
}

export default FeaturesBox;
