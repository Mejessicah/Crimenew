import React from 'react';
import Navbar from './components/Navbar';
import CrimeMap from './components/CrimeMap';
import StatisticsCard from './components/StatisticsCard';
import TipForm from './components/TipForm';
import RecentUpdates from './components/RecentUpdates';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-20 pb-12">
        <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-6">Crime Analysis Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatisticsCard
            title="Total Reports"
            value="1,234"
            change="12%"
            isIncrease={false}
          />
          <StatisticsCard
            title="Active Cases"
            value="456"
            change="5%"
            isIncrease={true}
          />
          <StatisticsCard
            title="Resolved Cases"
            value="789"
            change="8%"
            isIncrease={false}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Crime Map</h2>
              <CrimeMap />
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
              <RecentUpdates />
            </section>
          </div>

          <div className="space-y-8">
            <TipForm />
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-blue-900 mb-2">Emergency Contacts</h2>
              <ul className="space-y-2 text-blue-800">
                <li>Police: 911</li>
                <li>Crime Stoppers: 1-800-222-TIPS</li>
                <li>Non-Emergency: 311</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;