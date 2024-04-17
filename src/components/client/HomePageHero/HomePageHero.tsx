// https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_horizontal_097s7oa.svg

import HeroImage from '@/assets/backgrounds/background_light.svg';
import HeroImageDark from '@/assets/backgrounds/background_dark.svg';
import wordmark from '@/assets/graphics/gdscwordmark.svg';
import { alpha, Box, Container, Typography } from '@mui/material';

/**
 * @returns {JSX.Element} Hero header for the homepage.
 */
export const HomepageHero = () => {

    const HeroImage = "https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_horizontal_097s7oa.svg";

	return (
		<section>
			<Box
				sx={{
					background: theme =>
						'linear-gradient(' +
						theme.palette.background.default +
						' 0%,' +
						alpha(theme.palette.background.default, 0.8) +
						'69%,' +
						theme.palette.background.default +
						' 100%), url(' +
						(HeroImage) +
						') no-repeat',
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
							alt="Google Developer Student Clubs University of Toronto Mississauga"
							fill="100%"
							id="gdsc-wordmark"
							src={wordmark}
							sx={{
								objectFit: 'contain',
								filter: theme =>
									theme.palette.mode == THEME.DARK ? 'grayscale(1)invert(1)brightness(1.5)' : 'unset',
							}}
						/>
					</Typography>
				</Container>
			</Box>
		</section>
	);
};