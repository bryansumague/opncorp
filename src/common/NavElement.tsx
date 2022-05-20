import React from 'react';
import { Box, Stack, Typography, styled } from '@mui/material';
import { keyframes } from '@emotion/react';

const fadein = keyframes`
    from {
		 opacity: 0; 
		 padding:0;
		 top:-50px;
	  }
    to   { 
		opacity: 1; 
		padding:1rem 0;
		top:0;
	}
  }
`;

const BoxScroll = styled(Box)(({ theme }) => ({
	textAlign: 'center',
	position: 'fixed',
	left: 0,
	right: 0,
	width: '100%',
	height: '80px',
	margin: '0 auto',
	background: 'rgba(255, 255, 255, 0.95)',
	boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06)',
	display: 'flex',
	alignItems: 'center',
	animation: `${fadein} 0.2s linear`,

	[theme.breakpoints.down('md')]: {
		display: 'none',
	},
}));

const CategoriesTypography = styled(Typography)(({ theme }) => ({
	display: 'none',
	[theme.breakpoints.up(1441)]: {
		display: 'flex',
		fontWeight: 600,
		fontSize: '16px',
		lineHeight: '125%',
	},
}));

const NavElement = () => {
	return (
		<Box
			sx={{
				position: 'relative',
				zIndex: 2,
				width: '100%',
			}}
		>
			<BoxScroll>
				<Stack
					direction='row'
					justifyContent='center'
					alignItems='center'
					spacing={3}
					sx={{ width: '92%', margin: '0 auto', maxWidth: '1280px' }}
				>
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: '16px',
							lineHeight: '125%',
						}}
					>
						Incorporation & Corporate Governance
					</Typography>
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: '16px',
							lineHeight: '125%',
						}}
					>
						Finance
					</Typography>
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: '16px',
							lineHeight: '125%',
						}}
					>
						Human Resources & Payroll
					</Typography>
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: '16px',
							lineHeight: '125%',
						}}
					>
						Research & Data Analysis
					</Typography>
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: '16px',
							lineHeight: '125%',
						}}
					>
						Marketing & Design
					</Typography>

					<CategoriesTypography>
						<img
							style={{ width: '164px', height: '52px' }}
							src={'btncategory.svg'}
							alt='svg'
						/>
					</CategoriesTypography>

					{/* <Typography
						sx={(theme) => ({
							display: 'none',
							[theme.breakpoints.up(1441)]: {
								display: 'flex',
							},
						})}
					>
						<img
							style={{ width: '164px', height: '52px' }}
							src={'btncategory.svg'}
							alt='svg'
						/>
					</Typography> */}
				</Stack>
			</BoxScroll>
		</Box>
	);
};

export default NavElement;
