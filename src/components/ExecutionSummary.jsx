import React, { useState, useMemo } from 'react';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  Tab,
  Tabs,
  useTheme,
  alpha,
} from '@mui/material';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp } from 'lucide-react';

// Metric Card Component
const MetricCard = ({ title, value, change, subtitle }) => {
  const theme = useTheme();
  
  return (
    <Card elevation={2} sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <Typography variant="h3" component="div" fontWeight="bold">
            {value}
          </Typography>
          {change && (
            <Chip
              icon={<TrendingUp size={14} />}
              label={change}
              size="small"
              color="success"
              sx={{ height: 20, fontSize: '0.7rem' }}
            />
          )}
        </Box>
        {subtitle && (
          <Typography variant="caption" color="text.secondary">
            {subtitle}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

// Status Chip Component
const StatusChip = ({ status }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'success';
      case 'in progress':
        return 'info';
      case 'failed':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Chip
      label={status}
      color={getStatusColor(status)}
      size="small"
      sx={{ fontWeight: 500 }}
    />
  );
};

// Main Dashboard Component
const DataProfilingDashboard = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  // Dashboard metrics data
  const metrics = [
    { title: 'Active Connection', value: 3, change: '+10%', subtitle: '' },
    { title: 'Completed Batch', value: 120, change: '+10%', subtitle: 'vs prev: 100' },
    { title: 'Triggered Batch', value: 20, change: '+10%', subtitle: 'vs prev: 100' },
    { title: 'Pending Batch', value: 50, change: '+10%', subtitle: 'vs prev: 100' },
  ];

  // Batch execution progress data
  const batchData = [
    { profile: 'Batch Level', status: 'In progress', totalObjects: 100, profileGenerated: 50 },
    { profile: 'Mon-batch', status: 'Completed', totalObjects: 20, profileGenerated: 20 },
    { profile: 'Adhoc-Batch', status: 'Failed', totalObjects: 30, profileGenerated: 10 },
    { profile: 'Fri Batch', status: 'In Progress', totalObjects: 50, profileGenerated: 20 },
    { profile: 'Table Level', status: 'Completed', totalObjects: 300, profileGenerated: 200 },
  ];

  // Issue distribution data
  const issueData = [
    { name: 'Invalid Format', value: 39, color: '#1976d2' },
    { name: 'Duplicate', value: 20, color: '#5393d8' },
    { name: 'DB Connection', value: 25, color: '#7eaee0' },
    { name: 'Outlier', value: 20, color: '#a8c9e8' },
  ];

  // Data source activity data
  const activityData = [
    {
      month: 'Jan 25',
      Outlier: 30,
      'Invalid Format': 50,
      Duplicate: 25,
      'DB Connection': 15,
    },
    {
      month: 'Feb 25',
      Outlier: 40,
      'Invalid Format': 30,
      Duplicate: 30,
      'DB Connection': 20,
    },
    {
      month: 'Mar 25',
      Outlier: 15,
      'Invalid Format': 40,
      Duplicate: 40,
      'DB Connection': 25,
    },
    {
      month: 'Apr 25',
      Outlier: 35,
      'Invalid Format': 55,
      Duplicate: 30,
      'DB Connection': 20,
    },
    {
      month: 'May 25',
      Outlier: 30,
      'Invalid Format': 50,
      Duplicate: 20,
      'DB Connection': 25,
    },
    {
      month: 'Jun 25',
      Outlier: 20,
      'Invalid Format': 55,
      Duplicate: 15,
      'DB Connection': 30,
    },
  ];

  // Recent profiling activity data
  const recentActivity = [
    {
      header: 'Completed profiling for customer_orders table',
      dataSource: 'Redshift',
      lastUpdated: '5 minutes ago',
    },
    {
      header: 'Detected schema drift in product_catalog',
      dataSource: 'Snowflake',
      lastUpdated: '25 minutes ago',
    },
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh', py: 3 }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box mb={3}>
          <Typography variant="h5" fontWeight="600" gutterBottom>
            Data Profiling Execution Dashboard
          </Typography>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            <Tab label="Summary" />
            <Tab label="Job Summary" />
          </Tabs>
        </Box>

        {/* Metrics Cards */}
        <Grid container spacing={3} mb={3}>
          {metrics.map((metric, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <MetricCard {...metric} />
            </Grid>
          ))}
        </Grid>

        {/* Main Content Grid */}
        <Grid container spacing={3}>
          {/* Batch Execution Progress */}
          <Grid item xs={12} lg={7}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6" fontWeight="600" gutterBottom>
                  Batch Execution Progress
                </Typography>
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 600 }}>Data Profile</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 600 }}>
                          Total Objects
                        </TableCell>
                        <TableCell align="right" sx={{ fontWeight: 600 }}>
                          Profile Generated
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {batchData.map((row, index) => (
                        <TableRow key={index} hover>
                          <TableCell>{row.profile}</TableCell>
                          <TableCell>
                            <StatusChip status={row.status} />
                          </TableCell>
                          <TableCell align="right">{row.totalObjects}</TableCell>
                          <TableCell align="right">{row.profileGenerated}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Issue Distribution */}
          <Grid item xs={12} lg={5}>
            <Card elevation={2} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" fontWeight="600" gutterBottom>
                  Issue Distribution
                </Typography>
                <Box sx={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={issueData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {issueData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </Box>
                <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center" mt={2}>
                  {issueData.map((item, index) => (
                    <Box key={index} display="flex" alignItems="center" gap={1}>
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          bgcolor: item.color,
                        }}
                      />
                      <Typography variant="caption" color="text.secondary">
                        {item.name}: {item.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Data Source Activity */}
          <Grid item xs={12} lg={7}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6" fontWeight="600" gutterBottom>
                  Data Source Activity
                </Typography>
                <Box sx={{ height: 300 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={activityData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Legend wrapperStyle={{ fontSize: '12px' }} />
                      <Bar dataKey="Outlier" fill="#1e3a8a" stackId="a" />
                      <Bar dataKey="Invalid Format" fill="#3b82f6" stackId="a" />
                      <Bar dataKey="Duplicate" fill="#60a5fa" stackId="a" />
                      <Bar dataKey="DB Connection" fill="#93c5fd" stackId="a" />
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Recent Profiling Activity */}
          <Grid item xs={12} lg={5}>
            <Card elevation={2} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" fontWeight="600" gutterBottom>
                  Recent Profiling Activity
                </Typography>
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 600 }}>Header 1</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Data Source</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Last updated</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {recentActivity.map((activity, index) => (
                        <TableRow key={index} hover>
                          <TableCell>{activity.header}</TableCell>
                          <TableCell>{activity.dataSource}</TableCell>
                          <TableCell>
                            <Typography variant="caption" color="text.secondary">
                              {activity.lastUpdated}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DataProfilingDashboard;
