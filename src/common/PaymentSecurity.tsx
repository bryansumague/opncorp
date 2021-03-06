import React from 'react';
import { Box, Typography } from '@mui/material';

function PaymentSecurity() {
	return (
		<Box sx={{ marginTop: '120px' }}>
			<Box
				sx={{
					display: { sm: 'block', md: 'flex' },
					flexDirection: { sm: 'none', md: 'row-reverse' },
					alignItems: 'center',
				}}
			>
				<Box>
					<Typography
						variant='h4'
						sx={{
							fontWeight: 600,
							fontSize: { xs: '12px', sm: '16px', md: '18px' },
							lineHeight: '16px',
							marginBottom: '24px',
						}}
						color='secondary'
						component='h1'
						gutterBottom
					>
						WHY CHOOSE US
					</Typography>

					<Typography
						variant={'h4'}
						sx={{
							fontWeight: 700,
							fontSize: { xs: '26px', sm: '40px', md: '48px' },

							lineHeight: '32px',
							letterSpacing: '-0.02em',

							marginBottom: { xs: '32px', sm: '32px', md: '40px ' },
						}}
						component={'h4'}
						color='secondary'
						gutterBottom
					>
						Payment security
					</Typography>
					<Typography
						sx={{
							fontWeight: 400,
							fontSize: { xs: '14px', sm: '16px', md: '18px' },
							maxWidth: '70ch',
							lineHeight: '165%',
						}}
					>
						We enable solution providers to establish a milestone payment
						system. This means that you as the customer always know what you are
						paying for and the money is only released to the solution provider
						when you approve the work.
					</Typography>
				</Box>
				{/* <Box>
					<i>
						<img
							src={'mbdesk.svg'}
							alt='transaction'
							style={{ maxWidth: '100%', width: '100%' }}
						/>
					</i>
				</Box> */}

				<Typography
					sx={{
						display: {
							xs: 'block',
							sm: 'none',
							md: 'none',
						},
					}}
					component={'i'}
				>
					<img
						src={'./homemobile/payment.png'}
						alt='transaction'
						style={{ maxWidth: '100%', width: '100%' }}
					/>
				</Typography>

				<Typography
					sx={{
						display: {
							xs: 'none',
							sm: 'none',
							md: 'flex',
						},
						justifyContent: 'center',
					}}
					component={'i'}
				>
					<img
						src={'./homepage/payment.png'}
						alt='transaction'
						style={{ maxWidth: '625px', width: '100%' }}
					/>
				</Typography>

				<Typography
					sx={{
						display: {
							xs: 'none',
							sm: 'flex',
							md: 'none',
							width: '100%',
							margin: '0 auto',
						},
						justifyContent: 'center',
					}}
					component={'i'}
				>
					<img
						src={'./homepage/payment.png'}
						alt='transaction'
						style={{ maxWidth: '525px', width: '100%' }}
					/>
				</Typography>
			</Box>
			<Box></Box>
		</Box>
	);
}

export default PaymentSecurity;
