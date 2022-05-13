import React from 'react';
import { Box, Typography } from '@mui/material';

function PaymentSecurity() {
	return (
		<>
			<Box
				sx={{
					display: { sm: 'block', md: 'flex' },
					flexDirection: { sm: 'none', md: 'row-reverse' },
					alignItems: 'center',
				}}
			>
				<Box>
					<Box>
						<Typography
							variant='h4'
							sx={{
								fontWeight: 600,
								fontSize: { xs: '12px', sm: '16px', md: '18px' },
								lineHeight: '16px',
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
						variant={'h4'}
						sx={{
							fontWeight: 700,
							fontSize: { sm: '24px', md: '48px' },

							lineHeight: '32px',
							letterSpacing: '-0.02em',
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
							lineHeight: '165%',
							mb: 2,
						}}
					>
						We enable solution providers to establish a milestone payment
						system. This means that you as the customer always know what you are
						paying for and the money is only released to the solution provider
						when you approve the work.
					</Typography>
				</Box>

				<Box>
					<i>
						<img
							src={'mb.svg'}
							alt='transaction'
							style={{ maxWidth: '100%', width: '100%' }}
						/>
					</i>
				</Box>
			</Box>
		</>
	);
}

export default PaymentSecurity;
