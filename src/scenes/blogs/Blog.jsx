import React, { useEffect, useState } from "react";
import { Box, Button, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import axios from "axios";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

const Blog = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [blogs, setBlogs] = useState([]);

  let token = sessionStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.137:5000/api/v1/user/blog/all-blogs?limit=3&skip=0",
          config
        );
        setBlogs(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const columns = [
    { 
      field: "author", 
      headerName: "author",
      flex: 0.2, 
    },
    { 
      field: "description", 
      headerName: "Description", 
      flex: 0.2,
    },
    { 
      field: "category", 
      headerName: "Category", 
      flex: 0.2,
    },
    { 
      field: "image", 
      headerName: "Image", 
      flex: 0.2,
    },
    { 
      field: "slug", 
      headerName: "Slug", 
      flex: 0.2,
    },
    { 
      field: "createdAt", 
      headerName: "Created At", 
      flex: 0.2,
    },
    { 
      field: "updatedAt", 
      headerName: "Updated At", 
      flex: 0.2,
    },
  ];

  return (
    <Box>
      <Box display={`flex`} justifyContent={"space-between"}>
        <Box ml={2}>
          <Header title="Blog" />
        </Box>
        <Box mr={2}>
          <Link to="/addblog">
            <Button variant="contained">Add Blog</Button>
          </Link>
        </Box>
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={blogs}
          columns={columns}
          getRowId={(row) => row.id}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Blog;
