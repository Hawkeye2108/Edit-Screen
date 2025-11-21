import React, { useState, useMemo } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
  Typography,
  Snackbar,
  Alert
} from '@mui/material';

const STATISTICS = [
  { id: 'uniqueness', name: 'Uniqueness', supportsBoolean: true, supportsDate: true },
  { id: 'histogram', name: 'Histogram', supportsBoolean: true, supportsDate: true },
  { id: 'nullability', name: 'Nullability', supportsBoolean: true, supportsDate: true },
  { id: 'missingCount', name: 'Missing Count', supportsBoolean: false, supportsDate: true },
  { id: 'missingPercentage', name: 'Missing Percentage', supportsBoolean: false, supportsDate: true },
  { id: 'splitCoverage', name: 'Split Coverage', supportsBoolean: false, supportsDate: true },
  { id: 'patternIdentification', name: 'Pattern identification', supportsBoolean: false, supportsDate: true },
  { id: 'zeroCount', name: 'Zero Count', supportsBoolean: false, supportsDate: false }
];

const BATCHES = [
  { id: 'batch1', name: 'Batch 1' },
  { id: 'batch2', name: 'Batch 2' },
  { id: 'batch3', name: 'Batch 3' }
];

const COLUMNS = {
  batch1: [
    { id: 'col1', name: 'Column A', type: 'boolean' },
    { id: 'col2', name: 'Column B', type: 'date' },
    { id: 'col3', name: 'Column C', type: 'number' }
  ],
  batch2: [
    { id: 'col4', name: 'Column D', type: 'boolean' },
    { id: 'col5', name: 'Column E', type: 'date' }
  ],
  batch3: [
    { id: 'col6', name: 'Column F', type: 'date' },
    { id: 'col7', name: 'Column G', type: 'boolean' }
  ]
};

const StatisticsConfigApp = () => {
  const [batchName, setBatchName] = useState('');
  const [batchSearchable, setBatchSearchable] = useState(true);
  const [columnName, setColumnName] = useState('');
  const [columnSearchable, setColumnSearchable] = useState(true);
  const [scope, setScope] = useState('batch');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  
  // Store applied statistics per batch and column
  const [appliedStats, setAppliedStats] = useState({});

  // Get available columns based on selected batch
  const availableColumns = useMemo(() => {
    if (!selectedBatch) return [];
    return COLUMNS[selectedBatch] || [];
  }, [selectedBatch]);

  // Handle batch selection
  const handleBatchSelect = (batchId) => {
    setSelectedBatch(batchId);
    setSelectedColumns([]);
  };

  // Handle column selection (multi-select)
  const handleColumnToggle = (columnId) => {
    setSelectedColumns(prev => {
      if (prev.includes(columnId)) {
        return prev.filter(id => id !== columnId);
      }
      return [...prev, columnId];
    });
  };

  // Get current state of statistics for selected batch and columns
  const getStatisticsState = () => {
    const state = {};
    
    STATISTICS.forEach(stat => {
      const key = `${selectedBatch}-${stat.id}`;
      
      if (selectedColumns.length === 0) {
        // If no columns selected, show batch-level stats
        state[stat.id] = {
          boolean: appliedStats[`${key}-boolean`] || false,
          date: appliedStats[`${key}-date`] || false
        };
      } else {
        // Show if ALL selected columns have this stat applied
        const allColumnsHaveStat = selectedColumns.every(colId => {
          const column = availableColumns.find(c => c.id === colId);
          if (!column) return false;
          
          const colKey = `${selectedBatch}-${colId}-${stat.id}`;
          
          if (column.type === 'boolean') {
            return appliedStats[`${colKey}-boolean`] || false;
          } else if (column.type === 'date') {
            return appliedStats[`${colKey}-date`] || false;
          }
          return false;
        });
        
        state[stat.id] = {
          boolean: allColumnsHaveStat,
          date: allColumnsHaveStat
        };
      }
    });
    
    return state;
  };

  const statisticsState = getStatisticsState();

  // Handle checkbox toggle
  const handleStatToggle = (statId, columnType) => {
    if (selectedColumns.length === 0) {
      setSnackbar({
        open: true,
        message: 'Please select at least one column to edit statistics',
        severity: 'warning'
      });
      return;
    }

    const newAppliedStats = { ...appliedStats };
    const currentValue = statisticsState[statId][columnType];

    selectedColumns.forEach(colId => {
      const column = availableColumns.find(c => c.id === colId);
      if (!column || column.type !== columnType) return;

      const key = `${selectedBatch}-${colId}-${statId}-${columnType}`;
      newAppliedStats[key] = !currentValue;
    });

    setAppliedStats(newAppliedStats);
  };

  // Check if a statistic is applicable for a column type
  const isStatApplicable = (stat, columnType) => {
    if (selectedColumns.length === 0) return false;
    
    // Check if any selected column matches this type
    const hasMatchingColumn = selectedColumns.some(colId => {
      const column = availableColumns.find(c => c.id === colId);
      return column && column.type === columnType;
    });

    if (!hasMatchingColumn) return false;

    if (columnType === 'boolean') return stat.supportsBoolean;
    if (columnType === 'date') return stat.supportsDate;
    return false;
  };

  // Handle submit
  const handleSubmit = () => {
    if (!selectedBatch) {
      setSnackbar({
        open: true,
        message: 'Please select a batch',
        severity: 'error'
      });
      return;
    }

    if (selectedColumns.length === 0) {
      setSnackbar({
        open: true,
        message: 'Please select at least one column',
        severity: 'error'
      });
      return;
    }

    // Update statistics based on scope
    const message = scope === 'batch' 
      ? `Statistics updated for batch: ${selectedBatch}`
      : 'Statistics updated for all batches';

    setSnackbar({
      open: true,
      message,
      severity: 'success'
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        {/* Header Controls */}
        <Box sx={{ display: 'flex', gap: 3, mb: 3, flexWrap: 'wrap' }}>
          <FormControl sx={{ minWidth: 200 }}>
            <TextField
              label="Batch Name"
              value={batchName}
              onChange={(e) => setBatchName(e.target.value)}
              size="small"
            />
          </FormControl>

          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel size="small">Searchable</InputLabel>
            <Select
              value={batchSearchable}
              onChange={(e) => setBatchSearchable(e.target.value)}
              label="Searchable"
              size="small"
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }}>
            <TextField
              label="Column name"
              value={columnName}
              onChange={(e) => setColumnName(e.target.value)}
              size="small"
            />
          </FormControl>

          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel size="small">Searchable</InputLabel>
            <Select
              value={columnSearchable}
              onChange={(e) => setColumnSearchable(e.target.value)}
              label="Searchable"
              size="small"
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 250 }}>
            <InputLabel size="small">Scope</InputLabel>
            <Select
              value={scope}
              onChange={(e) => setScope(e.target.value)}
              label="Scope"
              size="small"
            >
              <MenuItem value="batch">Batch level/ App level</MenuItem>
              <MenuItem value="all">All batches</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Batch Selection */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" gutterBottom>
            Select Batch (Single Select):
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {BATCHES.map(batch => (
              <Button
                key={batch.id}
                variant={selectedBatch === batch.id ? 'contained' : 'outlined'}
                onClick={() => handleBatchSelect(batch.id)}
              >
                {batch.name}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Column Selection */}
        {selectedBatch && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" gutterBottom>
              Select Columns (Multi Select):
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {availableColumns.map(column => (
                <Button
                  key={column.id}
                  variant={selectedColumns.includes(column.id) ? 'contained' : 'outlined'}
                  onClick={() => handleColumnToggle(column.id)}
                  size="small"
                >
                  {column.name} ({column.type})
                </Button>
              ))}
            </Box>
          </Box>
        )}

        {/* Statistics Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: '#4A6FA5' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Statistics</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="center">Boolean</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="center">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {STATISTICS.map((stat, index) => (
                <TableRow 
                  key={stat.id}
                  sx={{ 
                    bgcolor: index % 2 === 0 ? '#f5f5f5' : 'white',
                    '&:hover': { bgcolor: '#e8e8e8' }
                  }}
                >
                  <TableCell sx={{ fontWeight: 500 }}>{stat.name}</TableCell>
                  <TableCell align="center">
                    <Checkbox
                      checked={statisticsState[stat.id]?.boolean || false}
                      onChange={() => handleStatToggle(stat.id, 'boolean')}
                      disabled={!isStatApplicable(stat, 'boolean')}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Checkbox
                      checked={statisticsState[stat.id]?.date || false}
                      onChange={() => handleStatToggle(stat.id, 'date')}
                      disabled={!isStatApplicable(stat, 'date')}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Submit Button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ 
              bgcolor: '#4A6FA5',
              '&:hover': { bgcolor: '#3d5a87' },
              minWidth: 120
            }}
          >
            Submit
          </Button>
        </Box>
      </Paper>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default StatisticsConfigApp;
