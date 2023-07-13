import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { profilePic } from "../store";
import { useSelector } from "react-redux";

import { db} from "../config/firebase";
import {
  getDocs,
  collection,
} from "firebase/firestore";

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
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

const Blog = () => {

  const blogsCollectionRef = collection(db, "posts");
  const [blogList, setBlogList] = useState([]);

  const getBlogPost = async () => {
    try {
      const data = await getDocs(blogsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBlogList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    getBlogPost();
  }, []);

  const [expanded, setExpanded] = React.useState(false);
  const [direction, setDirection] = React.useState("up");
  const [hidden, setHidden] = React.useState(false);

  const handleDirectionChange = (event) => {
    setDirection(event.target.value);
  };

  const handleHiddenChange = (event) => {
    setHidden(event.target.checked);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {blogList.forEach((userr) => {
        <Card sx={{ maxWidth: 345, margin: "50px 40px 0" }} key={userr.id}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={userr.shortDesc}
            subheader={userr.Timestamp}
          />
          <CardMedia
            component="img"
            height="220"
            image={userr.imgUrl}
            alt={userr.shortDesc}
            sx={{ marginBottom: "10px" }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {userr.longDesc}
            </Typography>
          </CardContent>

          <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
            <FormControl component="fieldset" sx={{ mt: 1, display: "flex" }}>
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
        </Card>;
      })}
    </>
  );
};

export default Blog;
