import React from 'react'
import { Box, Card, CardContent, Grid, Typography, } from "@mui/material";
import Header from '../../components/Header';
const Map = () => {

  return (
    <Box margin='20px' width='90%'>
            <Header title="User" subtitle="USER INFO" />
            <Card>
                <CardContent>
                    <Grid container alignItems='center' spacing={2}>
                        <Grid sx={{ paddingX: 2 }} item md={6}>
                        <Box ml={10}>
                           <img src='assets\LOGO_final-1.png' alt='user'/>
                        </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} md={6}>
                            <Box ml={10}>
                                <Typography gutterBottom variant='h1' component='div'>
                                    Marky Zuchini
                                </Typography>
                                <Typography variant='h3' color='text.secondary' component='div'>
                                    Admin
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container marginTop='10px ' spacing={2}>
                        <Grid item md={6}>
                        <Box ml={10}>
                        <Typography gutterBottom variant='h1' component='div'>
                            E-Mail
                        </Typography>
                        <Typography variant='h3' color='text.secondary' component='div'>
                            bittuDon@gmail.com
                        </Typography>
                        </Box>
                        </Grid>
                        <Grid item md={6}>
                            <Box ml={10}>
                                <Typography gutterBottom variant='h1' component='div'>
                                    Phone Number
                                </Typography>
                                <Typography variant='h3' color='text.secondary' component='div'>
                                    0987654321
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
    </Box>
  )
}

export default Map
