import HomepageHero from '@/components/client/HomePageHero/HomePageHero';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const metadata = {
	title: 'Home - GDSC NJIT',
};

const Home = async () => {
	return (
		<main id="home">
			<HomepageHero />
			{/* upcoming events */}
			<section id="upcoming-events" style={{backgroundColor: 'black'}}>
				<Container sx={{ flex:1, py: 8}} maxWidth="md">
					<Typography color="white" component="h2" fontWeight="bold" lineHeight="1.5em" variant="h4">
						Upcoming Events
					</Typography>
				</Container>
			</section>

			{/* about / who are we */}
			<section id="who-are-we" style={{backgroundColor: 'black'}}>
				<div style={{ padding: '0 8 0 8', lineHeight: '2em', color: 'white' }}>
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
				</div>
			</section>
			{/* team list */}
		</main>
	);
};

export default Home;