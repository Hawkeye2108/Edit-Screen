import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip
} from '@mui/material';
import {
  ArrowForward,
  ArrowBack,
  Add,
  Remove
} from '@mui/icons-material';

export default function DatasetManager() {
  const [availableAttributes] = useState([
    'AAAAAAA',
    'BBBBBBB', 
    'CCCCC',
    'DDDDD',
    'EEEEEEE',
    'FFFFFF',
    'GGGGGG'
  ]);

  const [selectedAttributes, setSelectedAttributes] = useState([
    'AAAAAAA',
    'BBBBBBB',
    'DDDDD',
    'EEEEEEE',
    'GGGGGG'
  ]);

  const [formData, setFormData] = useState({
    connectionName: 'managepunder (Redshift)',
    sourceSchema: '',
    datasetName: '< Name of Dataset >',
    dataDomain: '< Data Domain >',
    description: '< Description of Dataset >',
    targetSchema: 'Schema name',
    targetTableName: 'Table_Name'
  });

  const moveToSelected = (attribute) => {
    if (!selectedAttributes.includes(attribute)) {
      setSelectedAttributes([...selectedAttributes, attribute]);
    }
  };

  const removeFromSelected = (attribute) => {
    setSelectedAttributes(selectedAttributes.filter(item => item !== attribute));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Box sx={{ p: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 'bold', color: '#333' }}>
        Manage Datasets – Add/Edit Datasets
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 3, color: '#666' }}>
        Click to edit master subtitle style
      </Typography>

      {/* Color bar */}
      <Box sx={{ 
        height: 8, 
        background: 'linear-gradient(to right, #4CAF50, #FF5722, #2196F3, #FFC107)',
        mb: 3
      }} />

      <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        {/* Edit Dataset Header */}
        <Box sx={{ 
          backgroundColor: '#1976d2', 
          color: 'white', 
          p: 2, 
          textAlign: 'center',
          position: 'relative'
        }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Edit Dataset
          </Typography>
          <Typography variant="caption" sx={{ 
            position: 'absolute', 
            top: 8, 
            right: 16,
            backgroundColor: 'rgba(255,255,255,0.2)',
            px: 1,
            py: 0.5,
            borderRadius: 1
          }}>
            With Search feature
          </Typography>
        </Box>

        <CardContent sx={{ p: 3 }}>
          {/* Form Fields */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                label="Connection Name"
                value={formData.connectionName}
                onChange={(e) => handleInputChange('connectionName', e.target.value)}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                label="Source Schema"
                value={formData.sourceSchema}
                onChange={(e) => handleInputChange('sourceSchema', e.target.value)}
                variant="outlined"
                size="small"
                placeholder="Schema name"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                label="Dataset Name"
                value={formData.datasetName}
                onChange={(e) => handleInputChange('datasetName', e.target.value)}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                label="Data Domain"
                value={formData.dataDomain}
                onChange={(e) => handleInputChange('dataDomain', e.target.value)}
                variant="outlined"
                size="small"
              />
            </Grid>
          </Grid>

          {/* Description */}
          <Box sx={{ mb: 4 }}>
            <TextField
              fullWidth
              label="Description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              variant="outlined"
              multiline
              rows={3}
            />
          </Box>

          {/* Attributes Selection */}
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
            Select Attributes to be considered in creating any Business Rule
          </Typography>

          <Grid container spacing={2} sx={{ mb: 4 }}>
            {/* Available Attributes */}
            <Grid item xs={5}>
              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
                Available Attributes
              </Typography>
              <Paper variant="outlined" sx={{ height: 200, overflow: 'auto' }}>
                <List dense>
                  {availableAttributes.filter(attr => !selectedAttributes.includes(attr)).map((attribute) => (
                    <ListItem 
                      key={attribute}
                      sx={{ 
                        backgroundColor: '#e3f2fd',
                        mb: 0.5,
                        cursor: 'pointer',
                        '&:hover': { backgroundColor: '#bbdefb' }
                      }}
                      onClick={() => moveToSelected(attribute)}
                    >
                      <ListItemText primary={attribute} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            {/* Arrow Buttons */}
            <Grid item xs={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <IconButton 
                sx={{ mb: 1, backgroundColor: '#f0f0f0' }}
                onClick={() => {/* Add logic for moving all right */}}
              >
                <ArrowForward />
              </IconButton>
              <IconButton 
                sx={{ backgroundColor: '#f0f0f0' }}
                onClick={() => {/* Add logic for moving all left */}}
              >
                <ArrowBack />
              </IconButton>
            </Grid>

            {/* Selected Attributes */}
            <Grid item xs={5}>
              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
                Selected Attributes
              </Typography>
              <Paper variant="outlined" sx={{ height: 200, overflow: 'auto' }}>
                <List dense>
                  {selectedAttributes.map((attribute) => (
                    <ListItem 
                      key={attribute}
                      sx={{ 
                        backgroundColor: '#f3e5f5',
                        mb: 0.5,
                        cursor: 'pointer',
                        '&:hover': { backgroundColor: '#e1bee7' }
                      }}
                      onClick={() => removeFromSelected(attribute)}
                    >
                      <ListItemText primary={attribute} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>

          {/* Target Schema and Table */}
          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Target Schema"
                value={formData.targetSchema}
                onChange={(e) => handleInputChange('targetSchema', e.target.value)}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Target Table Name"
                value={formData.targetTableName}
                onChange={(e) => handleInputChange('targetTableName', e.target.value)}
                variant="outlined"
                size="small"
              />
            </Grid>
          </Grid>

          {/* BR_Entity.table info */}
          <Box sx={{ mb: 3, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: '#666' }}>
              BR_Entity.table, Once Approved
            </Typography>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button 
              variant="outlined" 
              size="large"
              sx={{ px: 4 }}
            >
              Cancel
            </Button>
            <Button 
              variant="contained" 
              size="large"
              sx={{ px: 4 }}
            >
              Submit
            </Button>
          </Box>
        </CardContent>
      </Paper>
    </Box>
  );
}
