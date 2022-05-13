import { createTheme } from '@mui/material/styles';

const mainColor = '#2752E7';
const whiteSpace = '#ffffff';
const mainText = '#ffffff';

const theme = createTheme({
	palette: {
		primary: {
			main: whiteSpace,
			contrastText: mainText,
		},
		secondary: {
			main: mainColor,
		},
	},
	typography: {
		fontFamily: ['Manrope', 'sans-serif'].join(','),
	},
	components: {
		MuiButtonBase: {
			defaultProps: {
				// The props to change the default for.
				//disableRipple: true, // No more ripple!
			},
		},
		MuiButton: {
			styleOverrides: {
				// text buttons
				text: {
					color: mainText,
				},
				outlined: {
					color: mainText,
				},
				contained: {
					color: mainText,
					fontWeight: 700,
					boxShadow: 'none',
				},
			},
		},
		MuiTextField: {
			variants: [
				{
					props: { variant: 'outlined' },
					style: {
						height: '56px',
						fontSize: '1rem',
						'& .MuiOutlinedInput-root': {
							'& > fieldset': {
								borderColor: '#eeeeee',
								borderRadius: '10px',
							},
						},
						'& .MuiOutlinedInput-root:focus': {
							'& > fieldset': {
								borderColor: 'none',
								borderRadius: '10px',
							},
						},
					},
				},
			],
		},
		// MuiTypography: {
		// 	styleOverrides: {
		// 		// text buttons
		// 		h4: {
		// 			fontWeight: 700,
		// 			fontFamily: 'Montserrat',
		// 		},
		// 		h6: {
		// 			fontWeight: 700,
		// 			fontFamily: 'Montserrat',
		// 			color: '#646464',
		// 		},
		// 	},
		// },
		// MuiFab: {
		// 	styleOverrides: {
		// 		circular: {
		// 			color: 'black',
		// 			position: 'fixed',
		// 			bottom: 70,
		// 			right: 70,
		// 			fontFamily: 'Montserrat',
		// 		},
		// 	},
		// },
	},
});

export default theme;

// Reference Link
// https://mui.com/customization/theming/
// https://mui.com/components/
// https://mui.com/components/material-icons/?theme=Rounded&query=Gear
