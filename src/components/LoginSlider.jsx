import React from "react";
import { Box, Grid, GridItem,Typography } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const LoginSlider = ({ images }) => {
  const splideOptions = {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    perPage: 1,
    perMove: 1  ,
    autoplay: "true",
    interval: 2000,
    speed: 1000,
    breakpoints: {
      768: {
        perPage: 1,
        gap: "0.5rem",
      },
      576: {
        perPage: 1,
        gap: "0.5rem",
      },
    },
  };

  return (
    <>
      <Box>
        <Grid container spacing={2}>
          {/* <Grid item xs={12}>
            <Typography variant="h2" sx={{color:'white',marginTop:"50px" , marginLeft:'20px'}}>
              Let's kick-start the amazing journey to creating growth-oriented
              accounts for you!
            </Typography>
          </Grid> */}
        <Grid item xs={12} >
          <Splide options={splideOptions}>
            {images.map((images, index) => (
              <SplideSlide key={index}>
                <img src={images} style={{height:'100vh',width:'100%'}} alt={`Slide ${index}`} />
              </SplideSlide>
            ))}
          </Splide>
        </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LoginSlider;
