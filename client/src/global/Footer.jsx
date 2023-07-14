import { useTheme } from "@emotion/react";
import { Box, Grid, Typography } from "@mui/material";
import { shades } from "../theme";
import { Link } from "react-router-dom";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Grid
      spcing={3}
      marginTop="70px"
      padding="35px 0"
      backgroundColor={neutral.light}
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
        sx={{ flexFlow: { xs: "column", sm: "column", lg: "row" } }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ width: { xs: "none", sm: "none", lg: "clamp(20%, 30%, 40%)" } }}
        >
          <Typography variant="h4" fontWeight="bold" mb="30px">
            <Link
              to="/home"
              style={{ textDecoration: "none", color: shades.secondary[500] }}
            >
              The Creative Corner
            </Link>
          </Typography>
          <div>
            The information provided on this blog is for general informational
            purposes only. It should not be considered as professional advice.
            Always consult with a qualified professional before making any
            decisions based on the information provided here.
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h4" fontWeight="bold" mb="25px">
            About Us
          </Typography>
          <Typography mb="25px">Careers</Typography>
          <Typography mb="25px">Our Stores</Typography>
          <Typography mb="25px">Lorem, ipsum dolor.</Typography>
          <Typography>Privacy Policy</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h4" fontWeight="bold" mb="25px">
            Terms of use
          </Typography>
          <Typography mb="25px">Lorem ipsum</Typography>
          <Typography mb="25px">Lorem, ipsum dolor.</Typography>
          <Typography mb="25px">Lorem, ipsum dolor.</Typography>
          <Typography>Lorem, ipsum.</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ width: { xs: "none", sm: "none", lg: "clamp(20%, 25%, 30%)" } }}
        >
          <Typography variant="h4" fontWeight="bold" mb="25px">
            Contact Us
          </Typography>
          <Typography mb="25px">123 Elm Street Anytown, USA 12345</Typography>
          <Typography mb="25px" sx={{ wordWrap: "break-word" }}>
            Email: blog123@gmail.com
          </Typography>
          <Typography>(7032)333-4444-552</Typography>
        </Grid>
      </Box>
      <Box  display="flex">
        <Typography
          color={shades.neutral[600]}
          margin={"30px auto 0"}
          variant="h4"
        >
          ©2023 The Creative Corner
        </Typography>
      </Box>
    </Grid>
  );
};

export default Footer;
