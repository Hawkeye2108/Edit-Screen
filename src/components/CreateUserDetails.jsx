import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Button, 
  TextField, 
  Grid, 
  Typography, 
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const UserDetailsForm = () => {
  // State for user details
  const [userDetails, setUserDetails] = useState({
    userName: '',
    firstName: '',
    middleName: '',
    lastName: '',
    emailId: ''
  });

  // State for business group assignments (rows)
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      orgUnit: '',
      businessUnit: '',
      functionalArea: '',
      businessGroup: '',
      roles: {
        approver: false,
        author: false,
        viewer: false,
        feedback: false,
        export: false
      }
    }
  ]);

  // These would typically come from API calls
  // Master data for all options
  const [masterData, setMasterData] = useState({
    orgUnits: [],
    businessUnits: {},
    functionalAreas: {},
    businessGroups: {}
  });

  // Fetch initial data
  useEffect(() => {
    // Simulate API calls
    fetchMasterData();
  }, []);

  const fetchMasterData = () => {
    // Simulating API response for org units
    const orgUnits = ['IT', 'Finance', 'HR', 'Operations'];
    
    // Simulating the business units data based on org units
    const businessUnits = {
      'IT': ['Software Development', 'Infrastructure', 'IT Support'],
      'Finance': ['Accounting', 'Budgeting', 'Payroll'],
      'HR': ['Recruitment', 'Training', 'Employee Relations'],
      'Operations': ['Supply Chain', 'Quality Control', 'Production']
    };

    // Simulating functional areas based on business units
    const functionalAreas = {
      'Software Development': ['Frontend', 'Backend', 'QA'],
      'Infrastructure': ['Network', 'Cloud', 'Security'],
      'IT Support': ['Desktop Support', 'Application Support'],
      'Accounting': ['General Ledger', 'Accounts Payable', 'Accounts Receivable'],
      'Budgeting': ['Financial Planning', 'Analysis'],
      'Payroll': ['Compensation', 'Benefits'],
      'Recruitment': ['Sourcing', 'Interviewing', 'Onboarding'],
      'Training': ['Technical Training', 'Soft Skills'],
      'Employee Relations': ['Conflict Resolution', 'Engagement'],
      'Supply Chain': ['Procurement', 'Logistics'],
      'Quality Control': ['Testing', 'Compliance'],
      'Production': ['Assembly', 'Packaging']
    };

    // Simulating business groups based on functional areas
    const businessGroups = {
      'Frontend': ['Web', 'Mobile'],
      'Backend': ['API', 'Database'],
      'QA': ['Manual Testing', 'Automation'],
      'Network': ['WAN', 'LAN'],
      'Cloud': ['AWS', 'Azure', 'GCP'],
      'Security': ['Cybersecurity', 'Compliance'],
      'Desktop Support': ['Hardware', 'Software'],
      'Application Support': ['CRM', 'ERP'],
      'General Ledger': ['Financial Reporting', 'Reconciliation'],
      'Accounts Payable': ['Vendor Management', 'Payments'],
      'Accounts Receivable': ['Billing', 'Collections'],
      'Financial Planning': ['Forecasting', 'Budgeting'],
      'Analysis': ['Financial Analysis', 'Business Intelligence'],
      'Compensation': ['Salary Administration', 'Bonuses'],
      'Benefits': ['Health Insurance', 'Retirement'],
      'Sourcing': ['Job Posting', 'Candidate Search'],
      'Interviewing': ['Screening', 'Technical Interviews'],
      'Onboarding': ['Orientation', 'Training'],
      'Technical Training': ['Programming', 'Tools'],
      'Soft Skills': ['Communication', 'Leadership'],
      'Conflict Resolution': ['Mediation', 'Arbitration'],
      'Engagement': ['Employee Surveys', 'Events'],
      'Procurement': ['Vendor Selection', 'Purchasing'],
      'Logistics': ['Shipping', 'Warehousing'],
      'Testing': ['Product Testing', 'Quality Assurance'],
      'Compliance': ['Standards', 'Regulations'],
      'Assembly': ['Manufacturing', 'Production Line'],
      'Packaging': ['Design', 'Materials']
    };

    // Set all master data
    setMasterData({
      orgUnits,
      businessUnits,
      functionalAreas,
      businessGroups
    });
  };

  const handleUserDetailChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value
    });
  };

  const handleAssignmentChange = (id, field, value) => {
    setAssignments(assignments.map(assignment => {
      if (assignment.id === id) {
        // Reset dependent fields when parent field changes
        if (field === 'orgUnit') {
          return {
            ...assignment,
            [field]: value,
            businessUnit: '',
            functionalArea: '',
            businessGroup: ''
          };
        } else if (field === 'businessUnit') {
          return {
            ...assignment,
            [field]: value,
            functionalArea: '',
            businessGroup: ''
          };
        } else if (field === 'functionalArea') {
          return {
            ...assignment,
            [field]: value,
            businessGroup: ''
          };
        } else {
          return {
            ...assignment,
            [field]: value
          };
        }
      }
      return assignment;
    }));
  };

  const handleRoleChange = (id, role, checked) => {
    setAssignments(assignments.map(assignment => {
      if (assignment.id === id) {
        return {
          ...assignment,
          roles: {
            ...assignment.roles,
            [role]: checked
          }
        };
      }
      return assignment;
    }));
  };

  const addAssignment = () => {
    const newId = assignments.length > 0 ? Math.max(...assignments.map(a => a.id)) + 1 : 1;
    setAssignments([
      ...assignments,
      {
        id: newId,
        orgUnit: '',
        businessUnit: '',
        functionalArea: '',
        businessGroup: '',
        roles: {
          approver: false,
          author: false,
          viewer: false,
          feedback: false,
          export: false
        }
      }
    ]);
  };

  const removeAssignment = (id) => {
    if (assignments.length > 1) {
      setAssignments(assignments.filter(assignment => assignment.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      userDetails,
      assignments
    };
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  // Get business unit options for a specific row based on its org unit
  const getBusinessUnitOptions = (assignment) => {
    if (!assignment.orgUnit) return [];
    return masterData.businessUnits[assignment.orgUnit] || [];
  };

  // Get functional area options for a specific row based on its business unit
  const getFunctionalAreaOptions = (assignment) => {
    if (!assignment.businessUnit) return [];
    return masterData.functionalAreas[assignment.businessUnit] || [];
  };

  // Get business group options for a specific row based on its functional area
  const getBusinessGroupOptions = (assignment) => {
    if (!assignment.functionalArea) return [];
    return masterData.businessGroups[assignment.functionalArea] || [];
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Edit User Details
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="User Name"
              name="userName"
              value={userDetails.userName}
              onChange={handleUserDetailChange}
              fullWidth
              placeholder="Alphanumeric only"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Email ID"
              name="emailId"
              type="email"
              value={userDetails.emailId}
              onChange={handleUserDetailChange}
              fullWidth
              placeholder="Text in email Id format"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="First Name"
              name="firstName"
              value={userDetails.firstName}
              onChange={handleUserDetailChange}
              fullWidth
              placeholder="Alphabets only"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Middle Name"
              name="middleName"
              value={userDetails.middleName}
              onChange={handleUserDetailChange}
              fullWidth
              placeholder="Alphabets only"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Last Name"
              name="lastName"
              value={userDetails.lastName}
              onChange={handleUserDetailChange}
              fullWidth
              placeholder="Alphabets only"
            />
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom>
          Select Business Groups and respective Roles to be assigned
        </Typography>

        {assignments.map((assignment) => (
          <Box key={assignment.id} sx={{ mb: 3, p: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={2}>
                <FormControl fullWidth>
                  <InputLabel>Org Unit</InputLabel>
                  <Select
                    value={assignment.orgUnit}
                    onChange={(e) => handleAssignmentChange(assignment.id, 'orgUnit', e.target.value)}
                    label="Org Unit"
                  >
                    <MenuItem value=""><em>Select Org Unit</em></MenuItem>
                    {masterData.orgUnits.map((unit) => (
                      <MenuItem key={unit} value={unit}>{unit}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={2}>
                <FormControl fullWidth disabled={!assignment.orgUnit}>
                  <InputLabel>Business Unit</InputLabel>
                  <Select
                    value={assignment.businessUnit}
                    onChange={(e) => handleAssignmentChange(assignment.id, 'businessUnit', e.target.value)}
                    label="Business Unit"
                  >
                    <MenuItem value=""><em>Select Business Unit</em></MenuItem>
                    {getBusinessUnitOptions(assignment).map((unit) => (
                      <MenuItem key={unit} value={unit}>{unit}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={2}>
                <FormControl fullWidth disabled={!assignment.businessUnit}>
                  <InputLabel>Functional Area</InputLabel>
                  <Select
                    value={assignment.functionalArea}
                    onChange={(e) => handleAssignmentChange(assignment.id, 'functionalArea', e.target.value)}
                    label="Functional Area"
                  >
                    <MenuItem value=""><em>Select Functional Area</em></MenuItem>
                    {getFunctionalAreaOptions(assignment).map((area) => (
                      <MenuItem key={area} value={area}>{area}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={2}>
                <FormControl fullWidth disabled={!assignment.functionalArea}>
                  <InputLabel>Business Group</InputLabel>
                  <Select
                    value={assignment.businessGroup}
                    onChange={(e) => handleAssignmentChange(assignment.id, 'businessGroup', e.target.value)}
                    label="Business Group"
                  >
                    <MenuItem value=""><em>Select Business Group</em></MenuItem>
                    {getBusinessGroupOptions(assignment).map((group) => (
                      <MenuItem key={group} value={group}>{group}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={3}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={assignment.roles.approver}
                        onChange={(e) => handleRoleChange(assignment.id, 'approver', e.target.checked)}
                        size="small"
                      />
                    }
                    label="Approver"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={assignment.roles.author}
                        onChange={(e) => handleRoleChange(assignment.id, 'author', e.target.checked)}
                        size="small"
                      />
                    }
                    label="Author"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={assignment.roles.viewer}
                        onChange={(e) => handleRoleChange(assignment.id, 'viewer', e.target.checked)}
                        size="small"
                      />
                    }
                    label="Viewer"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={assignment.roles.feedback}
                        onChange={(e) => handleRoleChange(assignment.id, 'feedback', e.target.checked)}
                        size="small"
                      />
                    }
                    label="Feedback"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={assignment.roles.export}
                        onChange={(e) => handleRoleChange(assignment.id, 'export', e.target.checked)}
                        size="small"
                      />
                    }
                    label="Export"
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={1}>
                <IconButton 
                  color="error" 
                  onClick={() => removeAssignment(assignment.id)}
                  disabled={assignments.length <= 1}
                >
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        ))}

        <Button 
          startIcon={<AddIcon />} 
          onClick={addAssignment} 
          sx={{ mb: 3 }}
          color="primary"
        >
          Add a more Business Group assignment
        </Button>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained" type="submit" color="primary">Submit</Button>
        </Box>
      </form>
    </Paper>
  );
};

export default UserDetailsForm;
