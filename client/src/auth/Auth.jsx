import "./App.css";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../config/firebase";
import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, profile } from "../store";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const photoUrl = result.user.photoURL;

        dispatch(profile({ pic: photoUrl }));
        dispatch(login({ name: name, email: email }));
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        // paddingTop="200px"
      >
        <Typography
          fontFamily="Cinzel, sans-serif"
          sx={{ fontSize: { xs: "1.3rem", sm: "3rem", lg: "3rem" } , marginTop: "100px" }}
        >
          Welcome TO The Creative Corner
        </Typography>
        <Typography
          fontFamily="Fauna One, sans-serif"
          sx={{ fontSize: { xs: ".9rem", sm: "2rem", lg: "2rem" }, marginTop: "20px" }}
          >
          Sign In With Google to Continue
        </Typography>
          </Box>
      <div className="loginPage">
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </Container>
  );
};

export default Auth;
