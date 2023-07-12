import "./App.css";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../config/firebase";
import {Box, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const Auth = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
       localStorage.setItem("isAuth", true);
       setIsAuth(true);
       navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <Box display="flex" justifyContent="center" alignItems="center" marginTop="25px">
    <Typography  variant="h1">Welcome TO The Creative Corner</Typography>
    </Box>
    <div className="loginPage">
    <p>Sign In With Google to Continue</p>
    <button className="login-with-google-btn" onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  </div>
  </>
  );
};

export default Auth;
