import React,{useState} from 'react'
import { Box } from '@mui/system'
import Header from '../../components/Header'
import { Card,CardContent,InputLabel,TextField,MenuItem,Typography,FormControl} from '@mui/material'
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {Button} from '@mui/material';
import {Stack} from '@mui/system';
import {IconButton} from '@mui/material';
import {Link} from 'react-router-dom';


const Categories = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const handleChange = (event) => {
        setCategory(event.target.value);
      };
  return (
    <Box ml={2}>
      <Header title="Create New Category"/>
      <Card>
        <CardContent>
            <TextField variant="outlined" label="Name" fullWidth placeholder='Name' />
            <Box display='flex' alignItems='center' mt={1}>
            <Checkbox {...label} />
            <Typography>Is SubCategory</Typography>
            </Box>
              <FormControl fullWidth margin='normal'>
                <InputLabel id="demo-simple-select-label">Parent id</InputLabel>
                    <Select id="demo-simple-select" labelId="demo-simple-select-label" value={category} label='Parent id' onChange={handleChange}>
                        <MenuItem value={10}>General Faqs</MenuItem>
                        <MenuItem value={20}>Accounts Faqs</MenuItem>
                        <MenuItem value={30}>Payment Faqs</MenuItem>
                    </Select>
              </FormControl>
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
            <TextField variant="outlined" label="slug" margin='normal' fullWidth placeholder='https://AccountsCart.com/' />
            <TextField variant="outlined" label="Description" margin='normal' multiline fullWidth placeholder='Description' />
              <Box>
                <Link to="" style={{textDecoration: 'none', color: 'white'}}><Button variant='contained' sx={{ bgcolor:'success.main' }} margin='normal'>Submit</Button></Link>
              </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Categories
