import React from 'react'
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Typography from "@mui/material/Typography";
import { tokens } from "../../theme";
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { mockDataProducts   } from "../../data/mockData";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Products = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "productid",
      headerName: "ID",
      flex: 0.2,
    },
    {
      field: "productname",
      headerName: "Title",
      flex: 1,
      cellClassName: "name-column--cell",   
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
    },
    {
      field: "inStock",
      headerName: "Stock",
      flex: 0.5,
    },
    {
      field: "status",
      headerName: "Status",
      label: "Select Status",
      flex: 0.5,
      type:'singleSelect',     
      valueOptions:['Available','Unavailable'],
      editable: true,
      renderCell: ({ row: { status } }) => {
        return (
            <Box>
                <Typography>
                    {status}
                </Typography> 
            </Box>
        );
      },
    },
    {
      field: "action1",
      headerName: "",
      flex: 0.5,
      renderCell: ({ row: { action1 } }) => {
        return (
          <>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/editproducts">
                <Button variant="contained" sx={{ bgcolor: 'warning.main'  }}>
                  <Typography>
                    {action1}
                    <EditIcon sx={{display: 'flex', alignitems:'center'}}/>
                </Typography>
                </Button>
            </Link>
          </>
        );      
      }
    },
    {
      field: "action2",
      headerName: "",
      flex: 0.5,
      renderCell: ({ row: { action2 } }) => {
        return (
                <Button variant="contained" sx={{ bgcolor: 'danger.main' }}>
                <Typography>
                {action2}
                <DeleteIcon sx={{display: 'flex', alignitems:'center'}}/>
                </Typography>
                </Button>
        );
      }
    },
  ];

  return (
    <Box ml={2}>
      <Header title="Products"/>
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
        <Box mr={1} display='flex' justifyContent='end'>
        <Link to='/addproduct'>
            <Button variant='contained' sx={{bgcolor:'success.main'}}>
                Add Products  
            </Button>
        </Link>
        </Box>
          <DataGrid
            checkboxSelection
            getRowId={(products) => products.productid}
            rows={mockDataProducts}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
      </Box>
    </Box>

  )
}

export default Products
