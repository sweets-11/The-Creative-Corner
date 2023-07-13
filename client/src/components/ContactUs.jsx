import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { css } from "@emotion/react";
import Navbar from "../global/Navbar/Navbar";
import Footer from "../global/Footer";

const styles = {
  container: css`
    padding: 20px;
  `,
  title: css`
    text-align: center;
  `,
};

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic here to handle form submission
  };

  return (
    <>
      <Navbar />
      <Container css={styles.container}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="h2" margin="30px 0 20px" css={styles.title}>
            Contact Us
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Name" variant="outlined" required fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="outlined"
              required
              type="email"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              required
              multiline
              rows={4}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default ContactUs;
