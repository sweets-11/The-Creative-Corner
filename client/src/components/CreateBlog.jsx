import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../config/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import "./createBlog.css";

import { db, storage, auth } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Navbar from "../global/Navbar/Navbar";
import Footer from "../global/Footer";

const FormContainer = styled(Container)`
  padding: 20px;
`;

const FormTitle = styled(Typography)`
  text-align: center;
  margin: 30px 0 20px;
`;

const CreateBlog = () => {
  const navigate = useNavigate();
  // New Movie States
  const [imageURL, setImageURL] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");

  const blogsCollectionRef = collection(db, "posts");

  //create blog posts
  const CreateBlogPosts = async () => {
    try {
      await addDoc(blogsCollectionRef, {
        user: auth?.currentUser?.displayName,
        mailId: auth?.currentUser?.email,
        imgUrl: imageURL,
        shortDesc: blogTitle,
        longDesc: blogDescription,
        CurrentUserId: auth?.currentUser?.uid,
        Timestamp: serverTimestamp(),
      });
      alert("Blog Created SuccessFully");
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };



  return (
    <>
      <Navbar />
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 0",
          }}
        >
          <Typography variant="h2">Create Blog</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Image Url:"
              type="url"
              variant="outlined"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              fullWidth

              required={true}
            />

              component="label"
            >
              Upload Image
              <input
                type="file"
                accept="image/*"
                onChange={(event) => {
                  setBlogImageUpload(event.target.files[0]);
                }}
                onClick={uploadBlog}
                style={{ display: "none" }}
              />
            </Button>

          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Title"
              required={true}
              type="text"
              variant="outlined"
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              type="text"
              variant="outlined"
              multiline
              rows={4}
              value={blogDescription}
              onChange={(e) => setBlogDescription(e.target.value)}
              fullWidth
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="button"
              variant="contained"
              color="primary"
              fullWidth
              onClick={CreateBlogPosts}
            >
              Upload
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};
export default CreateBlog;
