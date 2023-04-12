import { Box, Typography, Grid, Card, CardContent, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import LoginSlider from "../LoginSlider";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword,setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://192.168.1.137:5000/api/v1/user/register", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        cpassword: confirmpassword,
        contact: phoneNumber,
      }).then((res) => {
        res.status === 200 ? navigate("/Login"): console.log(res.status);
      }).catch((err) => {
        console.log(err)
      });
  };

  const images = [
    "https://www.searchenginejournal.com/wp-content/uploads/2021/08/top-5-reasons-why-you-need-a-social-media-manager-616015983b3ba-sej-760x400.webp",
    "https://www.searchenginejournal.com/wp-content/uploads/2021/02/social-media-opportunities-601bc9d146e00-760x400.webp",
  ];

  return (
    <Box m={0}>
      <Grid container spacing={0}>
        <Grid xs={7} sx={{ minHeight: "100vh" }}>
          <Box>
            <LoginSlider images={images} />
          </Box>
        </Grid>
        <Grid xs={5}>
          <Box mt={1}>
            <Card sx={{ margin: "0 20px", boxShadow: 3 }}>
              <CardContent>
                <Box>
                  <img
                    src="assets\LOGO_final-1.png"
                    style={{ height: "60px" }}
                  />
                </Box>
                <Typography variant="h1" margin={`10px 0`}>
                  Welcome to Accounts Cart
                </Typography>
                <Typography variant="h3" margin={`10px 0`}>
                  Create A New Account
                </Typography>

                <form action="" method="post">
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        placeholder="Enter your First Name"
                        autoFocus
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        placeholder="Enter your Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="New-Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name=" confirm password"
                        label="Confirm Password"
                        type="password"
                        id="cpassword"
                        // autoComplete="New-Password"
                        value={confirmpassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="phoneNumber"
                        name="phoneNumber"
                        label="Phone Number"
                        placeholder="Enter your Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        sx={{ width: "100%" }}
                        type="submit"
                        variant="contained"
                        onClick={handleSubmit}
                      >
                        <Typography>SignUp</Typography>
                      </Button>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography textAlign={`center`}>
                        Already have an account?{" "}
                        <Link
                          style={{ textDecoration: "none", color: "royalblue" }}
                          to="/Login"
                        >
                          Sign in
                        </Link>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6">
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
  );
};

export default SignUp;

























  // const handleSubmit = () => {
    
  //     axios
  //       .post("http://192.168.1.137:5000/api/v1/user/register", {
  //         firstName: firstName,
  //         lastName: lastName,
  //         email: email,
  //         password: password,
  //         mobile: phoneNumber,
  //       })
  //       .then((res) => {
  //         res.status === 200 ? navigate("/Login") : console.log(res.status);
  //       })
  //       .then((error) => {
  //         console.log(error)
  //       })
    
  // };
  