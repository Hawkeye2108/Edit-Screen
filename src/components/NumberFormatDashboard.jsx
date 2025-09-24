import React, { useState } from 'react';
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

  const StatCard = ({ title, value, bgColor = 'bg-gray-100' }) => (
    <div className={`p-3 rounded-md shadow-sm ${bgColor} min-h-16 flex flex-col justify-center`}>
      <div className="text-sm text-gray-600 font-medium mb-1">{title}</div>
      <div className="text-lg font-semibold text-gray-800">{value}</div>
    </div>
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <button 
        onClick={() => setShowData(!showData)}
        className="mb-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        {showData ? 'Hide Data Profile' : 'Show Data Profile'}
      </button>

      {showData && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Top Statistics Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Left Column */}
            <div className="space-y-3">
              <StatCard title="Number Pattern" value="No/Yes" />
              <StatCard title="Distinct" value="18" />
              <StatCard title="Distinct (%)" value="< 0.1%" />
              <StatCard title="Missing" value="0" />
              <StatCard title="Missing (%)" value="0.0%" />
            </div>

            {/* Middle Column */}
            <div className="space-y-3">
              <StatCard title="Minimum" value="1" />
              <StatCard title="Maximum" value="12" />
              <StatCard title="Zeros" value="0" />
              <StatCard title="Zeros (%)" value="0.0%" />
              <StatCard title="Negative" value="0" />
              <StatCard title="Negative (%)" value="0.0%" />
            </div>

            {/* Right Column */}
            <div className="space-y-3">
              <StatCard title="Mean" value="1" bgColor="bg-blue-50" />
              <StatCard title="Standard deviation" value="12" bgColor="bg-blue-50" />
              <StatCard title="Sum" value="0" bgColor="bg-blue-50" />
              <StatCard title="Variance" value="0.0%" bgColor="bg-blue-50" />
              <div className="bg-slate-700 text-white p-3 rounded-md text-center">
                <div className="text-sm font-semibold">Outlier Fixes</div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-200 my-6" />

          {/* Histogram Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-800 text-center mb-4">
              Numeric column name
            </h3>
            <div className="h-80 w-full bg-gray-50 rounded-md p-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={histogramData} 
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <XAxis 
                    dataKey="index" 
                    tick={false}
                    axisLine={false}
                  />
                  <YAxis hide />
                  <Bar 
                    dataKey="value" 
                    fill="#374151" 
                    stroke="#374151"
                    strokeWidth={0.5}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataProfileComponent;
