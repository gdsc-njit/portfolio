import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import React from 'react'

const UpcomingEvents = () => {
  return (
    <>
    			{/* upcoming events */}
			
				<Container sx={{ flex:1, py: 8}} maxWidth="md">
					<Typography color="white" component="h2" fontWeight="bold" lineHeight="1.5em" variant="h4">
						Upcoming Events
					</Typography>
				</Container>
    </>
  )
}

export default UpcomingEvents