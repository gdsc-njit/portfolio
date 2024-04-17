'use client'

import { ListItem, makeStyles } from "@mui/material";

import { Container, Grid, Typography } from "@mui/material";


export const Footer = () => {
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
