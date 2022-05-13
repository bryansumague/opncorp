import React from 'react';
import {
	Box,
	AppBar,
	Toolbar,
	Grid,
	Button,
	TextField,
	Link,
	Typography,
	styled,
} from '@mui/material';

import Drawerbar from './Drawbar';

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
	display: 'flex',
	width: '95%',
	margin: '0 auto',
	justifyContent: 'space-between',
	[theme.breakpoints.up('sm')]: {
		display: 'flex',
		width: '92%',
		margin: '0 auto',
	},
	[theme.breakpoints.up('md')]: {
		width: '100%',
		maxWidth: '1280px',
		margin: '0 auto',
	},
}));

type Props = {
	isVisibility: boolean;
};

export default function Navbar({ isVisibility }: Props) {
	return (
		<AppBar
			position='sticky'
			color={'primary'}
			sx={{
				width: '100%',
				margin: '0 auto',
				boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06)',
				display: 'flex',
			}}
		>
			<ToolbarStyled>
				<Box sx={{ mr: 3 }}>
					<Link href={'/'}>
						<i>
							<img src={'logo.png'} alt='logo' className={'open-logo'} />
						</i>
					</Link>
				</Box>
				<Box
					sx={{
						width: '512px',
						display: {
							sx: 'none',
							sm: 'none',
							md: isVisibility ? 'flex' : 'none',
						},
					}}
				>
					<Grid container sx={{ position: 'relative' }}>
						<TextField
							fullWidth
							sx={{
								color: '#000000',
								'& .MuiOutlinedInput-root': {
									'& > fieldset': { borderColor: 'transparent' },
								},
							}}
							placeholder='Search here...'
							InputProps={{
								style: {
									height: '48px',
									background: '#F7F7F7',
									borderRadius: '2px',
								},
							}}
						/>
						<Box>
							<Button
								variant='contained'
								color='secondary'
								sx={{
									position: 'absolute',
									right: 0,
									bottom: 0,
									top: 0,
									height: '48px',
									borderRadius: '0px 2px 2px 0px',
								}}
							>
								<span style={{ marginTop: '10px' }}>
									<i>
										<svg
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4ZM2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11Z'
												fill='white'
											/>
											<path
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M15.9428 15.9429C16.3333 15.5524 16.9665 15.5524 17.357 15.9429L21.707 20.2929C22.0975 20.6834 22.0975 21.3166 21.707 21.7071C21.3165 22.0977 20.6833 22.0977 20.2928 21.7071L15.9428 17.3571C15.5523 16.9666 15.5523 16.3334 15.9428 15.9429Z'
												fill='white'
											/>
										</svg>
									</i>
								</span>
							</Button>
						</Box>
					</Grid>
				</Box>
				<Box display='flex' sx={{ gap: { xs: '12px', sm: '12px' } }}>
					<Button
						variant='outlined'
						sx={{
							borderRadius: '4px',
							padding: '12px 10px',
							display: { xs: 'none', sm: 'block' },
							color: '#2C3131',
						}}
					>
						<Typography
							sx={{
								width: '50px',
								fontSize: {
									xs: '14px',
									sm: '16px',
									md: '16px',
									lineHeight: '150%',
									fontWeight: 600,
								},
							}}
						>
							SGD $
						</Typography>
					</Button>
					<Button
						variant='outlined'
						sx={{
							borderRadius: '4px',
							padding: '12px 10px',
							display: { xs: 'none', sm: 'block' },
							color: '#2752E7',
						}}
					>
						<Typography
							sx={{
								fontSize: {
									xs: '14px',
									sm: '16px',
									md: '16px',
									lineHeight: '150%',
									fontWeight: 600,
								},
							}}
						>
							Sign in
						</Typography>
					</Button>

					<Button
						variant='contained'
						color='secondary'
						sx={{
							borderRadius: '4px',

							padding: '12px 10px',

							display: { xs: 'flex', md: 'flex' },
						}}
					>
						<Typography
							sx={{
								fontSize: {
									xs: '14px',
									sm: '16px',
									md: '16px',
									lineHeight: '150%',
									fontWeight: 600,
								},
							}}
						>
							Get Started
						</Typography>
					</Button>
					<Drawerbar />
				</Box>
			</ToolbarStyled>
		</AppBar>
	);
}
