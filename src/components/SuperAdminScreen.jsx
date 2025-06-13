import React, { useState, useCallback } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Checkbox,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link,
  Grid,
  FormControlLabel,
  Alert,
  Snackbar
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const BusinessGroupAdmin = () => {
  // State management
  const [formData, setFormData] = useState({
    orgUnit: 'default',
    businessUnit: 'default',
    functionalArea: 'default'
  });

  const [users, setUsers] = useState([
    {
      id: 1,
      userName: 'Select User Name',
      userEmail: 'Select User Email',
      appAdmin: false,
      superAdmin: false
    },
    {
      id: 2,
      userName: 'Select User Name',
      userEmail: 'Select User Email',
      appAdmin: true,
      superAdmin: false
    }
  ]);

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  // Dropdown options
  const dropdownOptions = [
    { value: 'default', label: '<default>' },
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ];

  // Event handlers
  const handleFormChange = useCallback((field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  }, []);

  const handleUserPrivilegeChange = useCallback((userId, privilege) => (event) => {
    setUsers(prev => prev.map(user => 
      user.id === userId 
        ? { ...user, [privilege]: event.target.checked }
        : user
    ));
  }, []);

  const handleAddMoreUsers = useCallback(() => {
    const newUser = {
      id: users.length + 1,
      userName: 'Select User Name',
      userEmail: 'Select User Email',
      appAdmin: false,
      superAdmin: false
    };
    setUsers(prev => [...prev, newUser]);
  }, [users.length]);

  const handleSubmit = useCallback(() => {
    try {
      // Validation
      const hasSelectedUsers = users.some(user => 
        user.userName !== 'Select User Name' && user.userEmail !== 'Select User Email'
      );

      if (!hasSelectedUsers) {
        setShowError(true);
        return;
      }

      // Submit logic would go here
      console.log('Submitting:', { formData, users });
      setShowSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
      setShowError(true);
    }
  }, [formData, users]);

  const handleCancel = useCallback(() => {
    setFormData({
      orgUnit: 'default',
      businessUnit: 'default',
      functionalArea: 'default'
    });
    setUsers([
      {
        id: 1,
        userName: 'Select User Name',
        userEmail: 'Select User Email',
        appAdmin: false,
        superAdmin: false
      }
    ]);
  }, []);

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: 'auto' }}>
      {/* Header */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: 2, 
          mb: 3, 
          backgroundColor: '#1976d2',
          color: 'white',
          borderRadius: 1
        }}
      >
        <Typography variant="h6" component="h1" fontWeight="bold">
          Edit Business Group Admin User Privileges
        </Typography>
      </Paper>

      {/* Form Section */}
      <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              select
              label="Org Unit"
              value={formData.orgUnit}
              onChange={handleFormChange('orgUnit')}
              variant="outlined"
              size="small"
            >
              {dropdownOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              select
              label="Business Unit"
              value={formData.businessUnit}
              onChange={handleFormChange('businessUnit')}
              variant="outlined"
              size="small"
            >
              {dropdownOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              select
              label="Functional Area(s)"
              value={formData.functionalArea}
              onChange={handleFormChange('functionalArea')}
              variant="outlined"
              size="small"
            >
              {dropdownOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Paper>

      {/* Users Table Section */}
      <Paper elevation={1} sx={{ mb: 3 }}>
        <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Assign / Modify Group Admin and Data Admin Privileges to Users for Selected Business Groups
          </Typography>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 200 }}>
                  User Name
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 250 }}>
                  User Email
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', minWidth: 120 }}>
                  App Admin
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', minWidth: 120 }}>
                  Super Admin
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} hover>
                  <TableCell>
                    <TextField
                      select
                      fullWidth
                      value={user.userName}
                      variant="standard"
                      size="small"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      sx={{
                        '& .MuiInputBase-input': {
                          color: user.userName === 'Select User Name' ? '#666' : 'inherit',
                          fontStyle: user.userName === 'Select User Name' ? 'italic' : 'normal'
                        }
                      }}
                    >
                      <MenuItem value="Select User Name">
                        &lt; Select User Name &gt;
                      </MenuItem>
                      <MenuItem value="John Doe">John Doe</MenuItem>
                      <MenuItem value="Jane Smith">Jane Smith</MenuItem>
                      <MenuItem value="Mike Johnson">Mike Johnson</MenuItem>
                    </TextField>
                  </TableCell>
                  <TableCell>
                    <TextField
                      select
                      fullWidth
                      value={user.userEmail}
                      variant="standard"
                      size="small"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      sx={{
                        '& .MuiInputBase-input': {
                          color: user.userEmail === 'Select User Email' ? '#666' : 'inherit',
                          fontStyle: user.userEmail === 'Select User Email' ? 'italic' : 'normal'
                        }
                      }}
                    >
                      <MenuItem value="Select User Email">
                        &lt; Select User Email &gt;
                      </MenuItem>
                      <MenuItem value="john.doe@company.com">john.doe@company.com</MenuItem>
                      <MenuItem value="jane.smith@company.com">jane.smith@company.com</MenuItem>
                      <MenuItem value="mike.johnson@company.com">mike.johnson@company.com</MenuItem>
                    </TextField>
                  </TableCell>
                  <TableCell align="center">
                    <Checkbox
                      checked={user.appAdmin}
                      onChange={handleUserPrivilegeChange(user.id, 'appAdmin')}
                      color="primary"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Checkbox
                      checked={user.superAdmin}
                      onChange={handleUserPrivilegeChange(user.id, 'superAdmin')}
                      color="primary"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
          <Link
            component="button"
            variant="body2"
            onClick={handleAddMoreUsers}
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 0.5,
              textDecoration: 'underline',
              color: '#1976d2',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            <AddIcon fontSize="small" />
            Select and Assign roles for more users
          </Link>
        </Box>
      </Paper>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button
          variant="outlined"
          onClick={handleCancel}
          sx={{ minWidth: 100 }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ minWidth: 100 }}
        >
          Submit
        </Button>
      </Box>

      {/* Success/Error Notifications */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={4000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowSuccess(false)} 
          severity="success" 
          sx={{ width: '100%' }}
        >
          User privileges updated successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={showError}
        autoHideDuration={4000}
        onClose={() => setShowError(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowError(false)} 
          severity="error" 
          sx={{ width: '100%' }}
        >
          Please select valid users before submitting.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BusinessGroupAdmin;
