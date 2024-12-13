import React from 'react';
import { Clock } from 'lucide-react';

const updates = [
  {
    id: 1,
    title: 'Suspicious Activity Reported',
    location: 'Downtown Area',
    time: '2 hours ago',
    category: 'alert',
  },
  {
    id: 2,
    title: 'Community Safety Meeting',
    location: 'City Hall',
    time: '5 hours ago',
    category: 'event',
  },
  {
    id: 3,
    title: 'Vehicle Break-in Alert',
    location: 'North District',
    time: '1 day ago',
    category: 'alert',
  },
];

export default function RecentUpdates() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Recent Updates</h2>
      <div className="space-y-4">
        {updates.map((update) => (
          <div key={update.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-md transition-colors">
            <Clock className="w-5 h-5 text-gray-400 mt-1" />
            <div>
              <h3 className="font-medium">{update.title}</h3>
              <p className="text-sm text-gray-500">{update.location}</p>
              <p className="text-xs text-gray-400 mt-1">{update.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}