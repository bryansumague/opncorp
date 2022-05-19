import React, { Fragment, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import StoreIcon from '@mui/icons-material/Store';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

type Anchor = 'right';

export default function Drawerbar() {
	const [state, setState] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer =
		(anchor: Anchor, open: boolean) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}

			setState({ ...state, [anchor]: open });
		};

	const list = (anchor: Anchor) => (
		<Box
			sx={{ width: 200, display: { xs: 'flex', sm: 'flex', md: 'none' } }}
			role='presentation'
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<ListItem button key='Profile'>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'flex-end',
						}}
					>
						<img src={'vectorart.svg'} width='150' height='150' alt='sample' />
					</Box>
				</ListItem>
				<Divider />
				<ListItem button key='Mailroom'>
					<ListItemIcon>
						<StoreIcon />
					</ListItemIcon>
					<ListItemText primary='MarketPlace' />
				</ListItem>
				<ListItem button key='Sign In'>
					<ListItemIcon>
						<AccountCircleIcon />
					</ListItemIcon>
					<ListItemText primary='Sign In' />
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem button key='Logout'>
					<ListItemIcon>
						<LogoutRoundedIcon />
					</ListItemIcon>
					<ListItemText primary='Logout' />
				</ListItem>
			</List>
		</Box>
	);

	return (
		<div>
			{(['right'] as const).map((anchor) => (
				<Fragment key={anchor}>
					<IconButton
						onClick={toggleDrawer(anchor, true)}
						size='large'
						edge='start'
						aria-label='menu'
						title='Open'
						sx={{
							display: { xs: 'flex', md: 'none' },
							justifyContent: 'flex-end',

							padding: {
								xs: '8px 0 8px 8px !important',
								sm: '12px !important',
							},
							color: '#2C3131',
						}}
					>
						<MenuIcon
							sx={{
								display: { xs: 'flex', md: 'none' },
								fontSize: '2.2rem',
							}}
						/>
					</IconButton>
					{/*<Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>*/}
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{list(anchor)}
					</Drawer>
				</Fragment>
			))}
		</div>
	);
}
