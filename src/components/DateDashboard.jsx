import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const DataDashboard = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  
  // Sample data for the bar chart based on the image
  const chartData = [
    { name: '1', value: 15 },
    { name: '2', value: 18 },
    { name: '3', value: 12 },
    { name: '4', value: 10 },
    { name: '5', value: 25 },
    { name: '6', value: 45 },
    { name: '7', value: 38 },
    { name: '8', value: 42 },
    { name: '9', value: 35 },
    { name: '10', value: 48 },
    { name: '11', value: 52 },
    { name: '12', value: 45 },
    { name: '13', value: 40 },
    { name: '14', value: 42 },
    { name: '15', value: 47 },
    { name: '16', value: 44 },
    { name: '17', value: 41 },
    { name: '18', value: 38 },
    { name: '19', value: 35 },
    { name: '20', value: 32 },
    { name: '21', value: 28 },
    { name: '22', value: 30 },
    { name: '23', value: 33 },
    { name: '24', value: 36 },
    { name: '25', value: 38 },
    { name: '26', value: 41 },
    { name: '27', value: 39 },
    { name: '28', value: 42 },
    { name: '29', value: 45 },
    { name: '30', value: 48 },
    { name: '31', value: 44 },
    { name: '32', value: 41 },
    { name: '33', value: 38 },
    { name: '34', value: 35 },
    { name: '35', value: 32 },
    { name: '36', value: 30 },
    { name: '37', value: 33 },
    { name: '38', value: 36 },
    { name: '39', value: 39 },
    { name: '40', value: 42 },
    { name: '41', value: 45 },
    { name: '42', value: 48 },
    { name: '43', value: 46 },
    { name: '44', value: 43 },
    { name: '45', value: 40 },
    { name: '46', value: 37 },
    { name: '47', value: 34 },
    { name: '48', value: 31 },
    { name: '49', value: 28 },
    { name: '50', value: 65 }
  ];

  const DashboardContent = () => (
    <div style={{ 
      padding: '24px', 
      backgroundColor: '#f5f5f5', 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr 1fr', 
        gap: '24px', 
        marginBottom: '24px' 
      }}>
        {/* Left Panel - Configuration */}
        <div style={{ 
          backgroundColor: 'white', 
          padding: '24px', 
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', color: '#666' }}>
              Distance
            </label>
            <input 
              type="text" 
              value="15" 
              readOnly
              style={{ 
                width: '100%', 
                padding: '8px 12px', 
                border: '1px solid #ddd', 
                borderRadius: '4px',
                backgroundColor: '#f9f9f9'
              }}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', color: '#666' }}>
              Distance (%)
            </label>
            <input 
              type="text" 
              value="< 2.1%" 
              readOnly
              style={{ 
                width: '100%', 
                padding: '8px 12px', 
                border: '1px solid #ddd', 
                borderRadius: '4px',
                backgroundColor: '#f9f9f9'
              }}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', color: '#666' }}>
              Missing
            </label>
            <input 
              type="text" 
              value="0" 
              readOnly
              style={{ 
                width: '100%', 
                padding: '8px 12px', 
                border: '1px solid #ddd', 
                borderRadius: '4px',
                backgroundColor: '#f9f9f9'
              }}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', color: '#666' }}>
              Missing (%)
            </label>
            <input 
              type="text" 
              value="0.0%" 
              readOnly
              style={{ 
                width: '100%', 
                padding: '8px 12px', 
                border: '1px solid #ddd', 
                borderRadius: '4px',
                backgroundColor: '#f9f9f9'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', color: '#666' }}>
              Gap Frequency
            </label>
            <select 
              value="Weekly"
              style={{ 
                width: '100%', 
                padding: '8px 12px', 
                border: '1px solid #ddd', 
                borderRadius: '4px',
                backgroundColor: 'white'
              }}
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>
        </div>

        {/* Center Panel - Date Format */}
        <div style={{ 
          backgroundColor: 'white', 
          padding: '24px', 
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ 
            margin: '0 0 20px 0', 
            color: '#8aa4b8', 
            fontSize: '18px',
            fontWeight: 'normal'
          }}>
            Date Format
          </h3>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', color: '#666' }}>
              C
            </label>
            <input 
              type="text" 
              style={{ 
                width: '100%', 
                padding: '8px 12px', 
                border: '1px solid #ddd', 
                borderRadius: '4px'
              }}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <input 
              type="text" 
              value="MM/DD/YY" 
              readOnly
              style={{ 
                width: '100%', 
                padding: '8px 12px', 
                border: '1px solid #ddd', 
                borderRadius: '4px',
                backgroundColor: '#f9f9f9'
              }}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <input 
              type="text" 
              value="DD-MM-YYYY" 
              readOnly
              style={{ 
                width: '100%', 
                padding: '8px 12px', 
                border: '1px solid #ddd', 
                borderRadius: '4px',
                backgroundColor: '#f9f9f9'
              }}
            />
          </div>
          <div>
            <input 
              type="text" 
              value="MM-DD-YY" 
              readOnly
              style={{ 
                width: '100%', 
                padding: '8px 12px', 
                border: '1px solid #ddd', 
                borderRadius: '4px',
                backgroundColor: '#f9f9f9'
              }}
            />
          </div>
        </div>

        {/* Right Panel - Date Info */}
        <div style={{ 
          backgroundColor: 'white', 
          padding: '24px', 
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          position: 'relative'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '16px',
            marginBottom: '20px'
          }}>
            <div>
              <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>
                Min Date
              </div>
              <div style={{ fontSize: '14px', fontWeight: '500' }}>
                2017-01-01
              </div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>
                Max Date
              </div>
              <div style={{ fontSize: '14px', fontWeight: '500' }}>
                2018-01-06
              </div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>
                Min-TimeStamp
              </div>
              <div style={{ fontSize: '14px', fontWeight: '500' }}>
                2017-01-01 00:00:00
              </div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>
                Max-Timestamp
              </div>
              <div style={{ fontSize: '14px', fontWeight: '500' }}>
                2018-01-06 00:00:00
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button 
              style={{ 
                backgroundColor: '#2c3e50',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#2c3e50'}
            >
              Update Format
            </button>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '24px', 
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{ width: '100%', height: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#666' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#666' }}
              />
              <Bar 
                dataKey="value" 
                fill="#5a6c7d"
                radius={[2, 2, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {!showDashboard ? (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          backgroundColor: '#f5f5f5'
        }}>
          <button
            onClick={() => setShowDashboard(true)}
            style={{
              backgroundColor: '#2c3e50',
              color: 'white',
              border: 'none',
              padding: '16px 32px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '500'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#2c3e50'}
          >
            Show Dashboard
          </button>
        </div>
      ) : (
        <>
          <div style={{ 
            position: 'fixed', 
            top: '16px', 
            right: '16px', 
            zIndex: 1000 
          }}>
            <button
              onClick={() => setShowDashboard(false)}
              style={{
                backgroundColor: 'white',
                color: '#2c3e50',
                border: '2px solid #2c3e50',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Hide Dashboard
            </button>
          </div>
          <DashboardContent />
        </>
      )}
    </div>
  );
};

export default DataDashboard;
