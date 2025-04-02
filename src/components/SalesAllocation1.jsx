import React from "react";
import { TextField, Button, Select, MenuItem, Grid, Typography, Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const RetailSalesSplit = () => {
  return (
    <Box p={4}>
      <Typography variant="h6">Rule Name</Typography>
      <TextField fullWidth variant="outlined" defaultValue="Retail Sales Split Q12025" margin="dense" />
      
      <Grid container spacing={2} mt={2}>
        <Grid item xs={4}>
          <Typography>Org Unit</Typography>
          <TextField fullWidth variant="outlined" defaultValue="US" margin="dense" />
        </Grid>
        <Grid item xs={4}>
          <Typography>Business Unit</Typography>
          <TextField fullWidth variant="outlined" defaultValue="Oncology" margin="dense" />
        </Grid>
        <Grid item xs={4}>
          <Typography>Selling Team</Typography>
          <TextField fullWidth variant="outlined" defaultValue="ONCO124" margin="dense" />
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={4}>
          <Typography>Allocation Type</Typography>
          <Select fullWidth defaultValue="Territory Split">
            <MenuItem value="Territory Sharing">Territory Sharing</MenuItem>
            <MenuItem value="Territory Split">Territory Split</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={4}>
          <Typography>Effective QTR</Typography>
          <Select fullWidth defaultValue="2025Q1">
            <MenuItem value="2025Q1">2025Q1</MenuItem>
          </Select>
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={4}>
          <Typography>Customer ID</Typography>
          <TextField fullWidth variant="outlined" defaultValue="CUST124" margin="dense" />
        </Grid>
        <Grid item xs={4}>
          <Typography>Product ID</Typography>
          <TextField fullWidth variant="outlined" defaultValue="PROD-0000-000 Ops" margin="dense" />
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={4}>
          <Typography>Rule Start Date</Typography>
          <TextField fullWidth variant="outlined" defaultValue="4/1/2024" margin="dense" />
        </Grid>
        <Grid item xs={4}>
          <Typography>Rule End Date</Typography>
          <TextField fullWidth variant="outlined" defaultValue="4/1/2026" margin="dense" />
        </Grid>
      </Grid>

      {[1, 2].map((_, index) => (
        <Grid container spacing={2} mt={2} key={index} alignItems="center">
          <Grid item xs={3}>
            <Typography>Territory ID</Typography>
            <TextField fullWidth variant="outlined" defaultValue={`AM006080${index + 1}`} margin="dense" />
          </Grid>
          <Grid item xs={3}>
            <Typography>Sales Type</Typography>
            <Select fullWidth defaultValue="Retail">
              <MenuItem value="Retail">Retail</MenuItem>
              <MenuItem value="Non-Retail">Non-Retail</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={3}>
            <Typography>Allocation Factor</Typography>
            <TextField fullWidth variant="outlined" defaultValue="0.5" margin="dense" />
          </Grid>
          <Grid item xs={1}>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      
      <Box mt={2}>
        <Button variant="outlined">+</Button>
      </Box>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <Typography>User Comment</Typography>
          <TextField fullWidth variant="outlined" margin="dense" />
        </Grid>
        <Grid item xs={6}>
          <Typography>Approver (optional)</Typography>
          <TextField fullWidth variant="outlined" margin="dense" />
        </Grid>
      </Grid>

      <Box mt={3} display="flex" justifyContent="space-between">
        <Button variant="outlined">Cancel</Button>
        <Box>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Save Draft
          </Button>
          <Button variant="contained" color="secondary">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RetailSalesSplit;
