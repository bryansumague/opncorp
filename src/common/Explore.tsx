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
	background: 'rgb(39,82,231,0.1)',
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
									<svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M8.80861 2.20605C8.19263 2.20605 7.66858 2.63411 7.52148 3.21104H12.4677C12.3206 2.63411 11.7966 2.20605 11.1806 2.20605H8.80861ZM13.8657 3.21136H15.6861C17.6168 3.21136 19.1889 4.80259 19.1889 6.75674C19.1889 6.75674 19.1338 7.58399 19.1154 8.73601C19.1135 8.8272 19.0694 8.91653 18.9968 8.97051C18.5546 9.29713 18.15 9.56699 18.1133 9.5856C16.5871 10.6092 14.8136 11.3294 12.9243 11.6877C12.8011 11.7119 12.6797 11.6477 12.6172 11.5379C12.0876 10.6204 11.0984 10.023 9.99514 10.023C8.89924 10.023 7.90079 10.6139 7.3556 11.5323C7.29217 11.6402 7.17265 11.7026 7.05037 11.6793C5.17668 11.3201 3.40319 10.6008 1.88622 9.5949L1.00362 8.98074C0.930066 8.93421 0.884097 8.85047 0.884097 8.75741C0.856516 8.28283 0.810547 6.75674 0.810547 6.75674C0.810547 4.80259 2.38268 3.21136 4.31338 3.21136H6.12456C6.29924 1.86206 7.43007 0.810547 8.80914 0.810547H11.1811C12.5602 0.810547 13.691 1.86206 13.8657 3.21136ZM18.8742 10.7497L18.8375 10.7683C16.9803 12.0153 14.7462 12.8435 12.4018 13.1878C12.0708 13.2343 11.7399 13.0203 11.6479 12.6853C11.4457 11.9222 10.7929 11.4197 10.0114 11.4197H10.0022H9.98385C9.20238 11.4197 8.54962 11.9222 8.34736 12.6853C8.25542 13.0203 7.92444 13.2343 7.59347 13.1878C5.24905 12.8435 3.01496 12.0153 1.15782 10.7683C1.14862 10.759 1.05668 10.7032 0.983135 10.7497C0.900391 10.7963 0.900391 10.9079 0.900391 10.9079L0.964747 15.6537C0.964747 17.6079 2.52769 19.1898 4.45839 19.1898H15.5277C17.4584 19.1898 19.0213 17.6079 19.0213 15.6537L19.0949 10.9079C19.0949 10.9079 19.0949 10.7963 19.0121 10.7497C18.9662 10.7218 18.911 10.7311 18.8742 10.7497ZM10.6818 14.6483C10.6818 15.0391 10.3784 15.3462 9.99227 15.3462C9.61532 15.3462 9.30273 15.0391 9.30273 14.6483V13.4479C9.30273 13.0664 9.61532 12.75 9.99227 12.75C10.3784 12.75 10.6818 13.0664 10.6818 13.4479V14.6483Z'
											fill='#2752E7'
										/>
									</svg>
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
							<GridBoxContent sx={{ background: 'rgb(255,106,104,0.1)' }}>
								<i>
									<svg
										width='20'
										height='20'
										viewBox='0 0 20 20'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<g clipPath='url(#clip0_5_14787)'>
											<path
												d='M10.4336 11.9858V13.5166C10.9908 13.4222 11.2694 13.1806 11.2694 12.791C11.2694 12.3762 10.8129 12.1598 10.4336 11.9858Z'
												fill='#FF6A68'
											/>
											<path
												d='M8.79883 9.05966C8.79883 9.49411 9.19156 9.6885 9.59216 9.8648V8.4198C9.06327 8.49772 8.79883 8.711 8.79883 9.05966Z'
												fill='#FF6A68'
											/>
											<path
												d='M14.722 2.91677L12.3609 0.555664L9.99976 2.91677L7.63865 0.555664L5.27754 2.91677L2.12939 0.555664V18.6575C2.12939 19.0927 2.48199 19.4446 2.91643 19.4446H17.0831C17.5175 19.4446 17.8701 19.0927 17.8701 18.6575V0.555664L14.722 2.91677ZM10.4334 14.9805V16.2413H9.59129V15.0057C8.59097 14.9852 7.71342 14.8089 6.95944 14.4768V12.8539C7.66777 13.2041 8.79166 13.5111 9.59129 13.5607V11.6545C8.18328 11.1083 6.94763 10.5786 6.94763 9.0596C6.94763 7.67992 8.21319 7.0314 9.59129 6.89525V5.95395H10.4334V6.87006C11.3716 6.91099 12.2208 7.09988 12.9787 7.43594L12.401 8.87464C11.7619 8.61256 11.1056 8.45279 10.4334 8.39534V10.2095C11.9272 10.784 13.1204 11.3074 13.1204 12.6996C13.1204 14.1675 11.9012 14.8459 10.4334 14.9805Z'
												fill='#FF6A68'
											/>
										</g>
										<defs>
											<clipPath id='clip0_5_14787'>
												<rect
													width='18.8889'
													height='18.8889'
													fill='white'
													transform='translate(0.554688 0.555664)'
												/>
											</clipPath>
										</defs>
									</svg>
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
							<GridBoxContent sx={{ background: 'rgb(255,223,108,0.1)' }}>
								<i>
									<svg
										width='19'
										height='23'
										viewBox='0 0 19 23'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M4.65378 0.243164C2.29931 0.243164 0.390625 2.15185 0.390625 4.50633V18.4935C0.390625 20.848 2.29931 22.7567 4.65378 22.7567H13.7467C16.1012 22.7567 18.0099 20.848 18.0099 18.4935V4.50632C18.0099 2.15184 16.1012 0.243164 13.7467 0.243164H4.65378ZM4.55632 10.3457H13.5514C13.9687 10.3457 14.2933 10.674 14.3165 11.0962C14.3165 11.5183 13.9919 11.8466 13.5746 11.8466H4.55632C4.13902 11.8466 3.81445 11.5183 3.81445 11.0962C3.81445 10.674 4.13902 10.3457 4.55632 10.3457ZM13.5514 13.9805H4.55632C4.13902 13.9805 3.81445 14.3088 3.81445 14.7309C3.81445 15.153 4.13902 15.4814 4.55632 15.4814H13.5746C13.9919 15.4814 14.3165 15.153 14.3165 14.7309C14.2933 14.3088 13.9687 13.9805 13.5514 13.9805ZM4.55632 17.6152H13.5514C13.9687 17.6152 14.3165 17.9436 14.3165 18.3657C14.3165 18.7878 13.9919 19.1161 13.5746 19.1161H4.55632C4.13902 19.1161 3.81445 18.7878 3.81445 18.3657C3.81445 17.9436 4.13902 17.6152 4.55632 17.6152ZM11.0022 8.23564C11.0022 7.32103 10.7008 6.54712 10.0749 6.14845C10.0517 6.125 10.0053 6.125 9.98215 6.14845C9.72713 6.33606 9.40256 6.45332 9.05482 6.45332C8.70707 6.45332 8.3825 6.33606 8.12749 6.14845C8.1043 6.125 8.05794 6.125 8.03475 6.14845C7.4088 6.54712 7.10742 7.34448 7.10742 8.23564C7.10742 8.86883 11.0022 8.86883 11.0022 8.23564ZM10.2129 4.88156C10.2129 5.52916 9.69388 6.05414 9.05369 6.05414C8.41351 6.05414 7.89453 5.52916 7.89453 4.88156C7.89453 4.23397 8.41351 3.70898 9.05369 3.70898C9.69388 3.70898 10.2129 4.23397 10.2129 4.88156Z'
											fill='#FFDF6C'
										/>
									</svg>
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
							<GridBoxContent sx={{ background: 'rgb(143,238,255,0.1)' }}>
								<i>
									<svg
										width='18'
										height='20'
										viewBox='0 0 18 20'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<rect
											x='0.667969'
											y='10'
											width='3.77778'
											height='9.44444'
											rx='1.88889'
											fill='#8FEEFF'
										/>
										<rect
											x='13.8906'
											y='6.22266'
											width='3.77778'
											height='13.2222'
											rx='1.88889'
											fill='#8FEEFF'
										/>
										<rect
											x='7.2793'
											y='0.555664'
											width='3.77778'
											height='18.8889'
											rx='1.88889'
											fill='#8FEEFF'
										/>
									</svg>
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
									<svg
										width='15'
										height='20'
										viewBox='0 0 15 20'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<mask id='path-1-inside-1_5_14746' fill='white'>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M12.5792 7.29284V9.50461C12.9645 8.84211 13.1821 8.09006 13.1821 7.29284C13.1821 4.62911 10.7528 2.46973 7.75608 2.46973C4.75938 2.46973 2.33008 4.62911 2.33008 7.29284C2.33008 8.09006 2.54768 8.84211 2.93297 9.50461V7.29284C2.93297 5.02687 5.02363 3.07262 7.75608 3.07262C10.4885 3.07262 12.5792 5.02687 12.5792 7.29284Z'
											/>
										</mask>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M12.5792 7.29284V9.50461C12.9645 8.84211 13.1821 8.09006 13.1821 7.29284C13.1821 4.62911 10.7528 2.46973 7.75608 2.46973C4.75938 2.46973 2.33008 4.62911 2.33008 7.29284C2.33008 8.09006 2.54768 8.84211 2.93297 9.50461V7.29284C2.93297 5.02687 5.02363 3.07262 7.75608 3.07262C10.4885 3.07262 12.5792 5.02687 12.5792 7.29284Z'
											fill='#2752E7'
										/>
										<path
											d='M12.5792 9.50461H10.5792V16.9219L14.3081 10.5101L12.5792 9.50461ZM2.93297 9.50461L1.20408 10.5101L4.93297 16.9219V9.50461H2.93297ZM10.5792 7.29284V9.50461H14.5792V7.29284H10.5792ZM14.3081 10.5101C14.8615 9.55842 15.1821 8.46154 15.1821 7.29284H11.1821C11.1821 7.71859 11.0674 8.1258 10.8503 8.49915L14.3081 10.5101ZM15.1821 7.29284C15.1821 3.30959 11.6294 0.469727 7.75608 0.469727V4.46973C9.87617 4.46973 11.1821 5.94862 11.1821 7.29284H15.1821ZM7.75608 0.469727C3.88277 0.469727 0.330078 3.30959 0.330078 7.29284H4.33008C4.33008 5.94862 5.63599 4.46973 7.75608 4.46973V0.469727ZM0.330078 7.29284C0.330078 8.46154 0.650632 9.55842 1.20408 10.5101L4.66185 8.49915C4.44473 8.1258 4.33008 7.71859 4.33008 7.29284H0.330078ZM4.93297 9.50461V7.29284H0.932967V9.50461H4.93297ZM7.75608 1.07262C4.13774 1.07262 0.932967 3.71562 0.932967 7.29284H4.93297C4.93297 6.33812 5.90952 5.07262 7.75608 5.07262V1.07262ZM14.5792 7.29284C14.5792 3.71562 11.3744 1.07262 7.75608 1.07262V5.07262C9.60264 5.07262 10.5792 6.33812 10.5792 7.29284H14.5792Z'
											fill='#2752E7'
											mask='url(#path-1-inside-1_5_14746)'
										/>
										<mask id='path-3-inside-2_5_14746' fill='white'>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M13.784 2.46912H1.72627V1.86623H13.784V2.46912Z'
											/>
											<path d='M0.972656 1.86623C0.972656 1.6165 1.1751 1.41406 1.42482 1.41406H2.02771C2.27744 1.41406 2.47988 1.6165 2.47988 1.86623V2.46912C2.47988 2.71884 2.27744 2.92128 2.02771 2.92128H1.42482C1.1751 2.92128 0.972656 2.71884 0.972656 2.46912V1.86623Z' />
											<path d='M13.0304 1.86623C13.0304 1.6165 13.2329 1.41406 13.4826 1.41406H14.0855C14.3352 1.41406 14.5377 1.6165 14.5377 1.86623V2.46912C14.5377 2.71884 14.3352 2.92128 14.0855 2.92128H13.4826C13.2329 2.92128 13.0304 2.71884 13.0304 2.46912V1.86623Z' />
										</mask>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M13.784 2.46912H1.72627V1.86623H13.784V2.46912Z'
											fill='#2752E7'
										/>
										<path
											d='M0.972656 1.86623C0.972656 1.6165 1.1751 1.41406 1.42482 1.41406H2.02771C2.27744 1.41406 2.47988 1.6165 2.47988 1.86623V2.46912C2.47988 2.71884 2.27744 2.92128 2.02771 2.92128H1.42482C1.1751 2.92128 0.972656 2.71884 0.972656 2.46912V1.86623Z'
											fill='#2752E7'
										/>
										<path
											d='M13.0304 1.86623C13.0304 1.6165 13.2329 1.41406 13.4826 1.41406H14.0855C14.3352 1.41406 14.5377 1.6165 14.5377 1.86623V2.46912C14.5377 2.71884 14.3352 2.92128 14.0855 2.92128H13.4826C13.2329 2.92128 13.0304 2.71884 13.0304 2.46912V1.86623Z'
											fill='#2752E7'
										/>
										<path
											d='M1.72627 2.46912H-0.273733V4.46912H1.72627V2.46912ZM13.784 2.46912V4.46912H15.784V2.46912H13.784ZM1.72627 1.86623V-0.133771H-0.273733V1.86623H1.72627ZM13.784 1.86623H15.784V-0.133771H13.784V1.86623ZM1.72627 4.46912H13.784V0.469118H1.72627V4.46912ZM-0.273733 1.86623V2.46912H3.72627V1.86623H-0.273733ZM13.784 -0.133771H1.72627V3.86623H13.784V-0.133771ZM15.784 2.46912V1.86623H11.784V2.46912H15.784ZM1.42482 3.41406H2.02771V-0.585938H1.42482V3.41406ZM0.479879 1.86623V2.46912H4.47988V1.86623H0.479879ZM2.02771 0.921285H1.42482V4.92128H2.02771V0.921285ZM2.97266 2.46912V1.86623H-1.02734V2.46912H2.97266ZM1.42482 0.921285C2.27967 0.921285 2.97266 1.61427 2.97266 2.46912H-1.02734C-1.02734 3.82341 0.0705287 4.92128 1.42482 4.92128V0.921285ZM0.479879 2.46912C0.479879 1.61427 1.17287 0.921285 2.02771 0.921285V4.92128C3.38201 4.92128 4.47988 3.82341 4.47988 2.46912H0.479879ZM2.02771 3.41406C1.17287 3.41406 0.479879 2.72107 0.479879 1.86623H4.47988C4.47988 0.511935 3.38201 -0.585938 2.02771 -0.585938V3.41406ZM1.42482 -0.585938C0.0705287 -0.585938 -1.02734 0.511935 -1.02734 1.86623H2.97266C2.97266 2.72107 2.27967 3.41406 1.42482 3.41406V-0.585938ZM13.4826 3.41406H14.0855V-0.585938H13.4826V3.41406ZM12.5377 1.86623V2.46912H16.5377V1.86623H12.5377ZM14.0855 0.921285H13.4826V4.92128H14.0855V0.921285ZM15.0304 2.46912V1.86623H11.0304V2.46912H15.0304ZM13.4826 0.921285C14.3374 0.921285 15.0304 1.61427 15.0304 2.46912H11.0304C11.0304 3.82341 12.1283 4.92128 13.4826 4.92128V0.921285ZM12.5377 2.46912C12.5377 1.61427 13.2306 0.921285 14.0855 0.921285V4.92128C15.4398 4.92128 16.5377 3.82341 16.5377 2.46912H12.5377ZM14.0855 3.41406C13.2306 3.41406 12.5377 2.72107 12.5377 1.86623H16.5377C16.5377 0.511935 15.4398 -0.585938 14.0855 -0.585938V3.41406ZM13.4826 -0.585938C12.1283 -0.585938 11.0304 0.511935 11.0304 1.86623H15.0304C15.0304 2.72107 14.3374 3.41406 13.4826 3.41406V-0.585938Z'
											fill='#2752E7'
											mask='url(#path-3-inside-2_5_14746)'
										/>
										<path
											d='M2.12305 8.34804C2.12305 8.06791 2.35014 7.84082 2.63027 7.84082C2.9104 7.84082 3.13749 8.06791 3.13749 8.34804C3.13749 8.62817 2.9104 8.85527 2.63027 8.85527C2.35014 8.85527 2.12305 8.62817 2.12305 8.34804Z'
											fill='white'
											stroke='#2752E7'
											strokeWidth='2'
										/>
										<mask id='path-6-inside-3_5_14746' fill='white'>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M1.72594 8.34804C1.72594 8.84749 2.13082 9.25238 2.63027 9.25238C3.12972 9.25238 3.5346 8.84749 3.5346 8.34804C3.5346 7.84859 3.12972 7.44371 2.63027 7.44371C2.13082 7.44371 1.72594 7.84859 1.72594 8.34804ZM2.63027 6.84082C1.79785 6.84082 1.12305 7.51563 1.12305 8.34804C1.12305 9.18046 1.79785 9.85527 2.63027 9.85527C3.46269 9.85527 4.13749 9.18046 4.13749 8.34804C4.13749 7.51563 3.46269 6.84082 2.63027 6.84082Z'
											/>
										</mask>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M1.72594 8.34804C1.72594 8.84749 2.13082 9.25238 2.63027 9.25238C3.12972 9.25238 3.5346 8.84749 3.5346 8.34804C3.5346 7.84859 3.12972 7.44371 2.63027 7.44371C2.13082 7.44371 1.72594 7.84859 1.72594 8.34804ZM2.63027 6.84082C1.79785 6.84082 1.12305 7.51563 1.12305 8.34804C1.12305 9.18046 1.79785 9.85527 2.63027 9.85527C3.46269 9.85527 4.13749 9.18046 4.13749 8.34804C4.13749 7.51563 3.46269 6.84082 2.63027 6.84082Z'
											fill='#2752E7'
										/>
										<path
											d='M2.63027 7.25238C3.23539 7.25238 3.72594 7.74292 3.72594 8.34804H-0.274064C-0.274064 9.95206 1.02625 11.2524 2.63027 11.2524V7.25238ZM1.5346 8.34804C1.5346 7.74292 2.02515 7.25238 2.63027 7.25238V11.2524C4.23429 11.2524 5.5346 9.95206 5.5346 8.34804H1.5346ZM2.63027 9.44371C2.02515 9.44371 1.5346 8.95316 1.5346 8.34804H5.5346C5.5346 6.74402 4.23429 5.44371 2.63027 5.44371V9.44371ZM3.72594 8.34804C3.72594 8.95316 3.23539 9.44371 2.63027 9.44371V5.44371C1.02625 5.44371 -0.274064 6.74402 -0.274064 8.34804H3.72594ZM3.12305 8.34804C3.12305 8.6202 2.90242 8.84082 2.63027 8.84082V4.84082C0.693284 4.84082 -0.876953 6.41106 -0.876953 8.34804H3.12305ZM2.63027 7.85527C2.90242 7.85527 3.12305 8.07589 3.12305 8.34804H-0.876953C-0.876953 10.285 0.693284 11.8553 2.63027 11.8553V7.85527ZM2.13749 8.34804C2.13749 8.07589 2.35812 7.85527 2.63027 7.85527V11.8553C4.56725 11.8553 6.13749 10.285 6.13749 8.34804H2.13749ZM2.63027 8.84082C2.35812 8.84082 2.13749 8.6202 2.13749 8.34804H6.13749C6.13749 6.41106 4.56725 4.84082 2.63027 4.84082V8.84082Z'
											fill='#2752E7'
											mask='url(#path-6-inside-3_5_14746)'
										/>
										<path
											d='M7.24805 2.31875C7.24805 2.03861 7.47514 1.81152 7.75527 1.81152C8.0354 1.81152 8.26249 2.03861 8.26249 2.31875C8.26249 2.59888 8.0354 2.82597 7.75527 2.82597C7.47514 2.82597 7.24805 2.59888 7.24805 2.31875Z'
											fill='white'
											stroke='#2752E7'
											strokeWidth='2'
										/>
										<mask id='path-9-inside-4_5_14746' fill='white'>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M6.85094 2.31875C6.85094 2.8182 7.25582 3.22308 7.75527 3.22308C8.25472 3.22308 8.6596 2.8182 8.6596 2.31875C8.6596 1.8193 8.25472 1.41441 7.75527 1.41441C7.25582 1.41441 6.85094 1.8193 6.85094 2.31875ZM7.75527 0.811523C6.92285 0.811523 6.24805 1.48633 6.24805 2.31875C6.24805 3.15116 6.92285 3.82597 7.75527 3.82597C8.58769 3.82597 9.26249 3.15116 9.26249 2.31875C9.26249 1.48633 8.58769 0.811523 7.75527 0.811523Z'
											/>
										</mask>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M6.85094 2.31875C6.85094 2.8182 7.25582 3.22308 7.75527 3.22308C8.25472 3.22308 8.6596 2.8182 8.6596 2.31875C8.6596 1.8193 8.25472 1.41441 7.75527 1.41441C7.25582 1.41441 6.85094 1.8193 6.85094 2.31875ZM7.75527 0.811523C6.92285 0.811523 6.24805 1.48633 6.24805 2.31875C6.24805 3.15116 6.92285 3.82597 7.75527 3.82597C8.58769 3.82597 9.26249 3.15116 9.26249 2.31875C9.26249 1.48633 8.58769 0.811523 7.75527 0.811523Z'
											fill='#2752E7'
										/>
										<path
											d='M7.75527 1.22308C8.36039 1.22308 8.85094 1.71363 8.85094 2.31875H4.85094C4.85094 3.92276 6.15125 5.22308 7.75527 5.22308V1.22308ZM6.6596 2.31875C6.6596 1.71363 7.15015 1.22308 7.75527 1.22308V5.22308C9.35929 5.22308 10.6596 3.92276 10.6596 2.31875H6.6596ZM7.75527 3.41441C7.15015 3.41441 6.6596 2.92387 6.6596 2.31875H10.6596C10.6596 0.714727 9.35929 -0.585588 7.75527 -0.585588V3.41441ZM8.85094 2.31875C8.85094 2.92387 8.36039 3.41441 7.75527 3.41441V-0.585588C6.15125 -0.585588 4.85094 0.714727 4.85094 2.31875H8.85094ZM8.24805 2.31875C8.24805 2.5909 8.02742 2.81152 7.75527 2.81152V-1.18848C5.81828 -1.18848 4.24805 0.38176 4.24805 2.31875H8.24805ZM7.75527 1.82597C8.02742 1.82597 8.24805 2.04659 8.24805 2.31875H4.24805C4.24805 4.25573 5.81828 5.82597 7.75527 5.82597V1.82597ZM7.26249 2.31875C7.26249 2.04659 7.48312 1.82597 7.75527 1.82597V5.82597C9.69225 5.82597 11.2625 4.25573 11.2625 2.31875H7.26249ZM7.75527 2.81152C7.48312 2.81152 7.26249 2.5909 7.26249 2.31875H11.2625C11.2625 0.38176 9.69225 -1.18848 7.75527 -1.18848V2.81152Z'
											fill='#2752E7'
											mask='url(#path-9-inside-4_5_14746)'
										/>
										<path
											d='M12.373 8.34804C12.373 8.06791 12.6001 7.84082 12.8803 7.84082C13.1604 7.84082 13.3875 8.06791 13.3875 8.34804C13.3875 8.62817 13.1604 8.85527 12.8803 8.85527C12.6001 8.85527 12.373 8.62817 12.373 8.34804Z'
											fill='white'
											stroke='#2752E7'
											strokeWidth='2'
										/>
										<mask id='path-12-inside-5_5_14746' fill='white'>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M11.9759 8.34804C11.9759 8.84749 12.3808 9.25238 12.8803 9.25238C13.3797 9.25238 13.7846 8.84749 13.7846 8.34804C13.7846 7.84859 13.3797 7.44371 12.8803 7.44371C12.3808 7.44371 11.9759 7.84859 11.9759 8.34804ZM12.8803 6.84082C12.0479 6.84082 11.373 7.51563 11.373 8.34804C11.373 9.18046 12.0479 9.85527 12.8803 9.85527C13.7127 9.85527 14.3875 9.18046 14.3875 8.34804C14.3875 7.51563 13.7127 6.84082 12.8803 6.84082Z'
											/>
										</mask>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M11.9759 8.34804C11.9759 8.84749 12.3808 9.25238 12.8803 9.25238C13.3797 9.25238 13.7846 8.84749 13.7846 8.34804C13.7846 7.84859 13.3797 7.44371 12.8803 7.44371C12.3808 7.44371 11.9759 7.84859 11.9759 8.34804ZM12.8803 6.84082C12.0479 6.84082 11.373 7.51563 11.373 8.34804C11.373 9.18046 12.0479 9.85527 12.8803 9.85527C13.7127 9.85527 14.3875 9.18046 14.3875 8.34804C14.3875 7.51563 13.7127 6.84082 12.8803 6.84082Z'
											fill='#2752E7'
										/>
										<path
											d='M12.8803 7.25238C13.4854 7.25238 13.9759 7.74292 13.9759 8.34804H9.97594C9.97594 9.95206 11.2763 11.2524 12.8803 11.2524V7.25238ZM11.7846 8.34804C11.7846 7.74292 12.2751 7.25238 12.8803 7.25238V11.2524C14.4843 11.2524 15.7846 9.95206 15.7846 8.34804H11.7846ZM12.8803 9.44371C12.2751 9.44371 11.7846 8.95316 11.7846 8.34804H15.7846C15.7846 6.74402 14.4843 5.44371 12.8803 5.44371V9.44371ZM13.9759 8.34804C13.9759 8.95316 13.4854 9.44371 12.8803 9.44371V5.44371C11.2763 5.44371 9.97594 6.74402 9.97594 8.34804H13.9759ZM13.373 8.34804C13.373 8.6202 13.1524 8.84082 12.8803 8.84082V4.84082C10.9433 4.84082 9.37305 6.41106 9.37305 8.34804H13.373ZM12.8803 7.85527C13.1524 7.85527 13.373 8.07589 13.373 8.34804H9.37305C9.37305 10.285 10.9433 11.8553 12.8803 11.8553V7.85527ZM12.3875 8.34804C12.3875 8.07589 12.6081 7.85527 12.8803 7.85527V11.8553C14.8173 11.8553 16.3875 10.285 16.3875 8.34804H12.3875ZM12.8803 8.84082C12.6081 8.84082 12.3875 8.6202 12.3875 8.34804H16.3875C16.3875 6.41106 14.8173 4.84082 12.8803 4.84082V8.84082Z'
											fill='#2752E7'
											mask='url(#path-12-inside-5_5_14746)'
										/>
										<path
											d='M9.53244 17.2932C9.53244 17.0694 9.63076 16.8447 9.82106 16.7267C10.8994 16.0583 11.6176 14.864 11.6176 13.502C11.6176 11.9389 9.5047 8.48381 8.43361 6.83275C8.14495 6.38778 7.50782 6.38778 7.21916 6.83275C6.14806 8.48381 4.03516 11.9389 4.03516 13.502C4.03516 14.864 4.75336 16.0583 5.83171 16.7267C6.022 16.8447 6.12033 17.0694 6.12033 17.2932V17.6724C6.12033 18.5099 6.79929 19.1889 7.63682 19.1889H8.01594C8.85348 19.1889 9.53244 18.5099 9.53244 17.6724V17.2932Z'
											fill='#2752E7'
										/>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M9.42157 16.0822C10.2862 15.5463 10.8594 14.5908 10.8594 13.502C10.8594 13.2522 10.7678 12.8478 10.5613 12.3003C10.3613 11.7701 10.0788 11.1699 9.75542 10.5519C9.12086 9.33899 8.35586 8.10796 7.82638 7.29C7.29691 8.10796 6.5319 9.33899 5.89735 10.5519C5.57399 11.1699 5.29145 11.7701 5.09149 12.3003C4.88496 12.8478 4.7934 13.2522 4.7934 13.502C4.7934 14.5908 5.36655 15.5463 6.2312 16.0822C6.69425 16.3693 6.87858 16.8713 6.87858 17.2932V17.6724C6.87858 18.0911 7.21805 18.4306 7.63682 18.4306H8.01594C8.43471 18.4306 8.77419 18.0911 8.77419 17.6724V17.2932C8.77419 16.8713 8.95852 16.3693 9.42157 16.0822ZM9.82106 16.7267C9.63076 16.8447 9.53244 17.0694 9.53244 17.2932V17.6724C9.53244 18.5099 8.85348 19.1889 8.01594 19.1889H7.63682C6.79929 19.1889 6.12033 18.5099 6.12033 17.6724V17.2932C6.12033 17.0694 6.022 16.8447 5.83171 16.7267C4.75336 16.0583 4.03516 14.864 4.03516 13.502C4.03516 11.9389 6.14806 8.48381 7.21916 6.83275C7.50782 6.38778 8.14495 6.38778 8.43361 6.83275C9.5047 8.48381 11.6176 11.9389 11.6176 13.502C11.6176 14.864 10.8994 16.0583 9.82106 16.7267Z'
											fill='#2752E7'
										/>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M7.44683 13.1227L7.44683 6.86719L8.20508 6.86719L8.20508 13.1227L7.44683 13.1227Z'
											fill='#2752E7'
										/>
										<circle
											cx='7.8266'
											cy='13.5024'
											r='0.758246'
											fill='white'
										/>
									</svg>
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
