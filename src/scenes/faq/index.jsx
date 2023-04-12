import React,{useState} from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Typography from "@mui/material/Typography";
import { tokens } from "../../theme";
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { mockFaqData } from "../../data/mockData";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "faqid",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Title",
      flex: 1,
      cellClassName: "name-column--cell",   
    },
    {
      field: "category",
      headerName: "Category",
      flex: 0.5,
    },
    {
      field: "status",
      headerName: "Status",
      label: "Select Status",
      flex: 0.5,
      type:'singleSelect',     
      valueOptions:['Active','Inactive'],
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
      field: "action3",
      headerName: "Action",
      flex: 0.5,
      renderCell: ({ row: { action2 } }) => {
        return (
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/viewFaq">
                <Button variant="contained" sx={{ bgcolor: 'success.main' }}>
                <Typography>
                {action2}
                <VisibilityIcon sx={{display: 'flex', alignitems:'center'}}/>
                </Typography>
                </Button>
            </Link>
        );
      }
    },
    {
      field: "action1",
      headerName: "",
      flex: 0.5,
      renderCell: ({ row: { action1 } }) => {
        return (
          <>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/editFaq">
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
    <Box m="20px">
    <Box>
      <Box>
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      </Box>
      <Box display='flex' justifyContent='end'>
      <Link style={{ textDecoration: 'none', color: 'white' }} to="/newfaq">
        <Button variant="contained" sx={{bgcolor:'secondary.main'}}>Add New Faq</Button>
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
            getRowId={(faq) => faq.faqid}
            rows={mockFaqData}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
      </Box>
    </Box>
  );
};

export default FAQ;


{/*
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

<Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}