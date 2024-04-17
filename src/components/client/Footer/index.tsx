import { Box, ButtonGroup, Container, Paper, Typography, styled } from '@mui/material';

import Image from 'next/image';

/**
 * A link for footer-flex. Takes the same props as "a".
 * @property {Object} props - props to pass to the link, same as "a" element
 *
 * @return {JSX.Element} Footer link
 */
const FooterLink = (props: any) => (
	<Box
		component="li"
		sx={{
			color:'blue',
			padding: {
				xs: '0.5em 0',
				sm: '0',
			},
		}}
	>
		
	</Box>
);

/**
 * @returns {JSX.Element} Footer component
 */
export const Footer = () => {
	return (
		<Paper
			elevation={3}
			component="footer"
			sx={{
				margin: '1rem 0 0 0',
				padding: '1rem 0',
				width: '100%',
			}}
		>
			<Container maxWidth="xl">
				<Box
					id="footer"
					sx={{
						display: {
							xs: 'block',
							sm: 'flex',
						},
					}}
				>
					<Typography
						component="h2"
						sx={{
							width: {
								sm: '12.5rem',
								xs: '100%',
							},
							margin: '0 !important',
							paddingBottom: {
								sm: '0',
								xs: '1em',
							},
						}}
					>
						
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							alignContent: {
								sm: 'center',
								xs: 'flex-start',
							},
							display: 'flex',
							flexDirection: {
								xs: 'column',
								sm: 'row',
							},
							flexWrap: 'wrap',
							justifyContent: 'flex-start',
						}}
					>
					</Box>
				</Box>

				<Box
					sx={{
						alignItems: {
							sm: 'center',
							xs: 'flex-start',
						},
						display: 'flex',
						flexWrap: 'wrap',
						padding: {
							sx: '0 1em',
							sm: '0',
						},
						flexDirection: {
							sm: 'row',
							xs: 'column',
						},
						width: '100%',
					}}
				>
					<ul style={{ paddingTop: '1em' }}>
						<FooterLink href="https://github.com/utmgdsc/website/issues/new/choose" external>
							Improve this page on GitHub
						</FooterLink>
					</ul>
					<ButtonGroup
						id="social"
						sx={{
							flexGrow: 1,
							flexFlow: 'row-reverse wrap',
							textAlign: 'right',
						}}
					>
						
					</ButtonGroup>
				</Box>
			</Container>
		</Paper>
	);
};