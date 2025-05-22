import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Grid,
  Divider,
  Chip
} from '@mui/material';
import {
  Add,
  Delete,
  ExpandMore
} from '@mui/icons-material';

const ValueRangeBucketsForm = () => {
  const [formData, setFormData] = useState({
    ruleName: 'Sales Volume Buckets',
    orgUnit: 'US',
    businessUnit: 'Rare Diseases',
    functionalArea: 'Sales Ops',
    specialty: 'Oncology',
    sourceOfData: 'SHS',
    timePeriodRange: 'Preceding 12 Months'
  });

  const [bucketRules, setBucketRules] = useState([
    {
      id: 1,
      attribute: '',
      bucketName: 'High Sales',
      startCondition: '>=',
      startValue: '',
      endCondition: '<=',
      endValue: ''
    },
    {
      id: 2,
      attribute: '',
      bucketName: 'Mid Sales',
      startCondition: '>=',
      startValue: '',
      endCondition: '<=',
      endValue: ''
    },
    {
      id: 3,
      attribute: '',
      bucketName: 'Low Sales',
      startCondition: '>=',
      startValue: '',
      endCondition: '<=',
      endValue: ''
    }
  ]);

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBucketRuleChange = (id, field, value) => {
    setBucketRules(prev => 
      prev.map(rule => 
        rule.id === id ? { ...rule, [field]: value } : rule
      )
    );
  };

  const addBucketRule = () => {
    const newRule = {
      id: Date.now(),
      attribute: '',
      bucketName: '',
      startCondition: '>=',
      startValue: '',
      endCondition: '<=',
      endValue: ''
    };
    setBucketRules(prev => [...prev, newRule]);
  };

  const removeBucketRule = (id) => {
    if (bucketRules.length > 1) {
      setBucketRules(prev => prev.filter(rule => rule.id !== id));
    }
  };

  const handleSave = () => {
    console.log('Saving draft...', { formData, bucketRules });
  };

  const handleSubmit = () => {
    console.log('Submitting...', { formData, bucketRules });
  };

  const handleCancel = () => {
    console.log('Cancelling...');
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: '0 auto', p: 3 }}>
      <Card elevation={2}>
        <CardContent>
          {/* Header */}
          <Box sx={{ 
            backgroundColor: '#1976d2', 
            color: 'white', 
            p: 2, 
            borderRadius: 1,
            mb: 3,
            textAlign: 'center'
          }}>
            <Typography variant="h5" fontWeight="bold">
              Value Range Buckets
            </Typography>
          </Box>

          {/* Form Fields */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                label="Rule Name"
                value={formData.ruleName}
                onChange={(e) => handleFormChange('ruleName', e.target.value)}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <FormControl fullWidth size="small">
                <InputLabel>Org Unit</InputLabel>
                <Select
                  value={formData.orgUnit}
                  label="Org Unit"
                  onChange={(e) => handleFormChange('orgUnit', e.target.value)}
                >
                  <MenuItem value="US">US</MenuItem>
                  <MenuItem value="EU">EU</MenuItem>
                  <MenuItem value="APAC">APAC</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
              <FormControl fullWidth size="small">
                <InputLabel>Business Unit</InputLabel>
                <Select
                  value={formData.businessUnit}
                  label="Business Unit"
                  onChange={(e) => handleFormChange('businessUnit', e.target.value)}
                >
                  <MenuItem value="Rare Diseases">Rare Diseases</MenuItem>
                  <MenuItem value="Oncology">Oncology</MenuItem>
                  <MenuItem value="Primary Care">Primary Care</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
              <FormControl fullWidth size="small">
                <InputLabel>Functional Area</InputLabel>
                <Select
                  value={formData.functionalArea}
                  label="Functional Area"
                  onChange={(e) => handleFormChange('functionalArea', e.target.value)}
                >
                  <MenuItem value="Sales Ops">Sales Ops</MenuItem>
                  <MenuItem value="Marketing">Marketing</MenuItem>
                  <MenuItem value="Medical">Medical</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Chip 
                  label="Specialty" 
                  size="small" 
                  sx={{ backgroundColor: '#f5f5f5' }}
                />
                <FormControl fullWidth size="small">
                  <Select
                    value={formData.specialty}
                    onChange={(e) => handleFormChange('specialty', e.target.value)}
                    displayEmpty
                  >
                    <MenuItem value="Oncology">Oncology</MenuItem>
                    <MenuItem value="Cardiology">Cardiology</MenuItem>
                    <MenuItem value="Neurology">Neurology</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Parameters Section */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                Parameters
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    Source of Data
                  </Typography>
                  <TextField
                    fullWidth
                    value={formData.sourceOfData}
                    onChange={(e) => handleFormChange('sourceOfData', e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    Time Period Range (Optional)
                  </Typography>
                  <TextField
                    fullWidth
                    value={formData.timePeriodRange}
                    onChange={(e) => handleFormChange('timePeriodRange', e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Bucket Rules Table */}
          <TableContainer component={Paper} variant="outlined">
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableCell sx={{ fontWeight: 'bold' }}>Attribute</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Bucket Name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }} align="center">Start Condition</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }} align="center">Values</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }} align="center">End Condition</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }} align="center">Values</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }} align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bucketRules.map((rule, index) => (
                  <TableRow key={rule.id}>
                    <TableCell>
                      <TextField
                        fullWidth
                        value={rule.attribute}
                        onChange={(e) => handleBucketRuleChange(rule.id, 'attribute', e.target.value)}
                        variant="outlined"
                        size="small"
                        placeholder="Enter attribute"
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        value={rule.bucketName}
                        onChange={(e) => handleBucketRuleChange(rule.id, 'bucketName', e.target.value)}
                        variant="outlined"
                        size="small"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <FormControl size="small" sx={{ minWidth: 60 }}>
                        <Select
                          value={rule.startCondition}
                          onChange={(e) => handleBucketRuleChange(rule.id, 'startCondition', e.target.value)}
                        >
                          <MenuItem value=">=">&gt;=</MenuItem>
                          <MenuItem value=">">&gt;</MenuItem>
                          <MenuItem value="=">=</MenuItem>
                          <MenuItem value="<">&lt;</MenuItem>
                          <MenuItem value="<=">&lt;=</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        value={rule.startValue}
                        onChange={(e) => handleBucketRuleChange(rule.id, 'startValue', e.target.value)}
                        variant="outlined"
                        size="small"
                        type="number"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <FormControl size="small" sx={{ minWidth: 60 }}>
                        <Select
                          value={rule.endCondition}
                          onChange={(e) => handleBucketRuleChange(rule.id, 'endCondition', e.target.value)}
                        >
                          <MenuItem value="<=">&lt;=</MenuItem>
                          <MenuItem value="<">&lt;</MenuItem>
                          <MenuItem value="=">=</MenuItem>
                          <MenuItem value=">">&gt;</MenuItem>
                          <MenuItem value=">=">&gt;=</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        value={rule.endValue}
                        onChange={(e) => handleBucketRuleChange(rule.id, 'endValue', e.target.value)}
                        variant="outlined"
                        size="small"
                        type="number"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        onClick={() => removeBucketRule(rule.id)}
                        disabled={bucketRules.length === 1}
                        size="small"
                        color="error"
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Add Button */}
          <Box sx={{ mt: 2 }}>
            <Button
              startIcon={<Add />}
              onClick={addBucketRule}
              variant="outlined"
              size="small"
              sx={{ 
                textDecoration: 'underline',
                color: '#666',
                borderColor: '#666',
                '&:hover': {
                  backgroundColor: '#f5f5f5'
                }
              }}
            >
              Add Additional Bucket Rule
            </Button>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
            gap: 2, 
            mt: 4,
            pt: 2,
            borderTop: '1px solid #e0e0e0'
          }}>
            <Button
              variant="outlined"
              onClick={handleCancel}
              sx={{ 
                minWidth: 100,
                color: '#666',
                borderColor: '#ccc'
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSave}
              sx={{ 
                minWidth: 100,
                backgroundColor: '#1976d2',
                '&:hover': {
                  backgroundColor: '#1565c0'
                }
              }}
            >
              Save Draft
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{ 
                minWidth: 100,
                backgroundColor: '#1976d2',
                '&:hover': {
                  backgroundColor: '#1565c0'
                }
              }}
            >
              Submit
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ValueRangeBucketsForm;
