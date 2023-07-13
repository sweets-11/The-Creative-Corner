import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { getDocs, collection, loadBundle } from "firebase/firestore";
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
  } from "@mui/material";
  import {Route, Link, Routes, useParams} from 'react-router-dom';

const CurrentBlog = () => {
  const blogsCollectionRef = collection(db, "posts");
  const [blogList, setBlogList] = useState([]);
  const params = useParams();




    console.log(params);
  return <Box>
    <img src={blogList.imgUrl} alt="" />

  </Box>;
};

export default CurrentBlog;
