import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { getDoc, doc } from "firebase/firestore";
import Navbar from "../global/Navbar/Navbar";
import Footer from "../global/Footer";
import {
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Typography,
  Box,
  FormControl,
  RadioGroup,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Grid,
} from "@mui/material";
import { useParams } from "react-router-dom";

const CurrentBlog = () => {
  const { userID } = useParams();
  const [thisBlogPost, setThisBlogPost] = useState([]);

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
        <Grid
          container
          justifyContent="space-around"
          item
          xs={12}
          sm={6}
          md={6}
          lg={12}
        >
          <Box
            sx={{ margin: "60px 40px 0" }}
          >
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
              <Typography variant="subtitle2" marginTop="10px">
                {`${thisBlogPost?.Timestamp?.toDate()}`}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default CurrentBlog;
