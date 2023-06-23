import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Stack } from "@mui/material";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>LoginPage</h1>
      <Button variant="text" onClick={() => navigate("/register")}>
        Register
      </Button>
    </div>
  );
};

export default LoginPage;
