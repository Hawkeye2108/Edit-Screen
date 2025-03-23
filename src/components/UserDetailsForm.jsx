import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Paper, 
  Grid,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  IconButton,
  Checkbox,
  FormGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const UserDetailsForm = () => {
  const [businessGroups, setBusinessGroups] = useState([
    { id: 1, orgUnit: '', businessUnit: '', functionalArea: '', businessGroup: '' },
    { id: 2, orgUnit: '', businessUnit: '', functionalArea: '', businessGroup: '' }
  ]);

  const addBusinessGroup = () => {
    const newId = businessGroups.length + 1;
    setBusinessGroups([...businessGroups, { id: newId, orgUnit: '', businessUnit: '', functionalArea: '', businessGroup: '' }]);
  };

  return (
    <Box sx={{mx: 'auto',bgcolor:"red"}}>
      <Paper elevation={1} sx={{ p: 2, mb: 4,bgcolor:"yellow" }}>
        <Typography 
          variant="h5" 
          align="center" 
          sx={{ 
            bgcolor: '#3498db', 
            color: 'white', 
            py: 1, 
            borderRadius: 1,
            mb: 3
          }}
        >
          Edit User Details
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography component="label" sx={{ fontWeight: 'bold' }}>
              User Name
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              fullWidth
              placeholder="<Alphanumeric only>"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography component="label" sx={{ fontWeight: 'bold' }}>
              First Name
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              placeholder="<Alphabets only>"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography component="label" sx={{ fontWeight: 'bold' }}>
              Middle Name
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              placeholder="<Alphabets only>"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography component="label" sx={{ fontWeight: 'bold' }}>
              Email ID
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              placeholder="<Text in email Id format >"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography component="label" sx={{ fontWeight: 'bold' }}>
              Last Name
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              placeholder="<Alphabets only>"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
      </Paper>

      <Typography variant="h6" sx={{ mt: 3, mb: 2 ,color:"black",fontWeight:"bold",bgcolor:"green"}}>
        Select Business Groups and respective Roles to be assigned
      </Typography>
      
      <TableContainer component={Paper} sx={{ mb: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width="15%">Org Unit</TableCell>
              <TableCell width="20%">Business Unit</TableCell>
              <TableCell width="20%">Functional Area</TableCell>
              <TableCell width="25%">Business Group</TableCell>
              <TableCell align="center">Approver</TableCell>
              <TableCell align="center">Author</TableCell>
              <TableCell align="center">Viewer</TableCell>
              <TableCell align="center">Feedback</TableCell>
              <TableCell align="center">Export</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {businessGroups.map((group) => (
              <TableRow key={group.id}>
                <TableCell>
                  <FormControl fullWidth size="small">
                    <Select
                      displayEmpty
                      value={group.orgUnit}
                      renderValue={(selected) => selected || "<Select Org Unit>"}
                    >
                      <MenuItem value=""><em>Select Org Unit</em></MenuItem>
                      <MenuItem value="unit1">Org Unit 1</MenuItem>
                      <MenuItem value="unit2">Org Unit 2</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <FormControl fullWidth size="small">
                    <Select
                      displayEmpty
                      value={group.businessUnit}
                      renderValue={(selected) => selected || "<Select Business Unit >"}
                    >
                      <MenuItem value=""><em>Select Business Unit</em></MenuItem>
                      <MenuItem value="bu1">Business Unit 1</MenuItem>
                      <MenuItem value="bu2">Business Unit 2</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <FormControl fullWidth size="small">
                    <Select
                      displayEmpty
                      value={group.functionalArea}
                      renderValue={(selected) => selected || "<Select Functional Area >"}
                    >
                      <MenuItem value=""><em>Select Functional Area</em></MenuItem>
                      <MenuItem value="fa1">Functional Area 1</MenuItem>
                      <MenuItem value="fa2">Functional Area 2</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <FormControl fullWidth size="small">
                    <Select
                      displayEmpty
                      value={group.businessGroup}
                      renderValue={(selected) => selected || "<Select Business Group >"}
                    >
                      <MenuItem value=""><em>Select Business Group</em></MenuItem>
                      <MenuItem value="bg1">Business Group 1</MenuItem>
                      <MenuItem value="bg2">Business Group 2</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="center"><Checkbox /></TableCell>
                <TableCell align="center"><Checkbox /></TableCell>
                <TableCell align="center"><Checkbox /></TableCell>
                <TableCell align="center"><Checkbox /></TableCell>
                <TableCell align="center"><Checkbox /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mb: 3 }}>
        <Link 
          component="button" 
          onClick={addBusinessGroup}
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            color: '#3498db', 
            textDecoration: 'none',
            '&:hover': { textDecoration: 'underline' }
          }}
        >
          <AddIcon fontSize="small" sx={{ mr: 0.5 }} />
          Add a more Business Group assignments
        </Link>
      </Box>

      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <IconButton color="primary">
          <ArrowUpwardIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant="outlined" sx={{ px: 4 }}>
          Cancel
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ px: 4 }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default UserDetailsForm;