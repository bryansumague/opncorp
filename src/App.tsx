import * as React from 'react';

// import Typography from '@mui/material/Typography';
import Navbar from './common/shared/Navigation';
// import { Button, Divider, Grid, TextField } from '@mui/material';
import Headline from './common/Headline';
import Explore from './common/Explore';
import PaymentSecurity from './common/PaymentSecurity';
import ProviderServices from './common/Providers';
import FeaturesBox from './common/Features';
import Footer from './common/Footer';
import { Box, styled } from '@mui/material';
import NavElement from './common/NavElement';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { getUsers } from './app/api';

const Wrapper = styled('div')(({ theme }) => ({
	width: '100%',
	margin: '0 auto',
}));

const WrapperMainSection1 = styled('div')({
	margin: '40px 0',
	// background:
	// 	'linear-gradient(180deg, #FFFFFF 14.32%, rgba(227, 248, 255, 0.15) 27.6%, #FFFFFF 75.52%, #FFFFFF 100%)',
	background:
		'linear-gradient(180deg, #FFFFFF 0.31%, rgba(255, 240, 240, 0.1) 20.53%, rgba(233, 238, 253, 0.23) 52.08%, #FFFFFF 96.75%)',
});

const WrapperMainSection2 = styled('div')({
	background:
		'linear-gradient(180deg, #FFFFFF 0.31%, rgba(255, 240, 240, 0.1) 20.53%, rgba(233, 238, 253, 0.23) 52.08%, #FFFFFF 96.75%)',
});

const WrapperMainSection3 = styled('div')({
	background:
		'linear-gradient(180deg, #FFFFFF 11.46%, rgba(255, 250, 239, 0.49) 25.66%, rgba(227, 248, 255, 0.51) 41.61%, #FFFFFF 73.86%, #FFFFFF 92.23%)',
});

const WrapperFooter = styled('div')(({ theme }) => ({
	background: '#ffffff',
	marginTop: '48px',
	[theme.breakpoints.up('sm')]: {
		background: '#ffffff',
		marginTop: '80px',
	},
	[theme.breakpoints.up('md')]: {
		background: '#ffffff',
		marginTop: '114px',
	},
}));

const WrapperMain = styled('div')(({ theme }) => ({
	display: 'block',
	width: '90%',
	margin: '0 auto',
	[theme.breakpoints.up('sm')]: {
		display: 'block',
		width: '92%',
		margin: '0 auto',
	},
	[theme.breakpoints.up('md')]: {
		display: 'block',
		width: '92%',
		maxWidth: '1280px',
		margin: '0 auto',
	},
}));

export default function App() {
	const myRef = React.useRef<HTMLDivElement>(null!);

	const [isVisible, setVisible] = React.useState(false);

	React.useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entryPoint = entries[0];
			// console.log(entryPoint.isIntersecting);

			setVisible(entryPoint.isIntersecting);
		});
		observer.observe(myRef.current);
	}, []);

	React.useEffect(() => {
		let mount;
		async function fetchData() {
			mount = true;
			const res = await getUsers();
			console.log(res);
		}
		fetchData();

		return () => {
			mount = false;
		};
	}, []);

	return (
		<HelmetProvider>
			<Wrapper>
				<Helmet>
					<title>OpnCorp</title>
					<meta name='opncorp:card' content='summary_large_image' />
					<meta
						name='opncorp:image'
						content='https://singular-mermaid-a77676.netlify.app/'
					/>
					<meta
						name='description'
						content='We enable solution providers to establish a milestone payment system. This means that you as the customer always know what you are paying for and the money is only released to the solution provider when you approve the work'
					/>

					<meta name='opncorp:creator' content='@opncorp' />
					<meta name='opncorp:site' content='@opncorp' />
				</Helmet>
				<Navbar isVisibility={isVisible} />
				{isVisible ? <NavElement /> : ''}
				<WrapperMainSection1>
					<WrapperMain>
						<Headline />
						<Explore />
					</WrapperMain>
				</WrapperMainSection1>

				<Box ref={myRef}>
					<WrapperMainSection2>
						<WrapperMain>
							<PaymentSecurity />
							<ProviderServices />
						</WrapperMain>
					</WrapperMainSection2>

					<WrapperMainSection3>
						<WrapperMain>
							<FeaturesBox />
						</WrapperMain>

						<WrapperFooter>
							<WrapperMain>
								<Footer />
							</WrapperMain>
						</WrapperFooter>
					</WrapperMainSection3>
				</Box>

				{/* <Container>
				<Box sx={{ my: 4 }}>
					<Typography variant='h4' component='h1' gutterBottom>
						Starting a business has never been easier
					</Typography>
					<Typography>
						Search for corporate services to help you start, manage and run your
						businesses.
					</Typography>
					<Grid container spacing={2}>
						<Grid item xs={6} md={8}>
							<TextField fullWidth />
						</Grid>

						<Grid item xs={6} md={8}>
							<Button variant='contained' color='secondary'>
								Search
							</Button>
						</Grid>
					</Grid>
				</Box>
				<Box>
					<i>
						<img src={'vectorart.svg'} alt='Vector' />
					</i>
				</Box>
				<Box>
					<Typography>Explore the marketplace</Typography>
				</Box>

				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid item xs={6}>
						Incoporation & Corporate Governance
					</Grid>
					<Grid item xs={6}>
						Finance
					</Grid>
					<Grid item xs={6}>
						Human Resource (HR) & Payroll
					</Grid>
					<Grid item xs={6}>
						Research & Data Analysis
					</Grid>
					<Grid item xs={6}>
						Marketing & Design
					</Grid>
				</Grid>

				<Box>
					<Typography>WHY CHOOSE US</Typography>
				</Box>

				<Box>
					<Typography>Payment security</Typography>
					<Typography>
						We enable solution providers to establish a milestone payment
						system. This means that you as the customer always know what you are
						paying for and the money is only released to the solution provider
						when you approve the work.
					</Typography>
				</Box>

				<Box>
					<i>
						<img src={'mb.png'} alt='transaction' />
					</i>
				</Box>
				<Typography>WHY CHOOSE US</Typography>
				<Box>
					<Typography>Quality Service Providers</Typography>
					<Typography>
						We enable solution providers to establish a milestone payment
						system. This means that you as the customer always know what you are
						paying for and the money is only released to the solution provider
						when you approve the work.
					</Typography>
				</Box>

				<Box>
					<Grid container spacing={3}>
						<Grid item xs='auto'>
							<Grid container spacing={3}>
								<Grid item xs='auto'>
									<i>
										<svg
											width='16'
											height='16'
											viewBox='0 0 16 16'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<circle cx='8' cy='8' r='7.5' fill='#2752E7' />
										</svg>
									</i>
								</Grid>
								<Grid item xs={6}>
									Verified Vendors
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={8}>
							Only ACRA registered entities can sell their services
						</Grid>
					</Grid>
					<Grid container spacing={3}>
						<Grid item xs='auto'>
							<Grid container spacing={3}>
								<Grid item xs='auto'>
									<i>
										<svg
											width='16'
											height='16'
											viewBox='0 0 16 16'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<circle cx='8' cy='8' r='7.5' fill='#2752E7' />
										</svg>
									</i>
								</Grid>
								<Grid item xs={6}>
									Vendor Mangement
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={8}>
							Overview of all your past and existing contracts in one place
						</Grid>
					</Grid>
				</Box>

				<Box>
					<i>
						<img src={'mb2.png'} alt='vendors' />
					</i>
				</Box>
				<Typography>OUR FEATURE</Typography>
				<Box>
					<Typography>
						Basic customer relationship management and invoicing system
					</Typography>
					<Typography>
						For new entrepreneurs, we provide basic customer relationship
						management flow and invoicing assistance to kickstart your business
					</Typography>
				</Box>
				<Box>
					<i>
						<img src={'mb3.png'} alt='vendors' />
					</i>
				</Box>
				<Box>
					<i>
						<img src={'ads.png'} alt='ads' />
					</i>
				</Box>
				<Box>
					<i>
						<img src={'logo.png'} alt='logo' />
					</i>
					<Typography>
						Finance helps companies manage payments easily.
					</Typography>
				</Box>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid item xs={6}>
						<Typography>About</Typography>
						<Typography>Privacy Policy</Typography>
						<Typography>Terms of Service</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography>Contact Us</Typography>

						<Typography>
							<i>
								<svg
									width='10'
									height='8'
									viewBox='0 0 10 8'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M6.53923 4.11864L9.33289 1.72397V6.31364L6.53923 4.11864ZM3.97606 4.56056L4.78272 5.25223C4.90772 5.35923 5.09172 5.35923 5.21672 5.25223L6.02339 4.56056L8.70239 6.6659H1.29639L3.97606 4.56056ZM4.99956 4.56036L1.23389 1.3327H8.76522L4.99956 4.56036ZM0.666181 1.72397L3.45985 4.11831L0.666181 6.31331V1.72397ZM9.99951 6.99935V0.999349C9.99951 0.812682 9.82651 0.666016 9.66618 0.666016H0.332845C0.164178 0.666016 -0.000488281 0.810682 -0.000488281 0.999349V6.99935C-0.000488281 7.17435 0.158512 7.33268 0.332845 7.33268H9.66618C9.85351 7.33268 9.99951 7.16702 9.99951 6.99935Z'
										fill='#2752E7'
									/>
								</svg>
							</i>
							opn@leadiingtech.com
						</Typography>
						<Typography>
							<i>
								<svg
									width='10'
									height='10'
									viewBox='0 0 10 10'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M6 9.33327C5.44867 9.33327 5 8.8846 5 8.33327C5 7.78194 5.44867 7.33327 6 7.33327C6.55134 7.33327 7 7.78194 7 8.33327C7 8.8846 6.55134 9.33327 6 9.33327ZM1.66667 2.99994C2.218 2.99994 2.66667 3.44861 2.66667 3.99994C2.66667 4.55127 2.218 4.99994 1.66667 4.99994C1.11534 4.99994 0.666669 4.55127 0.666669 3.99994C0.666669 3.44861 1.11534 2.99994 1.66667 2.99994ZM6 6.66658C5.15967 6.66658 4.46933 7.29425 4.35633 8.10392L1.89567 5.64358C2.70567 5.53025 3.33333 4.84025 3.33333 3.99992C3.33333 3.08092 2.58567 2.33325 1.66667 2.33325C0.747667 2.33325 0 3.08092 0 3.99992C0 4.45692 0.185667 4.87125 0.484333 5.17259C0.486 5.17425 0.486667 5.17659 0.488333 5.17859L4.82167 9.51192C4.82367 9.51358 4.826 9.51392 4.82767 9.51592C5.12933 9.81458 5.54333 9.99992 6 9.99992C6.919 9.99992 7.66667 9.25225 7.66667 8.33325C7.66667 7.41425 6.919 6.66658 6 6.66658Z'
										fill='#2752E7'
									/>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M4.99984 -0.00012207C4.8155 -0.00012207 4.6665 0.149211 4.6665 0.333211C4.6665 0.517211 4.8155 0.666545 4.99984 0.666545C7.38917 0.666545 9.33317 2.61054 9.33317 4.99988C9.33317 5.18388 9.48217 5.33321 9.6665 5.33321C9.85084 5.33321 9.99984 5.18388 9.99984 4.99988C9.99984 2.24288 7.75684 -0.00012207 4.99984 -0.00012207Z'
										fill='#2752E7'
									/>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M4.99984 1.6665C4.8155 1.6665 4.6665 1.81584 4.6665 1.99984C4.6665 2.18384 4.8155 2.33317 4.99984 2.33317C6.47017 2.33317 7.6665 3.5295 7.6665 4.99984C7.6665 5.18384 7.8155 5.33317 7.99984 5.33317C8.18417 5.33317 8.33317 5.18384 8.33317 4.99984C8.33317 3.16184 6.83784 1.6665 4.99984 1.6665Z'
										fill='#2752E7'
									/>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M5.99984 4.99992C5.99984 5.18392 6.14884 5.33325 6.33317 5.33325C6.5175 5.33325 6.6665 5.18392 6.6665 4.99992C6.6665 4.08092 5.91884 3.33325 4.99984 3.33325C4.8155 3.33325 4.6665 3.48259 4.6665 3.66659C4.6665 3.85059 4.8155 3.99992 4.99984 3.99992C5.55117 3.99992 5.99984 4.44859 5.99984 4.99992Z'
										fill='#2752E7'
									/>
								</svg>
							</i>
							Terms of Service
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography>Support</Typography>
						<Grid container spacing={2} columns={16}>
							<Grid item xs={8}>
								<Typography>Help and support</Typography>
							</Grid>
							<Grid item xs={8} spacing={10}>
								<span>
									<i>
										<svg
											width='84'
											height='16'
											viewBox='0 0 84 16'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<g clip-path='url(#clip0_37_100)'>
												<path
													d='M34 7.40733C34 9.738 35.1627 11.8173 36.9807 13.1753V16L39.7047 14.5053C40.4313 14.706 41.2013 14.8153 41.9993 14.8153C46.4173 14.8153 49.9993 11.4993 49.9993 7.408C50 3.31667 46.418 0 42 0C37.582 0 34 3.316 34 7.40733V7.40733ZM41.156 5.33267L43.2427 7.50533L47.1673 5.33267L42.794 9.974L40.7573 7.802L36.782 9.97467L41.156 5.33267Z'
													fill='#2752E7'
												/>
											</g>
											<g clip-path='url(#clip1_37_100)'>
												<path
													d='M15.9958 16V15.9993H15.9998V10.1313C15.9998 7.26065 15.3818 5.04932 12.0258 5.04932C10.4125 5.04932 9.32985 5.93465 8.88785 6.77398H8.84118V5.31732H5.65918V15.9993H8.97251V10.71C8.97251 9.31732 9.23651 7.97065 10.9612 7.97065C12.6605 7.97065 12.6858 9.55998 12.6858 10.7993V16H15.9958Z'
													fill='#2752E7'
												/>
												<path
													d='M0.26416 5.31824H3.58149V16.0002H0.26416V5.31824Z'
													fill='#2752E7'
												/>
												<path
													d='M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0V0Z'
													fill='#2752E7'
												/>
											</g>
											<g clip-path='url(#clip2_37_100)'>
												<path
													d='M82.356 4.742C83.0067 4.28 83.554 3.70333 84 3.03933V3.03867C83.4047 3.29933 82.7713 3.47267 82.11 3.55667C82.79 3.15067 83.3093 2.51267 83.5533 1.744C82.9193 2.122 82.2193 2.38867 81.4733 2.538C80.8713 1.89667 80.0133 1.5 79.0773 1.5C77.2613 1.5 75.7993 2.974 75.7993 4.78067C75.7993 5.04067 75.8213 5.29067 75.8753 5.52867C73.1487 5.39533 70.7353 4.08867 69.114 2.09733C68.8313 2.58867 68.6647 3.15067 68.6647 3.75533C68.6647 4.89133 69.2493 5.898 70.122 6.48133C69.5947 6.47133 69.078 6.318 68.64 6.07733V6.11333C68.64 7.70733 69.7767 9.03133 71.268 9.33667C71.0007 9.41 70.71 9.44467 70.408 9.44467C70.198 9.44467 69.986 9.43267 69.7873 9.38867C70.212 10.6873 71.4187 11.6427 72.852 11.674C71.736 12.5467 70.3187 13.0727 68.7847 13.0727C68.516 13.0727 68.258 13.0607 68 13.028C69.4533 13.9647 71.1747 14.5 73.032 14.5C78.8207 14.5 82.5933 9.67067 82.356 4.742V4.742Z'
													fill='#2752E7'
												/>
											</g>
											<defs>
												<clipPath id='clip0_37_100'>
													<rect
														width='16'
														height='16'
														fill='white'
														transform='translate(34)'
													/>
												</clipPath>
												<clipPath id='clip1_37_100'>
													<rect width='16' height='16' fill='white' />
												</clipPath>
												<clipPath id='clip2_37_100'>
													<rect
														width='16'
														height='16'
														fill='white'
														transform='translate(68)'
													/>
												</clipPath>
											</defs>
										</svg>
									</i>
								</span>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<br />
				<Divider light variant='fullWidth' />
				<br />
				<Box>
					<Typography>Copyright @ OPNCORP2022. All Rights Reserved.</Typography>
				</Box>
			</Container> */}
			</Wrapper>
		</HelmetProvider>
	);
}
