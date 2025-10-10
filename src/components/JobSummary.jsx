import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  Chip,
  IconButton,
  Stack,
  LinearProgress,
} from '@mui/material';
import {
  PlayArrow,
  Pause,
  RadioButtonChecked,
  OpenWith,
} from '@mui/icons-material';

// Gauge Chart Component
const GaugeChart = ({ value, target, label, color }) => {
  const percentage = (value / 100) * 100;
  const rotation = (percentage / 100) * 180 - 90;

  return (
    <Box sx={{ textAlign: 'center', position: 'relative', width: 200 }}>
      <Typography variant="h6" sx={{ mb: 2, color: '#2c3e50', fontWeight: 600 }}>
        {label}
      </Typography>
      <Box sx={{ position: 'relative', display: 'inline-block' }}>
        <svg width="200" height="120" viewBox="0 0 200 120">
          {/* Background arc */}
          <path
            d="M 30 100 A 70 70 0 0 1 170 100"
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* Progress arc */}
          <path
            d="M 30 100 A 70 70 0 0 1 170 100"
            fill="none"
            stroke={color}
            strokeWidth="20"
            strokeLinecap="round"
            strokeDasharray={`${percentage * 2.2} 220`}
          />
          {/* Needle */}
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="40"
            stroke="#2c3e50"
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${rotation} 100 100)`}
          />
          <circle cx="100" cy="100" r="6" fill="#2c3e50" />
        </svg>
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 700, color: '#2c3e50' }}>
            {value}
          </Typography>
          <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
            Target: {target}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1, px: 2 }}>
        <Typography variant="caption" sx={{ color: '#7f8c8d' }}>
          0
        </Typography>
        <Typography variant="caption" sx={{ color: '#7f8c8d' }}>
          50
        </Typography>
        <Typography variant="caption" sx={{ color: '#7f8c8d' }}>
          100
        </Typography>
      </Box>
    </Box>
  );
};

// Job Card Component
const JobCard = ({ name, status, schedule, nextRun, lastRun, scopeItems, actions }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return '#4caf50';
      case 'running':
        return '#2196f3';
      case 'failed':
        return '#f44336';
      default:
        return '#9e9e9e';
    }
  };

  const getStatusLabel = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <Card sx={{ mb: 2, '&:hover': { boxShadow: 4 }, transition: 'box-shadow 0.3s' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
              {name}
            </Typography>
            <Chip
              label={getStatusLabel(status)}
              size="small"
              sx={{
                backgroundColor: getStatusColor(status),
                color: 'white',
                fontWeight: 500,
              }}
            />
          </Box>
          <Box>
            {actions && (
              <Stack direction="row" spacing={1}>
                <IconButton size="small" sx={{ color: '#2196f3' }}>
                  <PlayArrow />
                </IconButton>
                <IconButton size="small" sx={{ color: '#2196f3' }}>
                  <Pause />
                </IconButton>
              </Stack>
            )}
          </Box>
        </Box>

        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <RadioButtonChecked sx={{ fontSize: 16, color: '#7f8c8d' }} />
          <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
            {schedule}
          </Typography>
        </Stack>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 0.5 }}>
            <strong>Next Run:</strong> {nextRun}
          </Typography>
          <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 1 }}>
            <strong>Last Run:</strong> {lastRun}
          </Typography>

          {scopeItems && (
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                Profiling Scope:
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {scopeItems.map((item, index) => (
                  <Chip
                    key={index}
                    label={item}
                    size="small"
                    variant="outlined"
                    sx={{ mb: 0.5 }}
                  />
                ))}
              </Stack>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

// Main Dashboard Component
const DataProfilingDashboard = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const jobs = [
    {
      name: 'Customer Data Profiling',
      status: 'active',
      schedule: 'Production Table(3)',
      nextRun: '2024-01-16 01:00:00',
      lastRun: '2024-01-15 01:00:00',
      scopeItems: ['Completeness', 'Uniqueness', 'Validity', 'Consistency'],
      actions: true,
    },
    {
      name: 'Sales Analytics Weekly',
      status: 'running',
      schedule: 'Data Warehouse Snowflake',
      nextRun: '2024-01-21 09:00:00',
      lastRun: '2024-01-14 09:00:00',
      scopeItems: ['Completeness', 'Accuracy', 'Timeliness'],
      actions: true,
    },
    {
      name: 'External Files Processing',
      status: 'failed',
      schedule: 'External Data SFTP',
      nextRun: '2024-01-19 16:00:00',
      lastRun: '2024-01-15 15:00:00',
      scopeItems: ['Completeness', 'Format Validation'],
      actions: true,
    },
  ];

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Paper sx={{ mb: 3, px: 3, py: 1 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
              },
            }}
          >
            <Tab label="Data Profiling Execution Dashboard" />
            <Tab label="Summary" />
            <Tab label="Job Summary" />
          </Tabs>
        </Paper>

        {/* Gauge Charts Section */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            <Grid item>
              <GaugeChart value={23} target={50} label="Active Job" color="#4caf50" />
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton sx={{ color: '#2196f3' }}>
                <OpenWith />
              </IconButton>
            </Grid>
            <Grid item>
              <GaugeChart value={34} target={50} label="Running Job" color="#2196f3" />
            </Grid>
            <Grid item>
              <GaugeChart value={34} target={50} label="Paused Job" color="#9e9e9e" />
            </Grid>
            <Grid item>
              <GaugeChart value={34} target={50} label="Failed Job" color="#f44336" />
            </Grid>
          </Grid>
        </Paper>

        {/* Jobs List Section */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: '#2c3e50' }}>
            Configure and monitor data profiling jobs
          </Typography>

          <Box>
            {jobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default DataProfilingDashboard;
