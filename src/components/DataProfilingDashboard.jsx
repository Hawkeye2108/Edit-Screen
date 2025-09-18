import React, { useState, useMemo } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  InputAdornment,
  Card,
  CardContent,
  Grid,
  Chip,
  LinearProgress,
  useTheme,
  alpha
} from '@mui/material';
import {
  Search as SearchIcon,
  CalendarToday as CalendarIcon,
  Numbers as NumbersIcon,
  TextFields as TextIcon,
  Category as CategoryIcon,
  CheckBox as BooleanIcon
} from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

// Mock data matching the image
const mockColumnData = [
  {
    id: 'invoice_date',
    name: 'Invoice_Date',
    type: 'Date',
    distinct: 18,
    distinctPercent: '< 0.1%',
    missing: 0,
    missingPercent: '0%',
    min: '2017-01-01',
    max: '2018-01-06',
    mean: '',
    zero: '',
    zeroPercent: '',
    negative: '',
    negativePercent: '',
    profileScore: 100,
    dateFormat: 'DD/MM/YY',
    minTimestamp: '2017-01-01 00:00:00',
    maxTimestamp: '2018-01-06 00:00:00',
    gapFrequency: 'Weekly'
  },
  {
    id: 'month',
    name: 'Month',
    type: 'Numeric',
    distinct: '',
    distinctPercent: '100%',
    missing: '',
    missingPercent: '50%',
    min: '',
    max: '',
    mean: '',
    zero: '',
    zeroPercent: '',
    negative: '',
    negativePercent: '',
    profileScore: 100
  },
  {
    id: 'name',
    name: 'Name',
    type: 'Text',
    distinct: '',
    distinctPercent: '',
    missing: '',
    missingPercent: '',
    min: '',
    max: '',
    mean: '',
    zero: '',
    zeroPercent: '',
    negative: '',
    negativePercent: '',
    profileScore: 70
  },
  {
    id: 'cust_type',
    name: 'CustType',
    type: 'Categorical',
    distinct: '',
    distinctPercent: '',
    missing: '',
    missingPercent: '',
    min: '',
    max: '',
    mean: '',
    zero: '',
    zeroPercent: '',
    negative: '',
    negativePercent: '',
    profileScore: 100
  },
  {
    id: 'tax',
    name: 'Tax',
    type: 'Number',
    distinct: '',
    distinctPercent: '',
    missing: '',
    missingPercent: '',
    min: '',
    max: '',
    mean: '',
    zero: '',
    zeroPercent: '',
    negative: '',
    negativePercent: '',
    profileScore: 100
  },
  {
    id: 'free_flag',
    name: 'FREE_Flag',
    type: 'Boolean',
    distinct: '',
    distinctPercent: '',
    missing: '',
    missingPercent: '',
    min: '',
    max: '',
    mean: '',
    zero: '',
    zeroPercent: '',
    negative: '',
    negativePercent: '',
    profileScore: 100
  }
];

// Generate mock chart data
const generateChartData = (columnId) => {
  const dataPoints = [];
  for (let i = 0; i < 52; i++) {
    dataPoints.push({
      index: i,
      value: Math.floor(Math.random() * 100) + 10
    });
  }
  return dataPoints;
};

const getTypeIcon = (type) => {
  switch (type.toLowerCase()) {
    case 'date': return <CalendarIcon fontSize="small" />;
    case 'numeric': case 'number': return <NumbersIcon fontSize="small" />;
    case 'text': return <TextIcon fontSize="small" />;
    case 'categorical': return <CategoryIcon fontSize="small" />;
    case 'boolean': return <BooleanIcon fontSize="small" />;
    default: return <TextIcon fontSize="small" />;
  }
};

const getProfileScoreColor = (score) => {
  if (score >= 90) return '#4caf50';
  if (score >= 70) return '#ff9800';
  return '#f44336';
};

const ColumnStatsTable = ({ columns, onColumnClick, selectedColumn }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const theme = useTheme();

  const filteredColumns = useMemo(() => {
    return columns.filter(col => 
      col.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      col.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [columns, searchTerm]);

  return (
    <Paper elevation={2} sx={{ mb: 3 }}>
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Key Column Stats
        </Typography>
        <TextField
          placeholder="Search column for selection"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ width: 300 }}
        />
      </Box>
      
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', bgcolor: theme.palette.primary.main, color: 'white' }}>
                Column Name
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', bgcolor: theme.palette.primary.main, color: 'white' }}>
                Types
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', bgcolor: theme.palette.primary.main, color: 'white' }}>
                Distinct
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', bgcolor: theme.palette.primary.main, color: 'white' }}>
                Distinct (%)
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', bgcolor: theme.palette.primary.main, color: 'white' }}>
                Missing
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', bgcolor: theme.palette.primary.main, color: 'white' }}>
                Missing (%)
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', bgcolor: theme.palette.primary.main, color: 'white' }}>
                Min
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', bgcolor: theme.palette.primary.main, color: 'white' }}>
                Max
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', bgcolor: theme.palette.primary.main, color: 'white' }}>
                Mean
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', bgcolor: theme.palette.primary.main, color: 'white' }}>
                Zero
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', bgcolor: theme.palette.primary.main, color: 'white' }}>
                Zero%
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', bgcolor: theme.palette.primary.main, color: 'white' }}>
                Negative
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', bgcolor: theme.palette.primary.main, color: 'white' }}>
                Negative %
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', bgcolor: theme.palette.primary.main, color: 'white' }}>
                Profile Score
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredColumns.map((column) => (
              <TableRow 
                key={column.id}
                hover
                onClick={() => onColumnClick(column)}
                sx={{ 
                  cursor: 'pointer',
                  bgcolor: selectedColumn?.id === column.id ? alpha(theme.palette.primary.main, 0.1) : 'inherit',
                  '&:hover': {
                    bgcolor: alpha(theme.palette.primary.main, 0.05)
                  }
                }}
              >
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {getTypeIcon(column.type)}
                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                      {column.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip 
                    label={column.type} 
                    size="small" 
                    variant="outlined"
                    sx={{ fontSize: '0.75rem' }}
                  />
                </TableCell>
                <TableCell>{column.distinct}</TableCell>
                <TableCell>{column.distinctPercent}</TableCell>
                <TableCell>{column.missing}</TableCell>
                <TableCell>{column.missingPercent}</TableCell>
                <TableCell>{column.min}</TableCell>
                <TableCell>{column.max}</TableCell>
                <TableCell>{column.mean}</TableCell>
                <TableCell>{column.zero}</TableCell>
                <TableCell>{column.zeroPercent}</TableCell>
                <TableCell>{column.negative}</TableCell>
                <TableCell>{column.negativePercent}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={column.profileScore}
                      sx={{
                        width: 60,
                        height: 8,
                        borderRadius: 4,
                        bgcolor: alpha(getProfileScoreColor(column.profileScore), 0.2),
                        '& .MuiLinearProgress-bar': {
                          bgcolor: getProfileScoreColor(column.profileScore),
                          borderRadius: 4
                        }
                      }}
                    />
                    <Typography variant="caption" sx={{ color: getProfileScoreColor(column.profileScore) }}>
                      {column.profileScore}%
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

const ColumnDetailView = ({ column }) => {
  const theme = useTheme();
  const chartData = useMemo(() => generateChartData(column?.id), [column?.id]);

  if (!column) {
    return (
      <Paper elevation={2} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h6" color="textSecondary">
          Select a column to view detailed statistics
        </Typography>
      </Paper>
    );
  }

  const isDateColumn = column.type.toLowerCase() === 'date';

  return (
    <Paper elevation={2}>
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="h6">
          Column Details: {column.name}
        </Typography>
      </Box>
      
      <Box sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {/* KPI Cards */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Card variant="outlined">
                  <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                    <Typography variant="caption" color="textSecondary">
                      Distinct
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {column.distinct || 'N/A'}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={6}>
                <Card variant="outlined">
                  <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                    <Typography variant="caption" color="textSecondary">
                      Distinct (%)
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {column.distinctPercent || 'N/A'}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={6}>
                <Card variant="outlined">
                  <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                    <Typography variant="caption" color="textSecondary">
                      Missing
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {column.missing || 'N/A'}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={6}>
                <Card variant="outlined">
                  <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                    <Typography variant="caption" color="textSecondary">
                      Missing (%)
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {column.missingPercent || 'N/A'}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {isDateColumn && (
                <Grid item xs={6}>
                  <Card variant="outlined">
                    <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                      <Typography variant="caption" color="textSecondary">
                        Gap Frequency
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {column.gapFrequency || 'N/A'}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )}
            </Grid>
          </Grid>

          {/* Date Format Section (for date columns) */}
          {isDateColumn && (
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Date Format
                  </Typography>
                  
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="textSecondary">
                        Format Options:
                      </Typography>
                      <Box sx={{ mt: 1 }}>
                        {['DD/MM/YY', 'MM/DD/YY', 'DD-MM-YYYY', 'MM-DD-YY'].map((format) => (
                          <Chip 
                            key={format}
                            label={format}
                            size="small"
                            variant={format === column.dateFormat ? "filled" : "outlined"}
                            color={format === column.dateFormat ? "primary" : "default"}
                            sx={{ mr: 1, mb: 1 }}
                          />
                        ))}
                      </Box>
                    </Grid>
                    
                    <Grid item xs={6}>
                      <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                        Date Range:
                      </Typography>
                      <Typography variant="body2">
                        <strong>Min Date:</strong> {column.min}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Max Date:</strong> {column.max}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Min Timestamp:</strong> {column.minTimestamp}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Max Timestamp:</strong> {column.maxTimestamp}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>

        {/* Chart Section */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Data Distribution
          </Typography>
          <Paper variant="outlined" sx={{ p: 2, height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis 
                  dataKey="index" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                />
                <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={theme.palette.primary.main}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Box>
      </Box>
    </Paper>
  );
};

const DataProfilingDashboard = () => {
  const [selectedColumn, setSelectedColumn] = useState(null);

  const handleColumnClick = (column) => {
    setSelectedColumn(column);
  };

  return (
    <Box sx={{ p: 3, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Data Profiling Dashboard
      </Typography>
      
      <ColumnStatsTable 
        columns={mockColumnData}
        onColumnClick={handleColumnClick}
        selectedColumn={selectedColumn}
      />
      
      <ColumnDetailView column={selectedColumn} />
    </Box>
  );
};

export default DataProfilingDashboard;
