// DataProfilingDashboard.jsx
// Complete Material-UI implementation matching your image

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
  Divider,
} from '@mui/material';
import {
  PlayArrow,
  Pause,
  FiberManualRecord,
  OpenWith,
} from '@mui/icons-material';

// ==================== Gauge Chart Component ====================
const GaugeChart = ({ value, target, label, color }) => {
  const percentage = (value / 100) * 100;
  const rotation = (percentage / 100) * 180 - 90;

  return (
    <Box
      sx={{
        textAlign: 'center',
        position: 'relative',
        width: 220,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          color: '#1a237e',
          fontWeight: 700,
          fontSize: '1.1rem',
        }}
      >
        {label}
      </Typography>
      <Box sx={{ position: 'relative', display: 'inline-block' }}>
        <svg width="200" height="110" viewBox="0 0 200 110">
          {/* Background arc - gray */}
          <path
            d="M 30 95 A 70 70 0 0 1 170 95"
            fill="none"
            stroke="#d0d0d0"
            strokeWidth="18"
            strokeLinecap="round"
          />
          {/* Progress arc - colored */}
          <path
            d="M 30 95 A 70 70 0 0 1 170 95"
            fill="none"
            stroke={color}
            strokeWidth="18"
            strokeLinecap="round"
            strokeDasharray={`${percentage * 2.2} 220`}
          />
          {/* Needle */}
          <line
            x1="100"
            y1="95"
            x2="100"
            y2="35"
            stroke="#000"
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${rotation} 100 95)`}
          />
          {/* Center circle */}
          <circle cx="100" cy="95" r="5" fill="#000" />
        </svg>
        {/* Value display */}
        <Box
          sx={{
            position: 'absolute',
            bottom: -5,
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: '#000',
              fontSize: '2.5rem',
              lineHeight: 1,
            }}
          >
            {value}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: '#666',
              fontSize: '0.75rem',
            }}
          >
            Target: {target}
          </Typography>
        </Box>
      </Box>
      {/* Scale markers */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          mt: 1,
          px: 1.5,
        }}
      >
        <Typography variant="caption" sx={{ color: '#999', fontSize: '0.7rem' }}>
          0
        </Typography>
        <Typography variant="caption" sx={{ color: '#999', fontSize: '0.7rem' }}>
          50
        </Typography>
        <Typography variant="caption" sx={{ color: '#999', fontSize: '0.7rem' }}>
          100
        </Typography>
      </Box>
    </Box>
  );
};

// ==================== Job Card Component ====================
const JobCard = ({ name, status, schedule, nextRun, lastRun, scopeItems }) => {
  const getStatusConfig = (status) => {
    const configs = {
      active: { color: 'success', bgColor: '#4caf50' },
      running: { color: 'primary', bgColor: '#2196f3' },
      failed: { color: 'error', bgColor: '#f44336' },
    };
    return configs[status] || { color: 'default', bgColor: '#9e9e9e' };
  };

  const statusConfig = getStatusConfig(status);

  return (
    <Card
      sx={{
        mb: 2,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        '&:hover': {
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        },
        transition: 'box-shadow 0.3s ease',
        borderRadius: 1,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: 2,
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 1,
                color: '#1a237e',
                fontSize: '1.1rem',
              }}
            >
              {name}
            </Typography>
            <Chip
              label={status.charAt(0).toUpperCase() + status.slice(1)}
              size="small"
              sx={{
                backgroundColor: statusConfig.bgColor,
                color: 'white',
                fontWeight: 600,
                fontSize: '0.75rem',
              }}
            />
          </Box>
          <Stack direction="row" spacing={0.5}>
            <IconButton
              size="small"
              sx={{
                color: '#2196f3',
                '&:hover': { backgroundColor: 'rgba(33, 150, 243, 0.08)' },
              }}
            >
              <PlayArrow fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                color: '#2196f3',
                '&:hover': { backgroundColor: 'rgba(33, 150, 243, 0.08)' },
              }}
            >
              <Pause fontSize="small" />
            </IconButton>
          </Stack>
        </Box>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
          <FiberManualRecord sx={{ fontSize: 14, color: '#999' }} />
          <Typography variant="body2" sx={{ color: '#666' }}>
            {schedule}
          </Typography>
        </Stack>

        <Box sx={{ mt: 2 }}>
          <Typography
            variant="body2"
            sx={{ color: '#666', mb: 0.5, fontSize: '0.875rem' }}
          >
            <strong>Next Run:</strong> {nextRun}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#666', mb: 2, fontSize: '0.875rem' }}
          >
            <strong>Last Run:</strong> {lastRun}
          </Typography>

          {scopeItems && (
            <Box>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: '#1a237e',
                  fontSize: '0.875rem',
                }}
              >
                Profiling Scope:
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {scopeItems.map((item, index) => (
                  <Chip
                    key={index}
                    label={item}
                    size="small"
                    variant="outlined"
                    sx={{
                      fontSize: '0.75rem',
                      height: '24px',
                      borderColor: '#ccc',
                      color: '#666',
                    }}
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

// ==================== Main Dashboard Component ====================
const DataProfilingDashboard = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const jobsData = [
    {
      name: 'Customer Data Profiling',
      status: 'active',
      schedule: 'Production Table(3)',
      nextRun: '2024-01-16 01:00:00',
      lastRun: '2024-01-15 01:00:00',
      scopeItems: ['Completeness', 'Uniqueness', 'Validity', 'Consistency'],
    },
    {
      name: 'Sales Analytics Weekly',
      status: 'running',
      schedule: 'Data Warehouse Snowflake',
      nextRun: '2024-01-21 09:00:00',
      lastRun: '2024-01-14 09:00:00',
      scopeItems: ['Completeness', 'Accuracy', 'Timeliness'],
    },
    {
      name: 'External Files Processing',
      status: 'failed',
      schedule: 'External Data SFTP',
      nextRun: '2024-01-19 16:00:00',
      lastRun: '2024-01-15 15:00:00',
      scopeItems: ['Completeness', 'Format Validation'],
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: '#f5f7fa',
        minHeight: '100vh',
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        {/* Header with Tabs */}
        <Paper
          sx={{
            mb: 3,
            borderRadius: 1,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            sx={{
              px: 2,
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                color: '#666',
                minHeight: 56,
              },
              '& .Mui-selected': {
                color: '#1a237e',
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#1a237e',
                height: 3,
              },
            }}
          >
            <Tab label="Data Profiling Execution Dashboard" />
            <Tab label="Summary" />
            <Tab label="Job Summary" />
          </Tabs>
        </Paper>

        {/* Gauge Charts Section */}
        <Paper
          sx={{
            p: 4,
            mb: 3,
            borderRadius: 1,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ flexWrap: 'wrap' }}
          >
            <Grid item>
              <GaugeChart
                value={23}
                target={50}
                label="Active Job"
                color="#4caf50"
              />
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center', mx: 2 }}>
              <IconButton
                sx={{
                  color: '#2196f3',
                  '&:hover': { backgroundColor: 'rgba(33, 150, 243, 0.08)' },
                }}
              >
                <OpenWith />
              </IconButton>
            </Grid>
            <Grid item>
              <GaugeChart
                value={34}
                target={50}
                label="Running Job"
                color="#2196f3"
              />
            </Grid>
            <Grid item>
              <GaugeChart
                value={34}
                target={50}
                label="Paused Job"
                color="#9e9e9e"
              />
            </Grid>
            <Grid item>
              <GaugeChart
                value={34}
                target={50}
                label="Failed Job"
                color="#f44336"
              />
            </Grid>
          </Grid>
        </Paper>

        {/* Jobs List Section */}
        <Paper
          sx={{
            p: 4,
            borderRadius: 1,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              fontWeight: 600,
              color: '#1a237e',
              fontSize: '1.2rem',
            }}
          >
            Configure and monitor data profiling jobs
          </Typography>

          <Box>
            {jobsData.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default DataProfilingDashboard;
