import { Box, Skeleton } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

/**
 * Loads an image from a given URL or NextJS ImageProps object with a skeleton placeholder.
 * Extends the NextJS {@link https://nextjs.org/docs/app/api-reference/components/image | Image} component and uses all the same props.
 * @property {boolean} fill - if true, the image will fill the parent container
 * @property {string} alt - alt text for the image
 * @property {string} src - URL of the image
 * @property {import('react').CSSProperties} style - style object for the image
 * @return {JSX.Element} image with a skeleton placeholder
 */
export const SkeletonLoadedImage = (props: any) => {
	const [loaded, setLoaded] = useState(false);

	return (
		<Box
			sx={{
				position: 'relative',
				width: '100%',
				height: '100%'
			}}
		>
			<Image
				loading="lazy"
				alt={'props?.alt'}
				src={'props?.src'}
				onLoad={() => setLoaded(true)}
			/>
			<Skeleton
					variant="rectangular"
					sx={{
						zIndex: -1,
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						margin: '0 auto',
					}}
				/>
		</Box>
	);
};