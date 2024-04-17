import { Container, Typography } from '@mui/material';

export const metadata = {
	title: 'Home - GDSC NJIT',
};

const Homepage = async () => {
	return (
		<main id="home">

			{/* upcoming events */}
			<section id="upcoming-events">
				<Container sx={{ py: 8 }} maxWidth="md">
					<Typography color="text.primary" component="h2" fontWeight="bold" lineHeight="2.5em" variant="h4">
						Upcoming Events
					</Typography>
				</Container>
			</section>

			{/* about / who are we */}
			<section id="who-are-we">
				<Container sx={{ py: 8, lineHeight: '2em' }} maxWidth="md">
					<p>
						<dfn id="gsdc-defn">Google Developer Student Clubs</dfn> (<abbr>GDSC</abbr>) is a student-led
						community backed by Google Developers aimed at empowering undergraduate students from all
						disciplines to grow their knowledge in technology, build solutions for their local communities,
						and connect with other members from the Google community.
					</p>
					<h3>Creating impact and empowering students through technology</h3>
					<p>
						Whether you are new to software development or you&rsquo;ve been developing for quite a while,
						GDSC is a place where you can learn new technologies, make your ideas a reality, and collaborate
						to solve real-world problems. In  addition to solving problems, GDSC will allow you to connect
						with other technology enthusiasts from other GDSC chapters and the Google Developer Community.
						We will be hosting events and activities for all students throughout the academic year. We hope
						to see you there!
					</p>
				</Container>
			</section>
			{/* team list */}
		</main>
	);
};

export default Homepage;