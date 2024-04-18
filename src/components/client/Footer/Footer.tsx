'use client'

import ListItem from "@mui/material/ListItem";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg">
	  <Grid container spacing={2} columns={16}>
  <Grid item xs={8}>
    <ListItem>xs=8</ListItem>
  </Grid>
  <Grid item xs={8}>
    <ListItem>xs=8</ListItem>
  </Grid>
</Grid>
      </Container>
    </footer>
  );
};

export default Footer;
