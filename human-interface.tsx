import React, { useState } from 'react';
import { MapPin, AlertTriangle, CheckCircle, X, Clock, Users } from 'lucide-react';

const TrafficManagementDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [pendingApprovals, setPendingApprovals] = useState([
    {
      id: 'req-1',
      type: 'EMERGENCY_OVERRIDE',
      location: 'Downtown & 5th Ave',
      timestamp: new Date().toISOString(),
      description: 'Multiple ambulances requiring corridor creation',
      severity: 'high',
      timeToDecision: '30s'
    },
    {
      id: 'req-2',
      type: 'TRAFFIC_PATTERN_CHANGE',
      location: 'West Bridge Area',
      timestamp: new Date().toISOString(),
      description: 'Switch to alternate flow pattern due to predicted congestion',
      severity: 'medium',
      timeToDecision: '2m 15s'
    }
  ]);

  const handleApproval = (id, approved) => {
    // In a real implementation, this would send an event to the system
    console.log(`Request ${id} ${approved ? 'approved' : 'rejected'}`);
    setPendingApprovals(pendingApprovals.filter(item => item.item !== id));
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-700 text-white p-4">
        <h1 className="text-xl font-bold">Smart Traffic Management System</h1>
        <div className="flex items-center space-x-4 mt-2">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>08:30 AM</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>3 Operators Online</span>
          </div>
          <div className="flex items-center bg-green-500 px-2 py-1 rounded">
            <span>System Status: Normal</span>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-blue-800 text-white flex">
        <button 
          className={`px-4 py-2 ${activeTab === 'overview' ? 'bg-blue-600' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`px-4 py-2 ${activeTab === 'incidents' ? 'bg-blue-600' : ''} relative`}
          onClick={() => setActiveTab('incidents')}
        >
          Incidents
          <span className="absolute top-1 right-1 bg-red-500 text-xs rounded-full px-1">3</span>
        </button>
        <button 
          className={`px-4 py-2 ${activeTab === 'approvals' ? 'bg-blue-600' : ''} relative`}
          onClick={() => setActiveTab('approvals')}
        >
          Pending Approvals
          <span className="absolute top-1 right-1 bg-amber-500 text-xs rounded-full px-1">
            {pendingApprovals.length}
          </span>
        </button>
        <button 
          className={`px-4 py-2 ${activeTab === 'fairness' ? 'bg-blue-600' : ''}`}
          onClick={() => setActiveTab('fairness')}
        >
          Fairness Metrics
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-4">
        {activeTab === 'approvals' && (
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Pending Human Approvals</h2>
            
            <div className="space-y-4">
              {pendingApprovals.map(item => (
                <div key={item.id} className="border rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <div className="flex items-center">
                      {item.severity === 'high' ? (
                        <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                      ) : (
                        <MapPin className="w-5 h-5 text-amber-500 mr-2" />
                      )}
                      <span className="font-medium">{item.type}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    <div className="flex mt-2 text-xs text-gray-500 space-x-4">
                      <span>Location: {item.location}</span>
                      <span>Time remaining: {item.timeToDecision}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      className="bg-green-500 text-white p-2 rounded-full"
                      onClick={() => handleApproval(item.id, true)}
                    >
                      <CheckCircle className="w-5 h-5" />
                    </button>
                    <button 
                      className="bg-red-500 text-white p-2 rounded-full"
                      onClick={() => handleApproval(item.id, false)}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'fairness' && (
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Fairness Monitoring</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Wait Time Distribution by Neighborhood</h3>
                <div className="h-64 bg-gray-100 flex items-end justify-around p-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-600 w-12" style={{height: '120px'}}></div>
                    <span className="text-xs mt-1">Downtown</span>
                    <span className="text-xs">74.3s</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-600 w-12" style={{height: '110px'}}></div>
                    <span className="text-xs mt-1">South</span>
                    <span className="text-xs">68.2s</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-600 w-12" style={{height: '130px'}}></div>
                    <span className="text-xs mt-1">West</span>
                    <span className="text-xs">79.1s</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-600 w-12" style={{height: '105px'}}></div>
                    <span className="text-xs mt-1">North</span>
                    <span className="text-xs">65.7s</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-600 w-12" style={{height: '125px'}}></div>
                    <span className="text-xs mt-1">East</span>
                    <span className="text-xs">77.5s</span>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Fairness Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Gini Coefficient</span>
                      <span>0.12</span>
                    </div>
                    <div className="bg-gray-200 h-2 rounded-full mt-1">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '12%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Public Transport Priority</span>
                      <span>0.82</span>
                    </div>
                    <div className="bg-gray-200 h-2 rounded-full mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '82%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Pedestrian Wait Time</span>
                      <span>42.8s</span>
                    </div>
                    <div className="bg-gray-200 h-2 rounded-full mt-1">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '43%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-2 bg-yellow-50 border border-yellow-200 rounded text-sm">
                  <p className="font-medium text-yellow-800">Potential Bias Detected</p>
                  <p className="text-yellow-700">Slightly higher wait times observed in West Side district</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrafficManagementDashboard;
