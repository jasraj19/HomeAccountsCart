import {useState} from 'react'
import { Box, Card ,CardContent, TextField, useTheme ,InputLabel,Button} from "@mui/material";
import Header from '../../components/Header';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';

const EditFaq = () => {
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const handleChange = (event) => {
        setCategory(event.target.value);
      };
    const handleChangesub = (event) => {
        setSubCategory(event.target.value);
      };
  return (
    <Box m={2}>
      <Header title='Edit FAQ'/>
        <Card>
            <CardContent>
            <Box m={2}>
                    <TextField id="outlined-basic" margin='normal' sx={{width:'100%'}} label="Title" variant="outlined" />
                        <FormControl fullWidth margin='normal'>
                            <InputLabel id="demo-simple-select-label"> Select Category</InputLabel>
                                <Select id="demo-simple-select" labelId="demo-simple-select-label" value={category} label='Select Category' onChange={handleChange}>
                                    <MenuItem value={10}>General Faqs</MenuItem>
                                    <MenuItem value={20}>Accounts Faqs</MenuItem>
                                    <MenuItem value={30}>Payment Faqs</MenuItem>
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
                    <TextField id="outlined-basic" margin='normal' sx={{width:'100%'}} label="Content" multiline maxRows={4} variant="outlined" />
                    <Box>
                        <Link style={{ textDecoration: 'none', color: 'white'   }} to=""><Button variant='contained' margin='normal'>Save Changes</Button></Link>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    </Box>
  )
}

export default EditFaq
