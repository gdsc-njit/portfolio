import { SkeletonLoadedImage } from '@/components/client/SkeletonLoadedImage/SkeletonLoadedImage';
import { THEME } from '@/components/client/Theme/theme';
import { alpha, Box, Container, Typography } from '@mui/material';

/**
 * @returns {JSX.Element} Hero header for the homepage.
 */
export const HomepageHero = () => {
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
						(theme.palette.mode === THEME.DARK ? HeroImageDark : HeroImage) +
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
					</Typography>
				</Container>
			</Box>
		</section>
	);
};