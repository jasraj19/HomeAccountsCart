import React, { useState } from "react";
import { Box, Card, CardContent, TextField, Typography, InputLabel, MenuItem, FormControl, Select, Button} from "@mui/material";
import Header from "../../components/Header";
import Checkbox from "@mui/material/Checkbox";

const EditProduct = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [category, setCategory] = useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const [subCategory, setSubCategory] = useState("");
  const handleChangesub = (event) => {
    setSubCategory(event.target.value);
  };

  const mockdataeditproduct = [
    {
      checked: "isaged",
      bannertitle: "",
      title: "Aged AOL Account",
      pcategory: "Email Accounts",
      productcategory1: "Email accounts",
      productcategory2: "Social Accounts",
      productcategory3: "Reviews",
      subcategory: "",
      prducttag: "",
      description: "Buy AOL Accounts in bulk so that you can use them as a basis for your social media and maximize all your marketing and branding campaigns. At Bulk Accounts, we provide high-quality AOL accounts that are created with unique IPs and are manually tested. We are one of the leading and well-reputed providers of these bulk accounts. If you want to get the best output from your marketing campaigns, then getting our bulk accounts will be a wise decision.",
      Image: "",
      stock: "999999",
      price: "0.8",
      slug: "",
      Keywords: "",
      canonicallink: "",
      metatitle: "",
      metadescription: "",
      action: "Save",
    },
  ];
  return (
    <Box m={2}>
      <Header title="Edit Product" />
      <Box>
        <Card>
          <CardContent>
            <div>
              {mockdataeditproduct.map((item) => (
                <div>
                  <Typography>
                    {item.checked} <Checkbox {...label} defaultChecked />
                  </Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    label="Banner Title"
                    value={item.bannertitle}
                  />
                  <TextField
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    label="Title"
                    value={item.title}
                  />
                  <FormControl fullWidth margin="normal">
                    <InputLabel
                      id="demo-simple-select-label"
                      placeholder="Email Accounts"
                    >
                      Select Category
                    </InputLabel>
                    <Select
                      id="demo-simple-select"
                      labelId="demo-simple-select-label"
                      value={category}
                      label="Email Accounts"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>{item.productcategory1}</MenuItem>
                      <MenuItem value={20}>{item.productcategory2}</MenuItem>
                      <MenuItem value={30}>{item.productcategory3}</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-label">
                      Select Sub Category
                    </InputLabel>
                    <Select
                      id="demo-simple-select"
                      labelId="demo-simple-select-label"
                      value={subCategory}
                      label="Select Sub Category"
                      onChange={handleChangesub}
                    >
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
                  <FormControl fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-label">
                      Product Tag
                    </InputLabel>
                    <Select
                      id="demo-simple-select"
                      labelId="demo-simple-select-label"
                      value={subCategory}
                      label="Product Tag"
                      onChange={handleChangesub}
                    >
                      <MenuItem value={10}>Fresh</MenuItem>
                      <MenuItem value={20}>PVA</MenuItem>
                      <MenuItem value={30}>Aged</MenuItem>
                      <MenuItem value={40}>Custom</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    label="Description"
                    multiline
                    value={item.description}
                    contentEditable
                  />
                  <TextField
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    label="Stock"
                    value={item.stock}
                    contentEditable
                  />
                  <TextField
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    label="Price"
                    value={item.price}
                    contentEditable
                  />
                  <TextField
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    label="Slug"
                    value={item.slug}
                    contentEditable
                  />
                  <TextField
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    label="Keywords"
                    multiline
                    value={item.slug}
                    contentEditable
                  />
                  <TextField
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    label="Canonical Link"
                    multiline
                    value={item.slug}
                    contentEditable
                  />
                  <TextField
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    label="Meta Title"
                  
                    value={item.slug}
                    contentEditable
                  />
                  <TextField
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    label="Meta Description"
                    multiline
                    value={item.slug}
                    contentEditable
                  />
                  <Button variant="contained">{item.action}</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default EditProduct;
