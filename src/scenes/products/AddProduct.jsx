import React,{useState} from 'react'
import { Box } from '@mui/system'
import Header from '../../components/Header'
import Checkbox from '@mui/material/Checkbox';
import { FormControl } from '@mui/material';
import {Select} from '@mui/material';
import { Card, CardContent, Typography,TextField,InputLabel,MenuItem,Button,Stack } from '@mui/material'
import IconButton from "@mui/material/IconButton";
import { Link } from 'react-router-dom';

const AddProduct = () => {
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const handleChangesub = (event) => {
    setSubCategory(event.target.value);
  };
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  
  return (
    <Box ml={2}>
      <Header title='Add Product'/>
      <Card>
        <CardContent>
            <Typography>Is Aged? <Checkbox {...label} /></Typography>
            <TextField id="outlined-basic" margin='normal' fullWidth label="Banner Title" variant="outlined" />
            <TextField id="outlined-basic" margin='normal' fullWidth label="Title" variant="outlined" />
            <FormControl fullWidth margin='normal'>
                            <InputLabel id="demo-simple-select-label"> Select Category</InputLabel>
                                <Select id="demo-simple-select" labelId="demo-simple-select-label" value={category} label='Select Category' onChange={handleChange}>
                                    <MenuItem value={10}>Email Accounts</MenuItem>
                                    <MenuItem value={20}>Social Accounts</MenuItem>
                                    <MenuItem value={30}>Reviews</MenuItem>
                                </Select>
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                    <InputLabel id="demo-simple-select-label">Select Sub Category</InputLabel>
                            <Select id="demo-simple-select" labelId="demo-simple-select-label" value={subCategory} label='Select Sub Category' onChange={handleChangesub}>
                                <MenuItem value={10}>Uncategorised</MenuItem>
                                <MenuItem value={20}>Digital Marketing</MenuItem>
                                <MenuItem value={30}>Email Accounts</MenuItem>
                                <MenuItem value={40}>Social Accounts</MenuItem>
                                <MenuItem value={50}>General Faqs</MenuItem>
                                <MenuItem value={60}>Accounts Faqs</MenuItem>
                                <MenuItem value={70}>Payment</MenuItem>
                                <MenuItem value={90}>Email Accounts</MenuItem>
                            </Select>
                    </FormControl>
                    <FormControl fullWidth margin='normal'>
                    <InputLabel id="demo-simple-select-label">Product Tag</InputLabel>
                            <Select id="demo-simple-select" labelId="demo-simple-select-label" value={subCategory} label='Product Tag' onChange={handleChangesub}>
                                <MenuItem value={10}>Fresh</MenuItem>
                                <MenuItem value={20}>PVA</MenuItem>
                                <MenuItem value={30}>Aged</MenuItem>
                                <MenuItem value={40}>Custom</MenuItem>
                            </Select>
                    </FormControl>
                    <Stack direction="row" alignItems="center" spacing={2}>
                    <Button variant="contained" sx={{ml:1, bgcolor: 'success.main' }} component="label">
                    <input  multiple type="file"/>
                    </Button>
                    <IconButton color="primary" aria-label="upload picture" sx={{ml:2}} component="label">
                        <input hidden accept="image/*" type="file"/>
                    </IconButton>
                </Stack>
                <TextField id="outlined-basic" margin='normal' multiline fullWidth label="Description" placeholder='Describe' variant="outlined" />
                <TextField id="outlined-basic" margin='normal' fullWidth label="Stock" placeholder='Describe' variant="outlined" />
                <TextField id="outlined-basic" margin='normal' fullWidth label="Slug" placeholder='https://www.accountscart.com/products/' variant="outlined" />
                <TextField id='outlined-basic' margin='normal' fullWidth label="canonical" placeholder='canonical Link' variant='outlined'/>
                <TextField id='outlined-basic' margin='normal' fullWidth label="Meta title" placeholder='Meta Title' variant='outlined'/>
                <TextField id='outlined-basic' margin='normal' multiline fullWidth label="Meta Description" placeholder='Meta Description' variant='outlined'/>
                <Link style={{textDecoration:'none'}} to=''>
                    <Button variant='contained' sx={{ bgcolor:'success.main' }}>
                        save
                    </Button>
                </Link>
        </CardContent>
      </Card>
    </Box>
  )
}

export default AddProduct
