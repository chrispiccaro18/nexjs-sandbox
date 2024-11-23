'use client'

import { useState } from 'react';
import PlayTimeHeader from '@/components/header'

export default function Home() {
  const [selectedTime, setSelectedTime] = useState('');

  const activities = [
    {
      title: 'Activity 1',
      time: '10 min',
      age: 'Preschool - Kindergarten',
      materials: 'Paper, Markers',
      img: '/path-to-image1.jpg',
    },
    {
      title: 'Activity 2',
      time: '5 min',
      age: 'Infant',
      materials: 'Pencil, Notes',
      img: '/path-to-image2.jpg',
    },
  ];

  const filteredActivities = selectedTime
    ? activities.filter((activity) => activity.time.includes(selectedTime))
    : activities;

  return (
    <div 
      className="container mx-auto p-4"
    >
      <PlayTimeHeader />
      {/* Search and Filter */}
      <div className="py-4">
        <h2 className="text-xl font-semibold mb-2">Let's Play For:</h2>
        <div className="flex space-x-4">
          {['10 min', '15 min', '20 min', '30 min'].map((time) => (
            <button
              key={time}
              className={`px-4 py-2 rounded-lg ${
                selectedTime === time
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Activity List */}
      <div className="space-y-4">
        {filteredActivities.map((activity, index) => (
          <div
            key={index}
            className="flex border p-4 rounded-lg shadow-lg items-center"
          >
            <img
              src={activity.img}
              alt={activity.title}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="ml-4">
              <h3 className="text-lg font-bold">{activity.title}</h3>
              <p className="text-sm">Time: {activity.time}</p>
              <p className="text-sm">Age: {activity.age}</p>
              <p className="text-sm">Materials: {activity.materials}</p>
            </div>
            <button className="ml-auto px-4 py-2 bg-green-500 text-white rounded-lg">
              Print
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
