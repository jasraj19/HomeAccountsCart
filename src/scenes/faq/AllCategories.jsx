import React, { useState } from "react";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { Box, Typography, Button, useTheme } from "@mui/material";
import Header from "../../components/Header";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { mockallcategory } from "../../data/mockData";
import EditIcon from '@mui/icons-material/Edit';

const AllCategories = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [status, setStatus] = useState("");

  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "customer-column--cell",
    },
    {
      field: "parent",
      headerName: "Parent",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      label: "Select Status",
      flex: 1,
      type: "singleSelect",
      valueOptions: ["open", "closed"],
      editable: true,
      renderCell: ({ row: { status } }) => {
        return (
          <Box>
            <Typography>{status}</Typography>
          </Box>
        );
      },
    },
    {
      field: "action3",
      headerName: "Action",
      flex: 1,
      renderCell: ({ row: { action3 } }) => {
        return (
          <>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/editfaq"
            >
              <Button variant="contained" sx={{ bgcolor: "warning.main" }}>
                <Typography>
                  {action3}
                  <EditIcon
                    sx={{ display: "flex", alignitems: "center" }}
                  />
                </Typography>
              </Button>
            </Link>
          </>
        );
      },
    },
    {
      field: "action2",
      headerName: "",
      flex: 1,
      renderCell: ({ row: { action2 } }) => {
        return (
          <Button variant="contained" sx={{ bgcolor: "danger.main" }}>
            <Typography>
              {action2}
              <DeleteIcon sx={{ display: "flex", alignitems: "center" }} />
            </Typography>
          </Button>
        );
      },
    },
  ];

  return (
    <Box m={2}>
      <Box>
        <Header title="All Categories" />
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
        <Box display="flex" justifyContent="end" m={2}>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/newfaq"
          >
            <Button variant="contained" sx={{ bgcolor: "success.main" }}>
              Add New Faq
            </Button>
          </Link>
        </Box>
        <DataGrid
          checkboxSelection
          getRowId={(allcategory) => allcategory.id}
          rows={mockallcategory}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default AllCategories;
