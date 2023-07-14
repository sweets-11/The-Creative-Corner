import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ Component }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) {
      navigate("/");
    }
  }, []);

  return <div>
    <Component />
  </div>;
};

export default Protected;
