import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box,Grid, Typography } from '@mui/material';
import Header from './Header'

const BasicMenu = ({ anchorEl, handleClose, open, menuItems }) => {
    return (
      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} >
        <Box sx={{bgcolor:'secondary.main'}} m={0}><Typography textAlign={`center`} fontSize={`20px`} color={`white`}>Notification</Typography></Box>
        {menuItems.map((item) => (
          <MenuItem onClick={handleClose} >
          <Box display='flex' justifyContent='space-between'>
          <Box mr={2}> 
            <img src={item.avatar}/>
          </Box>
        <Grid >
        <Grid item xs={8}>
        {item.date}
        </Grid>
          <Grid item xs={8}>
            {item.label}
          </Grid>
        </Grid>
          </Box>
          </MenuItem>
        ))}
      </Menu>
 
    )
}

export default BasicMenu