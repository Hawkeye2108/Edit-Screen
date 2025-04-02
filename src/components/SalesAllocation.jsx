import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Select, 
  MenuItem, 
  InputLabel, 
  FormControl, 
  Grid, 
  Button, 
  IconButton, 
  Paper,
  Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const SalesAllocationForm = () => {
  const [territories, setTerritories] = useState([
    { id: "AM0060801", salesType: "Retail", allocationFactor: 0.5 },
    { id: "AM0060802", salesType: "Retail", allocationFactor: 0.5 }
  ]);

  const addTerritory = () => {
    setTerritories([...territories, { id: "", salesType: "", allocationFactor: 0 }]);
  };

  const removeTerritory = (index) => {
    const newTerritories = [...territories];
    newTerritories.splice(index, 1);
    setTerritories(newTerritories);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mx: 'auto', maxWidth: 1200 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* First row */}
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Rule Name"
              defaultValue="Retail Sales Split Q12025"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControl fullWidth size="small">
              <InputLabel>Org Unit</InputLabel>
              <Select defaultValue="US">
                <MenuItem value="US">US</MenuItem>
                <MenuItem value="EU">EU</MenuItem>
                <MenuItem value="APAC">APAC</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControl fullWidth size="small">
              <InputLabel>Business Unit</InputLabel>
              <Select defaultValue="Oncology">
                <MenuItem value="Oncology">Oncology</MenuItem>
                <MenuItem value="Cardiology">Cardiology</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              label="Selling Team"
              defaultValue="ONCO124"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControl fullWidth size="small">
              <InputLabel>Allocation Type</InputLabel>
              <Select defaultValue="Territory Split">
                <MenuItem value="Territory Sharing">Territory Sharing</MenuItem>
                <MenuItem value="Territory Split">Territory Split</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={1}>
            <TextField
              fullWidth
              label="Effective QTR"
              defaultValue="2025Q1"
              size="small"
            />
          </Grid>

          {/* Second row */}
          <Grid item xs={12} sm={2}>
            <FormControl fullWidth size="small">
              <InputLabel>Customer ID</InputLabel>
              <Select defaultValue="CUST124">
                <MenuItem value="CUST124">CUST124</MenuItem>
                <MenuItem value="CUST125">CUST125</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Product ID</InputLabel>
              <Select defaultValue="PROD-0000-000 Ops">
                <MenuItem value="PROD-0000-000 Ops">PROD-0000-000 Ops</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Rule Start Date"
              defaultValue="4/1/2024"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Rule End Date"
              defaultValue="4/1/2026"
              size="small"
            />
          </Grid>

          {/* Territory Rows */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
              Territory Information
            </Typography>
          </Grid>

          {territories.map((territory, index) => (
            <React.Fragment key={index}>
              <Grid item xs={12} sm={3}>
                <FormControl fullWidth size="small">
                  <InputLabel>Territory ID</InputLabel>
                  <Select
                    value={territory.id}
                    onChange={(e) => {
                      const newTerritories = [...territories];
                      newTerritories[index].id = e.target.value;
                      setTerritories(newTerritories);
                    }}
                  >
                    <MenuItem value="AM0060801">AM0060801</MenuItem>
                    <MenuItem value="AM0060802">AM0060802</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormControl fullWidth size="small">
                  <InputLabel>Sales Type</InputLabel>
                  <Select
                    value={territory.salesType}
                    onChange={(e) => {
                      const newTerritories = [...territories];
                      newTerritories[index].salesType = e.target.value;
                      setTerritories(newTerritories);
                    }}
                  >
                    <MenuItem value="Retail">Retail</MenuItem>
                    <MenuItem value="Non-Retails">Non-Retails</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  fullWidth
                  label="Allocation Factor"
                  value={territory.allocationFactor}
                  onChange={(e) => {
                    const newTerritories = [...territories];
                    newTerritories[index].allocationFactor = e.target.value;
                    setTerritories(newTerritories);
                  }}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <IconButton 
                  color="error" 
                  onClick={() => removeTerritory(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </React.Fragment>
          ))}

          <Grid item xs={12}>
            <Button 
              startIcon={<AddIcon />} 
              onClick={addTerritory}
              variant="outlined"
              size="small"
              sx={{ mt: 1 }}
            >
              Add Territory
            </Button>
          </Grid>

          {/* Bottom row */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="User Comment"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Approver (optional)"
              size="small"
            />
          </Grid>

          {/* Action buttons */}
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, gap: 2 }}>
              <Button variant="outlined">Cancel</Button>
              <Button variant="contained" color="primary">Save Draft</Button>
              <Button variant="contained" type="submit">Submit</Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default SalesAllocationForm;
