import React from 'react'
import { Box, Card, Typography, useTheme, CardContent, TextField, Button, Stack} from "@mui/material";
import Header from '../../components/Header';
import { tokens } from "../../theme";
import IconButton from "@mui/material/IconButton";

const AddNewTicket = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box m={2}>
        <Header title="Add New Tickets" />
        <Card>
            <CardContent>
                <TextField id="outlined-basic" margin='normal' fullWidth label="Subject" variant="outlined"/>
                <TextField id="outlined-multiline-flexible" label="Query" margin='normal' placeholder='Write Here' fullWidth multiline maxRows={4} />
                <Box mt={2}>
                    <Typography variant='h5' sx={{ margin: 1 }}>
                        Attach Your File:
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={2}>
                    <Button variant="contained" sx={{ml:1, bgcolor: 'success.main' }} component="label">
                    <input  multiple type="file"/>
                    </Button>
                    <IconButton color="primary" aria-label="upload picture" sx={{ml:2}} component="label">
                        <input hidden accept="image/*" type="file"/>
                    </IconButton>
                </Stack>
                </Box>
                <Box mt={2}>
                    <Button variant='contained'>Submit</Button>
                </Box>
            </CardContent>
        </Card>
    </Box>
  )
}

export default AddNewTicket
