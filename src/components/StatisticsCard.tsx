import React from 'react';

interface StatisticsCardProps {
  title: string;
  value: string;
  change: string;
  isIncrease: boolean;
}

export default function StatisticsCard({ title, value, change, isIncrease }: StatisticsCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
      <p className={`text-sm mt-2 ${isIncrease ? 'text-red-500' : 'text-green-500'}`}>
        {isIncrease ? '↑' : '↓'} {change} from last month
      </p>
    </div>
  );
}