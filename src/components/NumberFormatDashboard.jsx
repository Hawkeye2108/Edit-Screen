import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Paper,
  Divider
} from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const DataProfileComponent = () => {
  const [showData, setShowData] = useState(false);

  // Sample data for the histogram - approximated from the image
  const histogramData = [
    { index: 1, value: 5 }, { index: 2, value: 8 }, { index: 3, value: 12 }, { index: 4, value: 15 },
    { index: 5, value: 18 }, { index: 6, value: 22 }, { index: 7, value: 28 }, { index: 8, value: 35 },
    { index: 9, value: 42 }, { index: 10, value: 48 }, { index: 11, value: 52 }, { index: 12, value: 45 },
    { index: 13, value: 38 }, { index: 14, value: 35 }, { index: 15, value: 32 }, { index: 16, value: 28 },
    { index: 17, value: 25 }, { index: 18, value: 22 }, { index: 19, value: 20 }, { index: 20, value: 18 },
    { index: 21, value: 16 }, { index: 22, value: 15 }, { index: 23, value: 14 }, { index: 24, value: 13 },
    { index: 25, value: 12 }, { index: 26, value: 11 }, { index: 27, value: 10 }, { index: 28, value: 9 },
    { index: 29, value: 8 }, { index: 30, value: 7 }, { index: 31, value: 6 }, { index: 32, value: 5 },
    { index: 33, value: 4 }, { index: 34, value: 3 }, { index: 35, value: 2 }, { index: 36, value: 1 },
    { index: 37, value: 15 }, { index: 38, value: 18 }, { index: 39, value: 22 }, { index: 40, value: 25 },
    { index: 41, value: 28 }, { index: 42, value: 30 }, { index: 43, value: 32 }, { index: 44, value: 28 },
    { index: 45, value: 25 }, { index: 46, value: 22 }, { index: 47, value: 20 }, { index: 48, value: 18 },
    { index: 49, value: 15 }, { index: 50, value: 12 }, { index: 51, value: 10 }, { index: 52, value: 8 },
    { index: 53, value: 6 }, { index: 54, value: 4 }, { index: 55, value: 2 }, { index: 56, value: 65 }
  ];

  const StatCard = ({ title, value, bgColor = '#f5f5f5' }) => (
    <Paper 
      elevation={1} 
      sx={{ 
        p: 2, 
        backgroundColor: bgColor,
        minHeight: 60,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
        {title}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 600, mt: 0.5 }}>
        {value}
      </Typography>
    </Paper>
  );

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: 'auto' }}>
      <Button 
        variant="contained" 
        onClick={() => setShowData(!showData)}
        sx={{ mb: 3 }}
      >
        {showData ? 'Hide Data Profile' : 'Show Data Profile'}
      </Button>

      {showData && (
        <Card elevation={3}>
          <CardContent sx={{ p: 3 }}>
            {/* Top Statistics Row */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {/* Left Column */}
              <Grid item xs={12} md={4}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <StatCard title="Number Pattern" value="No/Yes" />
                  </Grid>
                  <Grid item xs={12}>
                    <StatCard title="Distinct" value="18" />
                  </Grid>
                  <Grid item xs={12}>
                    <StatCard title="Distinct (%)" value="< 0.1%" />
                  </Grid>
                  <Grid item xs={12}>
                    <StatCard title="Missing" value="0" />
                  </Grid>
                  <Grid item xs={12}>
                    <StatCard title="Missing (%)" value="0.0%" />
                  </Grid>
                </Grid>
              </Grid>

              {/* Middle Column */}
              <Grid item xs={12} md={4}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <StatCard title="Minimum" value="1" />
                  </Grid>
                  <Grid item xs={12}>
                    <StatCard title="Maximum" value="12" />
                  </Grid>
                  <Grid item xs={12}>
                    <StatCard title="Zeros" value="0" />
                  </Grid>
                  <Grid item xs={12}>
                    <StatCard title="Zeros (%)" value="0.0%" />
                  </Grid>
                  <Grid item xs={12}>
                    <StatCard title="Negative" value="0" />
                  </Grid>
                  <Grid item xs={12}>
                    <StatCard title="Negative (%)" value="0.0%" />
                  </Grid>
                </Grid>
              </Grid>

              {/* Right Column */}
              <Grid item xs={12} md={4}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <StatCard title="Mean" value="1" bgColor="#e8f4f8" />
                  </Grid>
                  <Grid item xs={12}>
                    <StatCard title="Standard deviation" value="12" bgColor="#e8f4f8" />
                  </Grid>
                  <Grid item xs={12}>
                    <StatCard title="Sum" value="0" bgColor="#e8f4f8" />
                  </Grid>
                  <Grid item xs={12}>
                    <StatCard title="Variance" value="0.0%" bgColor="#e8f4f8" />
                  </Grid>
                  <Grid item xs={4}>
                    <Paper 
                      sx={{ 
                        p: 1, 
                        backgroundColor: '#2c3e50', 
                        color: 'white',
                        textAlign: 'center',
                        minHeight: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Outlier Fixes
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            {/* Histogram Section */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
                Numeric column name
              </Typography>
              <Box sx={{ height: 300, width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={histogramData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis 
                      dataKey="index" 
                      tick={false}
                      axisLine={false}
                    />
                    <YAxis hide />
                    <Bar 
                      dataKey="value" 
                      fill="#2c3e50" 
                      stroke="#2c3e50"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default DataProfileComponent;
