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
	width: '100%',
	margin: '0 auto',
	textAlign: 'center',
	position: 'fixed',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	left: 0,
	right: 0,
	background: 'rgba(255, 255, 255, 0.95)',
	boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06)',
	padding: '.5rem 0',
	animation: `${fadein} 0.2s linear`,

	[theme.breakpoints.down('md')]: {
		display: 'none',
	},
}));

const NavElement = () => {
	return (
		<Box sx={{ position: 'relative', zIndex: 2 }}>
			<BoxScroll>
				<Box sx={{ width: '92%', margin: '0 auto' }}>
					<Stack
						direction='row'
						justifyContent='center'
						alignItems='center'
						spacing={3}
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
						<Typography
							sx={{
								fontWeight: 600,
								fontSize: '16px',
								lineHeight: '125%',
							}}
						>
							<img
								style={{ width: '164px', height: '52px' }}
								src={'btncategory.svg'}
								alt='svg'
							/>
						</Typography>
					</Stack>
				</Box>
			</BoxScroll>
		</Box>
	);
};

export default NavElement;
