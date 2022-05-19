import { Box, Grid, styled, Typography } from '@mui/material';
import { fontSize } from '@mui/system';
import React from 'react';

const GridBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: '8px',
	background:
		'linear-gradient(180deg, #FFFFFF 14.32%, rgba(227, 248, 255, 0.15) 27.6%, #FFFFFF 75.52%, #FFFFFF 100%)',
	boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.07)',
	margin: '0 auto',
	[theme.breakpoints.up('sm')]: {
		display: 'flex',
		width: '211px',
		height: '184px',
		marginBottom: '40px',
	},
	[theme.breakpoints.down('sm')]: {
		display: 'flex',
		width: '154px',
		height: '142px',
		marginBottom: '20px',
	},
}));

const GridText = styled(Typography)(({ theme }) => ({
	[theme.breakpoints.up('sm')]: {
		display: 'flex',
		justifyContent: 'center',
		fontWeight: 600,
		width: '179px',
		height: '40px',
		fontSize: '16px',
		textAlign: 'center',
	},
	[theme.breakpoints.down('sm')]: {
		display: 'flex',
		justifyContent: 'center',
		fontWeight: 600,
		width: '130px',
		height: '72px',
		fontSize: '14px',
		textAlign: 'center',
	},
}));

const GridBoxContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'column',
	alignItems: 'center',

	marginBottom: '20px',

	[theme.breakpoints.down('sm')]: {
		paddingTop: '30px',
		marginBottom: '16px',
	},
}));

const GridBoxContent = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	// background: 'rgb(39,82,231,0.1)',
	width: '72px',
	borderRadius: '8px',
	height: '72px',
	[theme.breakpoints.up('sm')]: {
		marginBottom: '24px',
	},
}));

function Explore() {
	return (
		<Box>
			<Box color={'secondary'} sx={{ textAlign: 'center', mt: 5, mb: 5 }}>
				<Typography
					variant={'h4'}
					sx={{
						fontWeight: 700,
						fontSize: { xs: '26px', sm: '40px', md: '48px' },
						lineHeight: '125%',
						letterSpacing: '-0.02em',
					}}
					component={'h4'}
					color='secondary'
					gutterBottom
				>
					Explore the marketplace
				</Typography>
			</Box>
			<Grid
				container
				rowSpacing={2}
				sx={{
					display: 'flex',
					justifyContent: {
						xs: 'flex-start',
						sm: 'flex-start',
						md: 'space-around',
					},
					// 	display: 'grid',
					// gridTemplateColumns: 'repeat(auto-fit,minmax(211px,1fr))',
					// gap: '40px',
				}}
			>
				<Grid item xs={6} sm={4} md={2}>
					<GridBox>
						<GridBoxContainer>
							<GridBoxContent>
								<i>
									<img src={'inc.svg'} alt='Inc.' />
								</i>
							</GridBoxContent>
							<Box>
								<GridText>Incoporation & Corporate Governance</GridText>
							</Box>
						</GridBoxContainer>
					</GridBox>
				</Grid>
				<Grid item xs={6} sm={4} md={2}>
					<GridBox>
						<GridBoxContainer>
							<GridBoxContent>
								<i>
									<img src={'finance.svg'} alt='finance.' />
								</i>
							</GridBoxContent>
							<Box>
								<GridText>Finance</GridText>
							</Box>
						</GridBoxContainer>
					</GridBox>
				</Grid>

				<Grid item xs={6} sm={4} md={2}>
					<GridBox>
						<GridBoxContainer>
							<GridBoxContent>
								<i>
									<img src={'hr.svg'} alt='Inc.' />
								</i>
							</GridBoxContent>
							<Box>
								<GridText>Human Resource (HR) & Payroll</GridText>
							</Box>
						</GridBoxContainer>
					</GridBox>
				</Grid>

				<Grid item xs={6} sm={4} md={2}>
					<GridBox>
						<GridBoxContainer>
							<GridBoxContent>
								<i>
									<img src={'rsdt.svg'} alt='Research.' />
								</i>
							</GridBoxContent>
							<Box>
								<GridText>Research & Data Analysis</GridText>
							</Box>
						</GridBoxContainer>
					</GridBox>
				</Grid>

				<Grid item xs={6} sm={4} md={2}>
					<GridBox>
						<GridBoxContainer>
							<GridBoxContent sx={{}}>
								<i>
									<img src={'mrtd.svg'} alt='Marketting.' />
								</i>
							</GridBoxContent>
							<Box>
								<GridText>Marketing & Design</GridText>
							</Box>
						</GridBoxContainer>
					</GridBox>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Explore;
