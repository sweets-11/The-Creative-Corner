import React, { useState } from "react";
import Navbar from "../global/Navbar/Navbar";
import Footer from "../global/Footer";
import { css } from "@emotion/react";
import { Button, TextField, Grid, Box } from '@mui/material';



const formStyles = css`
  padding: 2rem;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;


const CreateBlog = () => {

  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here, e.g., sending data to the server
    console.log('Image:', imageFile);
    console.log('Title:', title);
    console.log('Description:', description);
    // Reset the form fields
    setImageFile(null);
    setTitle('');
    setDescription('');
  };

  return (
    <>
    <Navbar />
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      marginTop={"80px"}
    >
      <Grid item xs={12} sm={8} md={6} lg={6}>
        <Box
          css={formStyles}
          boxShadow={4}
        >
          <form onSubmit={handleSubmit}>
            <label htmlFor="upload-file">
              <Button
                component="span"
                variant="contained"
                color="primary"
                fullWidth
              >
                Upload Image
              </Button>
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              id="upload-file"
            />

            <TextField
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              margin="normal"
              fullWidth
              required="true"
            />

            <TextField
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              margin="normal"
              fullWidth
              required="true"
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Upload
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
    <Footer />
    </>
  );
};

export default CreateBlog;