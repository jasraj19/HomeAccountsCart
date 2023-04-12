import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import {Box, Button, Card, CardContent, TextField, Typography} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import LoginSlider from "../LoginSlider";
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = "6LeYLGglAAAAABrjATev91CRym39aoLMKMwX6Bzz";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const captchaRef = useRef();
  
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://192.168.1.137:5000/api/v1/user/login",{
        
        email: email,
        password: password,
      })
      .then(response => {
        const token = response.data.token;
        sessionStorage.setItem('token', token);
        const isAdmin = response.data.isAdmin;
        if (isAdmin) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
        window.location.href = '/';
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const images = [
    "https://www.searchenginejournal.com/wp-content/uploads/2021/08/top-5-reasons-why-you-need-a-social-media-manager-616015983b3ba-sej-760x400.webp",
    "https://www.searchenginejournal.com/wp-content/uploads/2021/02/social-media-opportunities-601bc9d146e00-760x400.webp",
  ];

  return (
    <Box m={2}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={7} sx={{ bgcolor: "#3a5a9b", minHeight: "100vh" }}>
            <Box>
              <LoginSlider images={images} />
            </Box>
          </Grid>
          <Grid xs={5}>
            <Box mt={1}>
              <Card sx={{ marginLeft: "20px", boxShadow: 3 }}>
                <CardContent>
                  <Box>
                    <img
                      src="assets\LOGO_final-1.png"
                      style={{ height: "60px" }}
                    />
                  </Box>
                  <Typography variant="h1" margin={`20px 0`}>
                    Welcome to Accounts Cart
                  </Typography>
                  <Typography variant="h3" margin={`20px 0`}>
                    Login To Your Account
                  </Typography>

                  <form
                    action=""
                    id="login"
                    method="post"
                    onSubmit={handleSubmit}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          label="E-mail"
                          type="email"
                          required
                          placeholder="Enter your E-mail"
                          name="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          label="Password"
                          type="password"
                          required
                          placeholder="Enter Your Password"
                          name="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12}> 
                        <ReCAPTCHA
                          sitekey={SITE_KEY}
                          // onChange={onChange}
                          ref={captchaRef}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              value="allowExtraEmails"
                              color="primary"
                            />
                          }
                          label="Remember Password"
                        />
                      </Grid>

                      <Grid item xs={6} justifyContent={`end`}>
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/forgetpassword"
                        >
                          <Typography>Forget Password?</Typography>
                        </Link>
                      </Grid>

                      <Grid item xs={12}>
                        <Button
                          sx={{ width: "100%" }}
                          type="submit"
                          variant="contained"
                          value="Login"
                        >
                          <Typography>Login</Typography>
                          {error && (
                            <Typography variant="body2" color="error">
                              {error}
                            </Typography>
                          )}
                        </Button>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          variant="h6"
                          margin={`15px 0 5px 0`}
                          textAlign={`center`}
                        >
                          Need AccountsCart?{" "}
                          <span>
                            <Link to="/signup">Create an Account</Link>
                          </span>
                        </Typography>
                        <Typography variant="h6" margin={`15px 0 5px 0`}>
                          By Signing this you agree to the{" "}
                          <span>
                            <Link to="/terms">Terms and Conditions.</Link>
                          </span>
                        </Typography>
                        <Typography variant="h6">
                          &copy; 2023-AccountsCart. All Rights Reserved
                        </Typography>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
