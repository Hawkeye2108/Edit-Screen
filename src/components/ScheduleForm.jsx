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






import React from "react";
import { Box, Button, Checkbox, FormControlLabel, MenuItem, Select, TextField, Typography, Radio, RadioGroup, FormControl, FormLabel } from "@mui/material";

const ScheduleForm = () => {
  return (
    <Box sx={{ width: "70%", margin: "auto", padding: 3, border: "1px solid #ccc", borderRadius: 2 }}>
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
      
      <Box display="flex" justifyContent="space-between" mt={2}>
        <TextField label="Rule Name" defaultValue="Product Pricing Discount" fullWidth disabled sx={{ marginRight: 1 }} />
      </Box>
      
      <Box display="flex" justifyContent="space-between" mt={2}>
        <TextField label="Rule Start Date" type="date" defaultValue="2024-04-01" InputLabelProps={{ shrink: true }} fullWidth sx={{ marginRight: 1 }} />
        <TextField label="Rule Start Time" type="time" defaultValue="00:00" InputLabelProps={{ shrink: true }} fullWidth sx={{ marginRight: 1 }} />
        <TextField label="Rule End Date (Optional)" type="date" defaultValue="2026-04-01" InputLabelProps={{ shrink: true }} fullWidth sx={{ marginRight: 1 }} />
        <TextField label="Rule End Time (Optional)" type="time" defaultValue="00:00" InputLabelProps={{ shrink: true }} fullWidth />
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
      
      <Button variant="outlined" color="primary" sx={{ mt: 2, display: 'block' }}>+ Add Additional Schedule Criteria</Button>
      
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button variant="outlined" sx={{ marginRight: 1 }}>Cancel</Button>
        <Button variant="contained" color="primary" sx={{ marginRight: 1 }}>Save Draft</Button>
        <Button variant="contained" disabled>Submit</Button>
      </Box>
    </Box>
  );
};

export default ScheduleForm;







import React, { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  Select, 
  MenuItem, 
  TextField, 
  FormControl, 
  InputLabel, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  Checkbox, 
  Button, 
  Grid,
  Divider
} from '@mui/material';
import AddIcon from 'lucide-react';

const ScheduleForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    orgUnit: "US",
    businessUnit: "Rare Diseases",
    functionalArea: "Sales Ops",
    specialty: "Oncology",
    ruleName: "Product Pricing Discount",
    ruleStartDate: "4/1/2024",
    ruleStartTime: "00:00",
    ruleEndDate: "4/1/2025",
    ruleEndTime: "00:00",
    executionType: "recurring",
    frequency: "hourly"
  });

  return (
    <Paper sx={{ p: 3, maxWidth: 1000, mx: 'auto' }}>
      <Box sx={{ bgcolor: '#2077B4', color: 'white', p: 1, textAlign: 'center', mb: 3 }}>
        <Typography variant="h6">Schedule</Typography>
      </Box>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={3}>
          <FormControl fullWidth size="small">
            <InputLabel>Org Unit</InputLabel>
            <Select
              value={formData.orgUnit}
              label="Org Unit"
              variant="outlined"
            >
              <MenuItem value="US">US</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={3}>
          <FormControl fullWidth size="small">
            <InputLabel>Business Unit</InputLabel>
            <Select
              value={formData.businessUnit}
              label="Business Unit"
              variant="outlined"
            >
              <MenuItem value="Rare Diseases">Rare Diseases</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={3}>
          <FormControl fullWidth size="small">
            <InputLabel>Functional Area</InputLabel>
            <Select
              value={formData.functionalArea}
              label="Functional Area"
              variant="outlined"
            >
              <MenuItem value="Sales Ops">Sales Ops</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={3}>
          <FormControl fullWidth size="small">
            <InputLabel>Specialty</InputLabel>
            <Select
              value={formData.specialty}
              label="Specialty"
              variant="outlined"
            >
              <MenuItem value="Oncology">Oncology</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      
      <Divider sx={{ my: 2 }} />
      
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel>Rule Name</InputLabel>
            <Select
              value={formData.ruleName}
              label="Rule Name"
              variant="outlined"
              size="small"
            >
              <MenuItem value="Product Pricing Discount">Product Pricing Discount</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Rule Start Date"
            variant="outlined"
            size="small"
            value={formData.ruleStartDate}
          />
        </Grid>
        
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Rule Start Time"
            variant="outlined"
            size="small"
            value={formData.ruleStartTime}
          />
        </Grid>
        
        <Grid item xs={1.5}>
          <TextField
            fullWidth
            label="Rule End Date (Optional)"
            variant="outlined"
            size="small"
            value={formData.ruleEndDate}
          />
        </Grid>
        
        <Grid item xs={1.5}>
          <TextField
            fullWidth
            label="Rule End Time (Optional)"
            variant="outlined"
            size="small"
            value={formData.ruleEndTime}
          />
        </Grid>
      </Grid>
      
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={2}>
          <Typography variant="subtitle1">Execution Type</Typography>
        </Grid>
        
        <Grid item xs={10}>
          <FormControl component="fieldset">
            <RadioGroup row name="executionType" value={formData.executionType}>
              <FormControlLabel 
                value="recurring" 
                control={<Checkbox checked={formData.executionType === "recurring"} />} 
                label="Recurring" 
              />
              <FormControlLabel 
                value="event-driven" 
                control={<Checkbox />} 
                label="Event-Driven" 
              />
              <FormControlLabel 
                value="real-time" 
                control={<Checkbox />} 
                label="Real-Time Execution" 
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={2}>
          <Typography variant="subtitle1">Frequency</Typography>
        </Grid>
        
        <Grid item xs={10}>
          <FormControl component="fieldset">
            <RadioGroup row name="frequency" value={formData.frequency}>
              <FormControlLabel value="hourly" control={<Radio checked />} label="Hourly" />
              <FormControlLabel value="daily" control={<Radio />} label="Daily" />
              <FormControlLabel value="weekly" control={<Radio />} label="Weekly" />
              <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Approver (optional)"
            variant="outlined"
            size="small"
          />
        </Grid>
        
        <Grid item xs={9} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button variant="contained" color="inherit">Cancel</Button>
          <Button variant="contained" sx={{ bgcolor: '#2077B4', color: 'white' }}>Save Draft</Button>
          <Button variant="contained" color="primary">Submit</Button>
        </Grid>
      </Grid>
      
      <Box sx={{ mt: 3, display: 'flex', alignItems: 'center' }}>
        <AddIcon size={20} />
        <Typography variant="body2" sx={{ ml: 1 }}>Add Additional Schedule Criteria</Typography>
      </Box>
    </Paper>
  );
};

export default ScheduleForm;





import React, { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  Select, 
  MenuItem, 
  TextField, 
  FormControl, 
  InputLabel, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  Checkbox, 
  Button, 
  Grid,
  Divider
} from '@mui/material';
import AddIcon from 'lucide-react';

const ScheduleForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    orgUnit: "US",
    businessUnit: "Rare Diseases",
    functionalArea: "Sales Ops",
    specialty: "Oncology",
    ruleName: "Product Pricing Discount",
    ruleStartDate: "4/1/2024",
    ruleStartTime: "00:00",
    ruleEndDate: "4/1/2025",
    ruleEndTime: "00:00",
    executionType: "recurring",
    frequency: "hourly"
  });

  return (
    <Paper sx={{ p: 3, maxWidth: 1000, mx: 'auto' }}>
      <Box sx={{ bgcolor: '#2077B4', color: 'white', p: 1, textAlign: 'center', mb: 3 }}>
        <Typography variant="h6">Schedule</Typography>
      </Box>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={3}>
          <FormControl fullWidth size="small">
            <InputLabel>Org Unit</InputLabel>
            <Select
              value={formData.orgUnit}
              label="Org Unit"
              variant="outlined"
            >
              <MenuItem value="US">US</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={3}>
          <FormControl fullWidth size="small">
            <InputLabel>Business Unit</InputLabel>
            <Select
              value={formData.businessUnit}
              label="Business Unit"
              variant="outlined"
            >
              <MenuItem value="Rare Diseases">Rare Diseases</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={3}>
          <FormControl fullWidth size="small">
            <InputLabel>Functional Area</InputLabel>
            <Select
              value={formData.functionalArea}
              label="Functional Area"
              variant="outlined"
            >
              <MenuItem value="Sales Ops">Sales Ops</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={3}>
          <FormControl fullWidth size="small">
            <InputLabel>Specialty</InputLabel>
            <Select
              value={formData.specialty}
              label="Specialty"
              variant="outlined"
            >
              <MenuItem value="Oncology">Oncology</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      
      <Divider sx={{ my: 2 }} />
      
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel>Rule Name</InputLabel>
            <Select
              value={formData.ruleName}
              label="Rule Name"
              variant="outlined"
              size="small"
            >
              <MenuItem value="Product Pricing Discount">Product Pricing Discount</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Rule Start Date"
            variant="outlined"
            size="small"
            value={formData.ruleStartDate}
          />
        </Grid>
        
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Rule Start Time"
            variant="outlined"
            size="small"
            value={formData.ruleStartTime}
          />
        </Grid>
        
        <Grid item xs={1.5}>
          <TextField
            fullWidth
            label="Rule End Date (Optional)"
            variant="outlined"
            size="small"
            value={formData.ruleEndDate}
          />
        </Grid>
        
        <Grid item xs={1.5}>
          <TextField
            fullWidth
            label="Rule End Time (Optional)"
            variant="outlined"
            size="small"
            value={formData.ruleEndTime}
          />
        </Grid>
      </Grid>
      
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={2}>
          <Typography variant="subtitle1">Execution Type</Typography>
        </Grid>
        
        <Grid item xs={10}>
          <FormControl component="fieldset">
            <RadioGroup row name="executionType" value={formData.executionType}>
              <FormControlLabel 
                value="recurring" 
                control={<Checkbox checked={formData.executionType === "recurring"} />} 
                label="Recurring" 
              />
              <FormControlLabel 
                value="event-driven" 
                control={<Checkbox />} 
                label="Event-Driven" 
              />
              <FormControlLabel 
                value="real-time" 
                control={<Checkbox />} 
                label="Real-Time Execution" 
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={2}>
          <Typography variant="subtitle1">Frequency</Typography>
        </Grid>
        
        <Grid item xs={10}>
          <FormControl component="fieldset">
            <RadioGroup row name="frequency" value={formData.frequency}>
              <FormControlLabel value="hourly" control={<Radio checked />} label="Hourly" />
              <FormControlLabel value="daily" control={<Radio />} label="Daily" />
              <FormControlLabel value="weekly" control={<Radio />} label="Weekly" />
              <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Approver (optional)"
            variant="outlined"
            size="small"
          />
        </Grid>
        
        <Grid item xs={9} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button variant="contained" color="inherit">Cancel</Button>
          <Button variant="contained" sx={{ bgcolor: '#2077B4', color: 'white' }}>Save Draft</Button>
          <Button variant="contained" color="primary">Submit</Button>
        </Grid>
      </Grid>
      
      <Box sx={{ mt: 3, display: 'flex', alignItems: 'center' }}>
        <AddIcon size={20} />
        <Typography variant="body2" sx={{ ml: 1 }}>Add Additional Schedule Criteria</Typography>
      </Box>
    </Paper>
  );
};

export default ScheduleForm;

