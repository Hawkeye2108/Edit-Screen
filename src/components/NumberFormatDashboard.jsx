import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Chip
} from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const NumericDashboard = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  
  // Sample data for the bar chart based on the image pattern
  const chartData = [
    { name: '1', value: 8 },
    { name: '2', value: 12 },
    { name: '3', value: 6 },
    { name: '4', value: 4 },
    { name: '5', value: 15 },
    { name: '6', value: 18 },
    { name: '7', value: 22 },
    { name: '8', value: 25 },
    { name: '9', value: 28 },
    { name: '10', value: 45 },
    { name: '11', value: 38 },
    { name: '12', value: 35 },
    { name: '13', value: 32 },
    { name: '14', value: 30 },
    { name: '15', value: 28 },
    { name: '16', value: 26 },
    { name: '17', value: 35 },
    { name: '18', value: 38 },
    { name: '19', value: 36 },
    { name: '20', value: 34 },
    { name: '21', value: 32 },
    { name: '22', value: 30 },
    { name: '23', value: 28 },
    { name: '24', value: 26 },
    { name: '25', value: 24 },
    { name: '26', value: 22 },
    { name: '27', value: 20 },
    { name: '28', value: 18 },
    { name: '29', value: 16 },
    { name: '30', value: 14 },
    { name: '31', value: 12 },
    { name: '32', value: 15 },
    { name: '33', value: 18 },
    { name: '34', value: 20 },
    { name: '35', value: 22 },
    { name: '36', value: 25 },
    { name: '37', value: 28 },
    { name: '38', value: 26 },
    { name: '39', value: 24 },
    { name: '40', value: 22 },
    { name: '41', value: 30 },
    { name: '42', value: 35 },
    { name: '43', value: 32 },
    { name: '44', value: 28 },
    { name: '45', value: 25 },
    { name: '46', value: 22 },
    { name: '47', value: 18 },
    { name: '48', value: 15 },
    { name: '49', value: 12 },
    { name: '50', value: 55 }
  ];

  const StatCard = ({ title, data }) => (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <TableContainer>
          <Table size="small">
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index} sx={{ '&:last-child td': { border: 0 } }}>
                  <TableCell 
                    component="th" 
                    scope="row" 
                    sx={{ 
                      fontWeight: 500, 
                      color: 'text.secondary',
                      fontSize: '0.875rem',
                      py: 1.5,
                      border: 'none'
                    }}
                  >
                    {row.label}
                  </TableCell>
                  <TableCell 
                    align="right" 
                    sx={{ 
                      fontWeight: 500,
                      fontSize: '0.875rem',
                      py: 1.5,
                      border: 'none'
                    }}
                  >
                    {row.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );

  const DashboardContent = () => {
    const leftColumnData = [
      { label: 'Number Pattern', value: 'No/Yes' },
      { label: 'Distinct', value: '18' },
      { label: 'Distinct (%)', value: '< 0.1%' },
      { label: 'Missing', value: '0' },
      { label: 'Missing (%)', value: '0.0%' }
    ];

    const middleColumnData = [
      { label: 'Minimum', value: '1' },
      { label: 'Maximum', value: '12' },
      { label: 'Zeros', value: '0' },
      { label: 'Zeros (%)', value: '0.0%' },
      { label: 'Negative', value: '0' },
      { label: 'Negative (%)', value: '0.0%' }
    ];

    const rightColumnData = [
      { label: 'Mean', value: '1' },
      { label: 'Standard deviation', value: '12' },
      { label: 'Sum', value: '0' },
      { label: 'Variance', value: '0.0%' }
    ];

    return (
      <Box sx={{ p: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        {/* Statistics Grid */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} md={4}>
            <StatCard title="Pattern & Missing" data={leftColumnData} />
          </Grid>
          <Grid item xs={12} md={4}>
            <StatCard title="Range & Values" data={middleColumnData} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <StatCard title="Statistical Measures" data={rightColumnData} />
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <Chip
                  label="Outlier Fixes"
                  sx={{
                    backgroundColor: '#2c3e50',
                    color: 'white',
                    fontWeight: 500,
                    px: 2
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Chart Section */}
        <Card>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ width: '100%', height: 400 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={chartData} 
                  margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                >
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#666' }}
                    interval={0}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#666' }}
                  />
                  <Bar 
                    dataKey="value" 
                    fill="#4a5568"
                    radius={[2, 2, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Box>
            <Typography 
              variant="body2" 
              sx={{ 
                textAlign: 'center', 
                mt: 2, 
                color: 'text.secondary',
                fontStyle: 'italic'
              }}
            >
              Numeric column name
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  };

  return (
    <Box>
      {!showDashboard ? (
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh',
            backgroundColor: '#f5f5f5'
          }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => setShowDashboard(true)}
            sx={{
              backgroundColor: '#2c3e50',
              '&:hover': { backgroundColor: '#34495e' },
              px: 4,
              py: 2,
              fontSize: '1.1rem'
            }}
          >
            Show Numeric Dashboard
          </Button>
        </Box>
      ) : (
        <>
          <Box sx={{ position: 'fixed', top: 16, right: 16, zIndex: 1000 }}>
            <Button
              variant="outlined"
              onClick={() => setShowDashboard(false)}
              sx={{ 
                backgroundColor: 'white',
                borderColor: '#2c3e50',
                color: '#2c3e50',
                '&:hover': {
                  backgroundColor: '#f8f9fa',
                  borderColor: '#34495e'
                }
              }}
            >
              Hide Dashboard
            </Button>
          </Box>
          <DashboardContent />
        </>
      )}
    </Box>
  );
};

export default NumericDashboard;
