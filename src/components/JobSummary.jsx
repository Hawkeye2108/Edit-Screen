// DataProfilingDashboard.jsx
// Complete Material-UI implementation matching your image EXACTLY

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
        minWidth: 180,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 1,
          color: '#1a237e',
          fontWeight: 700,
          fontSize: '1rem',
        }}
      >
        {label}
      </Typography>
      <Box sx={{ position: 'relative', display: 'inline-block' }}>
        <svg width="180" height="100" viewBox="0 0 180 100">
          {/* Background arc - gray */}
          <path
            d="M 25 85 A 65 65 0 0 1 155 85"
            fill="none"
            stroke="#d0d0d0"
            strokeWidth="16"
            strokeLinecap="round"
          />
          {/* Progress arc - colored */}
          <path
            d="M 25 85 A 65 65 0 0 1 155 85"
            fill="none"
            stroke={color}
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray={`${percentage * 2.04} 204`}
          />
          {/* Needle */}
          <line
            x1="90"
            y1="85"
            x2="90"
            y2="30"
            stroke="#000"
            strokeWidth="2.5"
            strokeLinecap="round"
            transform={`rotate(${rotation} 90 85)`}
          />
          {/* Center circle */}
          <circle cx="90" cy="85" r="4" fill="#000" />
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
              fontSize: '2.2rem',
              lineHeight: 1,
            }}
          >
            {value}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: '#666',
              fontSize: '0.7rem',
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
          mt: 0.5,
          px: 1,
        }}
      >
        <Typography variant="caption" sx={{ color: '#999', fontSize: '0.65rem' }}>
          0
        </Typography>
        <Typography variant="caption" sx={{ color: '#999', fontSize: '0.65rem' }}>
          50
        </Typography>
        <Typography variant="caption" sx={{ color: '#999', fontSize: '0.65rem' }}>
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
        boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
        '&:hover': {
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        },
        transition: 'box-shadow 0.3s ease',
        borderRadius: 1,
      }}
    >
      <CardContent sx={{ p: 2.5 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: 1.5,
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 1,
                color: '#1a237e',
                fontSize: '1rem',
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
                fontSize: '0.7rem',
                height: '22px',
              }}
            />
          </Box>
          <Stack direction="row" spacing={0.5}>
            <IconButton
              size="small"
              sx={{
                color: '#2196f3',
                padding: '4px',
                '&:hover': { backgroundColor: 'rgba(33, 150, 243, 0.08)' },
              }}
            >
              <PlayArrow fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                color: '#2196f3',
                padding: '4px',
                '&:hover': { backgroundColor: 'rgba(33, 150, 243, 0.08)' },
              }}
            >
              <Pause fontSize="small" />
            </IconButton>
          </Stack>
        </Box>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
          <FiberManualRecord sx={{ fontSize: 12, color: '#999' }} />
          <Typography variant="body2" sx={{ color: '#666', fontSize: '0.85rem' }}>
            {schedule}
          </Typography>
        </Stack>

        <Box sx={{ mt: 1.5 }}>
          <Typography
            variant="body2"
            sx={{ color: '#666', mb: 0.3, fontSize: '0.82rem' }}
          >
            <strong>Next Run:</strong> {nextRun}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#666', mb: 1.5, fontSize: '0.82rem' }}
          >
            <strong>Last Run:</strong> {lastRun}
          </Typography>

          {scopeItems && (
            <Box>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  mb: 0.8,
                  color: '#1a237e',
                  fontSize: '0.82rem',
                }}
              >
                Profiling Scope:
              </Typography>
              <Stack direction="row" spacing={0.8} flexWrap="wrap" useFlexGap>
                {scopeItems.map((item, index) => (
                  <Chip
                    key={index}
                    label={item}
                    size="small"
                    variant="outlined"
                    sx={{
                      fontSize: '0.7rem',
                      height: '22px',
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
        py: 3,
      }}
    >
      <Container maxWidth="xl">
        {/* Header with Tabs */}
        <Paper
          sx={{
            mb: 2.5,
            borderRadius: 1,
            boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
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
                fontSize: '0.9rem',
                color: '#666',
                minHeight: 52,
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

        {/* Gauge Charts Section - HORIZONTAL LAYOUT */}
        <Paper
          sx={{
            p: 3,
            mb: 2.5,
            borderRadius: 1,
            boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexWrap: 'nowrap',
              gap: 1,
            }}
          >
            <GaugeChart
              value={23}
              target={50}
              label="Active Job"
              color="#4caf50"
            />
            
            <IconButton
              sx={{
                color: '#2196f3',
                alignSelf: 'center',
                '&:hover': { backgroundColor: 'rgba(33, 150, 243, 0.08)' },
              }}
            >
              <OpenWith />
            </IconButton>
            
            <GaugeChart
              value={34}
              target={50}
              label="Running Job"
              color="#2196f3"
            />
            
            <GaugeChart
              value={34}
              target={50}
              label="Paused Job"
              color="#9e9e9e"
            />
            
            <GaugeChart
              value={34}
              target={50}
              label="Failed Job"
              color="#f44336"
            />
          </Box>
        </Paper>

        {/* Jobs List Section */}
        <Paper
          sx={{
            p: 3,
            borderRadius: 1,
            boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 2.5,
              fontWeight: 600,
              color: '#1a237e',
              fontSize: '1.1rem',
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
