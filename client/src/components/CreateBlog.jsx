import React, { useState } from "react";
import { db, storage, auth } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
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
  // New Movie States
  const [imageURL, setImageURL] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogImageUpload, setBlogImageUpload] = useState(null);

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
      });
      // getBlogsList();
    } catch (err) {
      console.error(err);
    }
  };

  //upload file
  const uploadBlog =  () => {
    if (!blogImageUpload) return;
    const filesFolderRef = ref(storage, `images/${blogImageUpload.name}`);
       uploadBytes(filesFolderRef, blogImageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageURL((prev) => [...prev, url]);
        });
      });
    };

  return (
    <>
      <Navbar />
      <FormContainer>
        <FormTitle variant="h2">Create Blog</FormTitle>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
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
              variant="outlined"
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              value={blogDescription}
              onChange={(e) => setBlogDescription(e.target.value)}
              fullWidth
              required
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
      </FormContainer>
      <Footer />
    </>
  );
};
export default CreateBlog;
