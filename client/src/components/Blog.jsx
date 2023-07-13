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
} from "@mui/material";

import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router-dom";
import CurrentBlog from "./CurrentBlog";

import { db } from "../config/firebase";
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
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];
const Blog = () => {
  const navigate = useNavigate();
  const blogsCollectionRef = collection(db, "posts");
  const [blogList, setBlogList] = useState([]);

  const getMovieList = async () => {
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
    getMovieList();
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
    <Box display="flex" justifyContent="space-around">
      {blogList.map((userr) => {
        return (
          <Card
            sx={{ maxWidth: 345, margin: "50px 40px 0" }}
            key={userr.id}
            onClick={() => navigate(`/currentBlog/:${userr.id}`)}
          >
            <CardMedia
              component="img"
              height="220"
              image={userr.imgUrl}
              alt={userr.shortDesc}
              sx={{ marginBottom: "10px" }}
            />
            <CardContent>
              <Typography variant="h5" color="primary.main">
                {userr.shortDesc.slice(0, 30)}
              </Typography>
              {/* {`${userr.Timestamp.toDate()}`} */}
              <Typography variant="body2" color="text.secondary" mt={1.8}>
                {userr.longDesc.slice(0, 180)}
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
          </Card>
        );
      })}
    </Box>
  );
};

export default Blog;
