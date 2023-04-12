import React from "react";
import Header from "../../components/Header";
import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import { tokens } from "../../theme";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

const ViewTickets = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const tickets = [
    {
      ticketid: 1,
      customer: "Jason Mamoa",
      usereply:'hi, i would like to know what is the time frame for getting my query of LinkedIn accounts. thanks',
      createdon: "15 Mar,2023 09:50 AM",
      adminName:"you",
      adminReply:"Hi Han, We are working on your order. We will deliver you accounts within 48 hours. Thank You, Dheeraj",
    }
  ];

  return (
    <Box m="20px">
      <Header title="View Tickets" />
      <Box m="40px 0 0 0" height="75vh" sx={{"& .MuiDataGrid-root": 
      { 
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
        <Card m="2">
          <CardContent>

            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { m: 1, width: "100%" } }}
              noValidateautoComplete="off"
            >
              <TextField
                id="outlined-multiline-flexible"
                label="Comments"
                multiline
                maxRows={4}
              />
            </Box>

            <Box display="flex" alignItems="center" m={2}>
                <Typography>Attach File:</Typography>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Button variant="contained" sx={{ml:1}} component="label">
                        Upload
                    <input hidden accept="image/*" multiple type="file" />
                    </Button>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file"/>
                    </IconButton>
                </Stack>
            </Box>
            <Box display="flex" justifyContent="end">
                <Button variant="contained" component="label">Reply</Button>
            </Box>
            <Box>
                <Box m={2}> 
                    <div>
                        {tickets.map(ticket => (
                            <div key={ticket.ticketid}>
                                <Box display='flex' alignItems="center" justifyContent="space-between">
                                    <Box alignItems="center" display='flex'>
                                        <HeadsetMicIcon />
                                        <Typography variant="h3" sx={{ml:1}}>{ticket.adminName}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography>{ticket.createdon}</Typography>
                                    </Box>
                                </Box>
                                <Typography m={3}>{ticket.adminReply}</Typography>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    <Box alignItems="center" display='flex'>
                                        <AccountCircleIcon/>
                                            <Typography variant="h3" sx={{ml:1}}>{ticket.customer}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography>{ticket.createdon}</Typography>
                                    </Box>
                                </Box>
                                <Typography m={3}>{ticket.usereply}</Typography>
                            </div>
                        ))}
                    </div>
                </Box>
            </Box>
            
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default ViewTickets;
