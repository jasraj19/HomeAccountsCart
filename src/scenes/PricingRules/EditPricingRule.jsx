import React, { useState } from "react";
import { Box, Card, CardContent, TextField, Button, Typography } from "@mui/material";
import Header from "../../components/Header";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";

const names = [
  "Gmail Account",
  "Linkedin Account",
  "Pinterest Account",
  "Reddit Account",
  "Aged Gmail Account (3 months)",
  "Youtube Account",
  "Double Phone Verified Youtube Account",
  "Aged Twitter Account",
  "Twitter Account",
  "AOL Account",
];

const EditPricingRule = () => {
  const [personName, setPersonName] = React.useState([]);
  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  const [rows, setRows] = useState([
    { qty_from: "", qty_to: "", discount: "" },
  ]);

  const handleRowChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const handleAddRow = () => {
    setRows([...rows, { qty_from: "", qty_to: "", discount: "" }]);
  };

  return (
    <Box m={2}>
      <Header title="Edit Pricing Rule" />
      <Card>
        <CardContent>
          <TextField
            id="outlined-basic"
            fullWidth
            margin="normal"
            label="Rule Name"
            variant="outlined"
          />

          <FormControl sx={{ mt: 2, minWidth: 300, maxWidth: 650 }}>
            <InputLabel shrink fullWidth htmlFor="select-multiple-native">
              Select Product
            </InputLabel>
            <Select
              multiple
              native
              value={personName}
              onChange={handleChangeMultiple}
              label="Select Product"
              inputProps={{ id: "select-multiple-native" }}
            >
              {" "}
              {names.map((name) => (
                <option key={name} value={name}>
                  {" "}
                  {name}{" "}
                </option>
              ))}
            </Select>
          </FormControl>

          <TableContainer sx={{ mt: 2, border: 1, borderColor:'grey.500' }}>
            <Table id="ruleTable">
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2} sx={{ mt: 2, border: 1, borderColor:'grey.500' }}><Typography variant="h5" textAlign="center">Quantity</Typography></TableCell>
                  <TableCell rowSpan={2} sx={{ mt: 2, border: 1, borderColor:'grey.500' }}><Typography variant="h5" textAlign="center">Discount(%)</Typography></TableCell>
                  <TableCell rowSpan={2} sx={{ mt: 2, border: 0, borderColor:'grey.500' }}><Typography variant="h5" textAlign="center">Action</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ mt: 2, border: 1, borderColor:'grey.500' }}><Typography variant="h5" textAlign="center">From</Typography></TableCell>
                  <TableCell sx={{ mt: 2, border: 1, borderColor:'grey.500' }}><Typography variant="h5" textAlign="center">To</Typography></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ mt: 2, border: 1, borderColor:'grey.500' }}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        type="number"
                        name="qty_from[]"
                        required
                        value={row.qty_from}
                        onChange={(e) =>
                          handleRowChange(index, "qty_from", e.target.value)
                        }
                      />
                    </TableCell>

                    <TableCell>
                      <TextField variant="outlined" fullWidth type="number" name="qty_to[]" required value={row.qty_to} onChange={(e) => handleRowChange(index, "qty_to", e.target.value)}/>
                    </TableCell>

                    <TableCell sx={{ mt: 2, border: 1, borderColor:'grey.500' }}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        type="number"
                        step="0.1"
                        name="discount[]"
                        required
                        value={row.discount}
                        onChange={(e) =>
                          handleRowChange(index, "discount", e.target.value)
                        }
                      />
                    </TableCell>

                    <TableCell sx={{ mt: 2, border: 1, borderColor:'grey.500' }}>
                      {" "}
                      {index === rows.length - 1 && (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleAddRow}
                        >
                          {" "}
                          <AddIcon />{" "}
                        </Button>
                      )}{" "}
                    </TableCell>

                    <TableCell sx={{ mt: 2, border: 1, borderColor:'grey.500' }}>
                      {" "}
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                          const newRows = [...rows];
                          newRows.splice(index, 1);
                          setRows(newRows);
                        }}
                      >
                        {" "}
                        <RemoveIcon />
                      </Button>{" "}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box mt={2}>
            <Link style={{ textDecoration: "none" }} to="">
              <Button variant="contained" sx={{ bgcolor: "success.main" }}>
                <Typography>Update</Typography>
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EditPricingRule;
