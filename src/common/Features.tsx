import React from 'react';
import { Box, Button, Typography } from '@mui/material';

function FeaturesBox() {
	return (
		<Box>
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
							OUR FEATURE
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
			<Box
				sx={{
					textAlign: 'center',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',

					position: 'relative',
					zIndex: '0',
				}}
			>
				<Box
					sx={{
						position: 'absolute',

						width: 'auto',
						height: 'auto',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						padding: {
							xs: '31px 0 0 0 ',
							sm: '55px 0 0 0',
							md: '62px 0',
						},
						color: '#ffffff',
					}}
				>
					<Typography
						sx={{
							fontWeight: 700,
							fontSize: { xs: '24px', sm: '40px' },
							lineHeight: '125%',
						}}
					>
						For Corporate Solution{' '}
					</Typography>
					<Typography
						sx={{
							fontWeight: 400,
							fontSize: { xs: '12px', sm: '18px' },
							lineHeight: '125%',
							marginTop: { xs: '8px', sm: '24px', md: '24px' },
						}}
					>
						Interested to be a part of the platform?
					</Typography>
					<Button
						variant='contained'
						color='primary'
						sx={{
							width: '139px',
							height: '48px',
							color: '#1D2130',
							marginTop: { xs: '32px', sm: '56px', md: '32px' },
							textTransform: 'capitalize',
							boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.07)',
							borderRadius: '4px',
							padding: '12px 24px',
						}}
					>
						Contact Us
					</Button>
				</Box>
				<Typography
					sx={{
						position: 'relative',
						zIndex: -1,
						display: { xs: 'none', sm: 'none', md: 'block' },
					}}
					component={'i'}
				>
					<img src={'adsdesk.svg'} alt='ads' />
				</Typography>

				<Typography
					sx={{
						position: 'relative',
						zIndex: -1,
						display: { xs: 'none', sm: 'block', md: 'none' },
					}}
					component={'i'}
				>
					<img src={'ads.svg'} alt='ads' style={{ width: '100%' }} />
				</Typography>

				<Typography
					sx={{
						position: 'relative',
						zIndex: -1,
						display: { xs: 'block', sm: 'none', md: 'none' },
					}}
					component={'i'}
				>
					<img
						src={'adsmb.svg'}
						alt='ads'
						style={{ width: '100%', maxWidth: '100%' }}
					/>
				</Typography>
			</Box>
			<br /> <br />
		</Box>
	);
}

export default FeaturesBox;
