import React, { useState, useEffect } from "react";
import Auth from "../auth/Auth";
import { db, storage, auth } from "../config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
} from "@mui/material";
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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setBlogImageUpload(file);
  };

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
  const uploadBlog = async () => {
    if (!blogImageUpload) return;
    const filesFolderRef = ref(storage, `images/${blogImageUpload.name}`);
    try {
      await uploadBytes(filesFolderRef, blogImageUpload)
        .then(() => {
          const downloadUrl = getDownloadURL(filesFolderRef);
          return downloadUrl;
        })
        .then((url) => {
          setImageURL((prevImages) => [...prevImages, url]);
        });
    } catch (err) {
      console.error(err);
    }
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
                onChange={handleFileChange}
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
              type="submit"
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
