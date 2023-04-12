import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, TextField, Grid, Button, Typography } from "@mui/material";
import Header from "../../components/Header";
import axios from "axios";

const AddBlog = () => {

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [category,setCategory] = useState("");
  const [slug,setSlug] = useState("");
  const [image,setImage] = useState("");

  let token = sessionStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleSubmit = () => {
    axios.post("http://192.168.1.137:5000/api/v1/user/blog/create-blog",config,{
      title:title,
      description:description,
      category:category,
      slug:slug,
      image:image
    }).then((response)=>{
      console.log(response)
    }).catch((err) => {
      console.log(err)
    });
  }

  return (
    <Box>
      <Header title="Add Blogs" />
      <Card >
      <CardContent>
      <form action="" method="post" >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField variant="outlined" label="Title"  value={title} onChange={(e) => setTitle(e.target.value)}/>
          </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField variant="outlined" label="Description" multiline value={description} onChange={(e) => setDescription(e.target.value)}/>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField variant="outlined" label="Category" value={category} onChange={(e) => setCategory(e.target.value)}/>
          </Grid>
        </Grid>
        </Grid>
        <Button variant="contained" onClick={handleSubmit}>
          <Typography>Save</Typography>
        </Button>
      </form>
      </CardContent>
      </Card>
    </Box>
  );
};

export default AddBlog;
