import React from 'react';
import {
	Box,
	AppBar,
	Toolbar,
	IconButton,
	Button,
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

export default function Navbar() {
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
				<Box>
					<Link href={'/'}>
						<i>
							<img src={'logo.png'} alt='logo' className={'open-logo'} />
						</i>
					</Link>
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
