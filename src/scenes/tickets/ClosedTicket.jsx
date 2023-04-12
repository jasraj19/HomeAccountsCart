import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { Box, useTheme } from '@mui/system';
import { Typography } from '@mui/material';
import { mockClosedTickets } from "../../data/mockData";
import Button from '@mui/material/Button';  
import Header from '../../components/Header';
import { tokens } from "../../theme";   
import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';

const ClosedTicket = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
          field: "ticketid",
          headerName: "Ticket ID",
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
                    <Button variant="contained" sx={{ bgcolor: 'success.main' }}>
                      <Typography>
                        {action3}
                        <VisibilityIcon style={{display:'flex', alignItems:'center' }}/>
                      </Typography>
                    </Button>
                </Link>
              </>
            );      
          }
        },
      ];

  return (
    <Box m={2}>
        <Header title="Closed Tickets"/>
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
            getRowId={(tickets) => tickets.ticketid}
            rows={mockClosedTickets}
            columns={columns}
          />
        </Box>
    </Box>
  )
}

export default ClosedTicket
