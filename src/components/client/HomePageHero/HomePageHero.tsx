'use client'

import wordmark from '@/assets/graphics/gdsc-njit.svg';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SkeletonLoadedImage from '../SkeletonLoadedImage/SkeletonLoadedImage';

/**
 * @returns {JSX.Element} Hero header for the homepage.
 */
const HomepageHero = () => {

	return (
		<section>
			<Box
				sx={{
					background: 'linear-gradient(rgb(18, 18, 18) 0%, rgba(18, 18, 18, 0.8) 69%, rgb(18, 18, 18) 100%) 0% 0% / cover, url("https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_horizontal_097s7oa.svg") no-repeat',
					backgroundSize: 'cover',
					marginBottom: '-15vh',
					pb: 6,
					pt: 8,
				}}
			>
				<Container maxWidth="sm" sx={{ height: '50vh', position: 'relative' }}>
					<Typography
						align="center"
						color="text.primary"
						component="h1"
						gutterBottom
						sx={{
							alignItems: 'center',
							display: 'flex',
							flexDirection: 'column',
							height: '50vh',
							justifyContent: 'center',
							margin: 'auto',
							userSelect: 'none',
						}}
						variant="h2"
					>
						<Box
							component={SkeletonLoadedImage}
							alt="Google Developer Student Clubs New Jersey Institute of Technology"
							fill="100%"
							id="gdsc-wordmark"
							src={wordmark}
							sx={{
								objectFit: 'contain'
							}}
						/>
					</Typography>
				</Container>
			</Box>
		</section>
	);
};

export default HomepageHero;