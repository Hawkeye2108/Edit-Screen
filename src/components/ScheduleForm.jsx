import React from "react";
import { Box, Button, Checkbox, FormControlLabel, MenuItem, Select, TextField, Typography, Radio, RadioGroup, FormControl, FormLabel } from "@mui/material";

const ScheduleForm = () => {
  return (
    <Box sx={{ width: "60%", margin: "auto", padding: 3, border: "1px solid #ccc", borderRadius: 2 }}>
      <Typography variant="h6" align="center" sx={{ background: "#1976d2", color: "white", padding: 1, borderRadius: 1 }}>
        Schedule
      </Typography>
      
      <Box display="flex" justifyContent="space-between" mt={2}>
        <TextField label="Org Unit" select defaultValue="US" fullWidth sx={{ marginRight: 1 }}>
          <MenuItem value="US">US</MenuItem>
        </TextField>
        <TextField label="Business Unit" defaultValue="Rare Diseases" fullWidth disabled sx={{ marginRight: 1 }} />
        <TextField label="Functional Area" defaultValue="Sales Ops" fullWidth disabled />
      </Box>
      
      <TextField label="Specialty" defaultValue="Oncology" fullWidth disabled sx={{ marginTop: 2 }} />
      
      <TextField label="Rule Name" defaultValue="Product Pricing Discount" fullWidth disabled sx={{ marginTop: 2 }} />
      
      <Box display="flex" justifyContent="space-between" mt={2}>
        <TextField label="Rule Start Date" type="date" defaultValue="2024-04-01" InputLabelProps={{ shrink: true }} fullWidth sx={{ marginRight: 1 }} />
        <TextField label="Rule Start Time" type="time" defaultValue="00:00" InputLabelProps={{ shrink: true }} fullWidth sx={{ marginRight: 1 }} />
      </Box>
      
      <Box display="flex" justifyContent="space-between" mt={2}>
        <TextField label="Rule End Date" type="date" defaultValue="2026-04-01" InputLabelProps={{ shrink: true }} fullWidth sx={{ marginRight: 1 }} />
        <TextField label="Rule End Time" type="time" defaultValue="00:00" InputLabelProps={{ shrink: true }} fullWidth />
      </Box>
      
      <Box mt={2}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Recurring" />
        <FormControlLabel control={<Checkbox />} label="Event-Driven" />
        <FormControlLabel control={<Checkbox />} label="Real-Time Execution" />
      </Box>
      
      <FormControl component="fieldset" sx={{ mt: 2 }}>
        <FormLabel component="legend">Frequency</FormLabel>
        <RadioGroup row defaultValue="Hourly">
          <FormControlLabel value="Hourly" control={<Radio />} label="Hourly" />
          <FormControlLabel value="Daily" control={<Radio />} label="Daily" />
          <FormControlLabel value="Weekly" control={<Radio />} label="Weekly" />
          <FormControlLabel value="Monthly" control={<Radio />} label="Monthly" />
        </RadioGroup>
      </FormControl>
      
      <TextField label="Approver (Optional)" fullWidth sx={{ marginTop: 2 }} />
      
      <Button variant="outlined" color="primary" sx={{ mt: 2 }}>Add Additional Schedule Criteria</Button>
      
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button variant="outlined" sx={{ marginRight: 1 }}>Cancel</Button>
        <Button variant="contained" color="primary" sx={{ marginRight: 1 }}>Save Draft</Button>
        <Button variant="contained" disabled>Submit</Button>
      </Box>
    </Box>
  );
};

export default ScheduleForm;
