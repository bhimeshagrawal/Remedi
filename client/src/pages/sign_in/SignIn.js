import * as React from "react";
import { lazy, Suspense } from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Loader from "../../Components/Loader";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Base from "../../base";
import axios from "axios";
let medi={color: "#4D77FF" };
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      Re-Medi{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const notify = (message) =>
    toast(message, {
      theme: "colored",
      color: "#456789",
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log(data);
    // eslint-disable-next-line no-console
    const userData = {
      user_id: data.get("userId"),
      password: data.get("password"),
    };
    console.log({
      userId: data.get("userId"),
      password: data.get("password"),
    });
    const response = await axios.post(
      `${Base()}/user/authenticate`,
      userData
    );
    console.log(response)
    if (response.data.success === false) {
      notify(response.data.message);
      // window.location.href="http://localhost:3001/"
    }
    else {
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("user_id", userData.user_id)
      notify("Welcome");
      if (userData.user_id == process.env.REACT_APP_CDC_USERID)
        window.location.href = `/admin_dashboard`
      else
        window.location.href = `/company_dashboard`
    }
    console.log(response.data);
  };
  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={theme}>
        <div className="p-4">

          <Grid
            container
            component="main"
            className="shadow-lg"
            style={({ height: "100vh" }, { borderRadius: 20 })}
          >
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderTopLeftRadius: "12px",
                borderBottomLeftRadius: "12px"
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
              sx={{
                borderTopRightRadius: "12px",
                borderBottomRightRadius: "12px"
              }}
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h4" mb={0} align="center">
                  <span className="display-6">Re-<span style={medi}>Medi</span></span>
                </Typography>
                <Typography
                  component="h3"
                  variant="subtitle1"
                  mb={4}
                  align="center"
                >
                </Typography>
                <hr />
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component="h1" variant="h6" className="fw-dark">
                  Sign In To Access Your Account :
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="userId"
                    label="User Id"
                    name="userId"
                    autoComplete="userId"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Typography className="fw-light">
                  Don't have an account? <Link to="./SignUp" style={signUpBtn}>Sign Up</Link>
                </Typography>
                  <Copyright sx={{ mt: 5 }} />
                </Box>
              </Box>
            </Grid>
          </Grid>

        </div>
      </ThemeProvider>
    </Suspense>
  );
}
let signUpBtn={cursor:"pointer"};