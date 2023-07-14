import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
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

import Navbar from "../global/Navbar/Navbar";
import Footer from "../global/Footer";

import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import { useNavigate } from "react-router-dom";

import { db, auth } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
];

const MyBlogs = () => {
  const navigate = useNavigate();
  const blogsCollectionRef = collection(db, "posts");
  const [blogList, setBlogList] = useState([]);

  const getBlogList = async () => {
    try {
      const snapshots = await getDocs(blogsCollectionRef);
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        console.log(data);
        data.id = doc.id;
        return data;
      });
      setBlogList(docs);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBlogList();
  }, []);

  const [expanded, setExpanded] = React.useState(false);
  const [direction, setDirection] = React.useState("up");
  const [hidden, setHidden] = React.useState(false);
  const currentUser = auth?.currentUser?.uid;

  const handleDirectionChange = (event) => {
    setDirection(event.target.value);
  };
  const read = "read more............";

  return (
    <>
    <Navbar />

    <Grid container spacing={2} direction="row" justifyContent="space-around">
      {blogList.map((userr) => {
          return (
            <>
              {userr.CurrentUserId === currentUser ? (
              <Grid
            container
            justifyContent="space-around"
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            key={userr.id}
          >
            <Card sx={{ maxWidth: 345, margin: "60px 40px 0" }} key={userr?.id}>
              <CardMedia
                component="img"
                height="220"
                image={userr?.imgUrl}
                alt={userr?.shortDesc}
                sx={{ marginBottom: "10px" }}
                onClick={() => navigate(`/currentBlog/${userr.id}`)}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  color="primary.main"
                  onClick={() => navigate(`/currentBlog/${userr.id}`)}
                >
                  {userr?.shortDesc?.slice(0, 30)}
                </Typography>
                {/* {`${userr.Timestamp.toDate()}`} */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  mt={1.8}
                  onClick={() => navigate(`/currentBlog/${userr.id}`)}
                >
                  {`${userr?.longDesc.slice(0, 180)} ${read}`}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="#75C2F6"
                  marginTop="30px"
                >
                  {`@${userr?.user?.toLowerCase()}`}
                </Typography>
              </CardContent>

              <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
                <FormControl
                  component="fieldset"
                  sx={{ mt: 1, display: "flex" }}
                >
                  <RadioGroup
                    aria-label="direction"
                    name="direction"
                    value={"direction"}
                    onChange={handleDirectionChange}
                    row
                  ></RadioGroup>
                </FormControl>
                <Box sx={{ position: "relative", mt: 10 }}>
                  <StyledSpeedDial
                    ariaLabel="SpeedDial playground example"
                    hidden={hidden}
                    icon={<SpeedDialIcon />}
                    direction={"left"}
                  >
                    {actions.map((action) => (
                      <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                      />
                    ))}
                  </StyledSpeedDial>
                </Box>
              </Box>
            </Card>
          </Grid>) : ""}
          </>
        );
      })}
      </Grid>
    <Footer />
    </>

  );
};

export default MyBlogs;
