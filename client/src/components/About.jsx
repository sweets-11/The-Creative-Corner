import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Paper, Box } from "@mui/material";
import { css } from "@emotion/react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import AcUnitIcon from '@mui/icons-material/AcUnit';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
}));

const styles = {
  subtitle: css`
    margin-top: 16px;
  `,
};

const About = () => {
  const classes = useStyles();
  const date = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Paper className={classes.root} elevation="5">
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="h2"
          component="h1"
          alignItems={"center"}
          gutterBottom
        >
          Welcome to Our Blogging Community
        </Typography>
      </Box>

      <ImageList sx={{ width: "100%", height: 440, marginBottom: "40px"}}>
        <ImageListItem key="Subheader" cols={3}>
          <ListSubheader component="div">
            <Typography variant="h3">{months[date.getMonth()]} </Typography>
          </ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Typography variant="body1" sx={{margin: "5px 0 15px"}}>
       <AcUnitIcon /> At our blogging community, we provide a platform for individuals to
        express their thoughts, ideas, and experiences through blogging. Whether
        you're a seasoned writer or just starting out, this is the place for you
        to share your stories with a wider audience.
      </Typography>
      <Typography variant="h6" css={styles.subtitle}>
      <AcUnitIcon /> Create Your Own Blog
      </Typography>
      <Typography variant="body1" sx={{margin: "5px 0 15px"}}>
        We believe that everyone has a unique perspective to offer. By creating
        your own blog, you can unleash your creativity and connect with
        like-minded individuals. Share your passions, insights, and expertise
        with the world.
      </Typography>
      <Typography variant="h6" css={styles.subtitle}>
      <AcUnitIcon /> Explore a Variety of Blogs
      </Typography>
      <Typography variant="body1" sx={{margin: "5px 0 15px"}}>
        Dive into a diverse collection of blogs created by our community
        members. From travel adventures and lifestyle tips to technology trends
        and personal growth, there's something for everyone. Discover new ideas,
        gain knowledge, and engage in meaningful discussions.
      </Typography>
      <Typography variant="h6" css={styles.subtitle}>
      <AcUnitIcon /> Join Our Community
      </Typography>
      <Typography variant="body1" sx={{margin: "5px 0 15px"}}>
        We invite you to become a part of our vibrant blogging community.
        Connect with fellow bloggers, provide feedback, and find inspiration.
        Start your blogging journey today and let your voice be heard.
      </Typography>
    </Paper>
  );
};

export default About;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
    cols: 2,
  },
];
