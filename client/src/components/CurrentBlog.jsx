import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { getDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import Navbar from "../global/Navbar/Navbar";
import Footer from "../global/Footer";
import {
  Button,
  Container,
  Typography,
  TextField,
  Box,
  Grid,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

const CurrentBlog = () => {
  const { userID } = useParams();
  const navigate = useNavigate();
  const [thisBlogPost, setThisBlogPost] = useState([]);

  const deletePost = async () => {
    const postDoc = doc(db, "posts", userID);
    await deleteDoc(postDoc);
    navigate("/home");
  };

  const getUserdetails = async () => {
    const docRef = doc(db, "posts", userID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setThisBlogPost(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getUserdetails();
  }, []);

  return (
    <>
      <Navbar />
      <Grid container spacing={2} direction="row" justifyContent="space-around">
        <Grid container justifyContent="space-around" item>
          <Box sx={{ margin: "60px 40px 0" }}>
            <img
              width="50%"
              src={thisBlogPost?.imgUrl}
              alt={thisBlogPost?.shortDesc}
              sx={{ marginBottom: "10px" }}
            />
            <Box>
              <Typography variant="h2" color="primary.main" marginTop="30px">
                {thisBlogPost?.shortDesc}
              </Typography>
              <Typography variant="body1" color="text.secondary" mt={1.8}>
                {thisBlogPost?.longDesc}
              </Typography>
              <Typography variant="subtitle2" color="#75C2F6" marginTop="30px">
                {`@${thisBlogPost?.user?.toLowerCase()}`}
              </Typography>
              <Typography
                variant="subtitle2"
                marginTop="10px"
                marginBottom="50px"
              >
                {`${thisBlogPost?.Timestamp?.toDate()}`}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Button
          variant="outlined"
          onClick={() => navigate(`/updateBlog/${userID}`)}
        >
          Update
        </Button>
        <Button variant="outlined" onClick={deletePost}>
          Delete This Blog
        </Button>
      </Grid>
      <Footer />
    </>
  );
};

export default CurrentBlog;

export const UpdateBlog = () => {
  const { userID } = useParams();
  const navigate = useNavigate();
  const [imageURL, setImageURL] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");

  const updateMovieTitle = async () => {
    const blogPost = doc(db, "posts", userID);
    await updateDoc(blogPost, {
      imgUrl: imageURL,
      shortDesc: blogTitle,
      longDesc: blogDescription,
    });
    navigate("/home");
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <Typography variant="h2">Update Blog</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Updated Image Url:"
            type="url"
            variant="outlined"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Updated Title"
            required
            type="text"
            variant="outlined"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Updated Description"
            type="text"
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
            onClick={updateMovieTitle}
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
