import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockallpricingrule } from "../../data/mockData";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { tokens } from "../../theme";

const AllPricingRules = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.2,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.2,
      cellClassName: "name-column--cell",
    },
    {
      field: "status",
      headerName: "Status",
      label: "Select Status",
      flex: 0.2,
      type: "singleSelect",
      valueOptions: ["Active", "InActive"],
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
      field: "appliedOn",
      headerName: "Applied On",
      flex: 1,
    },
    {
      field: "action1",
      headerName: "Action",
      flex: 0.2,
      renderCell: ({ row: { action1 } }) => {
        return (
          <>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/editpricingrules"
            >
              <Button variant="contained" sx={{ bgcolor: "warning.main" }}>
                <Typography>
                  {action1}
                  <EditIcon sx={{ display: "flex", alignitems: "center" }} />
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
      flex: 0.2,
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
      <Header title="All Pricing Rules" />
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
          getRowId={(id) => id.id}
          rows={mockallpricingrule}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default AllPricingRules;
