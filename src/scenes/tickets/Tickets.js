import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTickets } from "../../data/mockData";
import React,{useState} from "react";
import Header from "../../components/Header";
import Button from '@mui/material/Button';  
import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

const Tickets = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  
  const columns = [
    {
      field: "ticketid",
      headerName: "ID",
    },
    {
      field: "customer",
      headerName: "Customer",
      flex: 1,
      cellClassName: "customer-column--cell",   
    },
    {
      field: "subject",
      headerName: "Subject",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      label: "Select Status",
      flex: 1,
      type:'singleSelect',     
      valueOptions:['open','closed'],
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
      field: "createdon",
      headerName: "Created On",
      flex: 1,
    },
    {
      field: "action3",
      headerName: "Action",
      flex: 1,
      renderCell: ({ row: { action3 } }) => {
        return (
          <>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/viewtickets">
                <Button variant="contained" sx={{ bgcolor: 'success.main' }}><Typography>{action3}<VisibilityIcon sx={{display: 'flex', alignitems:'center'}}/></Typography></Button>
            </Link>
          </>
        );      
      }
    },
    {
      field: "action2",
      headerName: "",
      flex: 1,
      renderCell: ({ row: { action2 } }) => {
        return (
                <Button variant="contained" sx={{ bgcolor: 'danger.main' }}><Typography>{action2}<DeleteIcon sx={{display: 'flex', alignitems:'center'}}/></Typography></Button>
        );
      }
    },
  ];
  return (
    <Box m="20px">
      <Header title="Tickets" />
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
        <Box display='flex' justifyContent='end'  m={2}>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/newTicket'>
              <Button variant="contained" sx={{bgcolor:'success.main'}}>Add New Ticket</Button>
            </Link>
        </Box>
          <DataGrid
            checkboxSelection
            getRowId={(tickets) => tickets.ticketid}
            rows={mockDataTickets}
            columns={columns}
          />
        </Box>
      
    </Box>
  );
};

export default Tickets;
