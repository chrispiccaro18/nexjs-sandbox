'use client'

import { useState } from 'react';
import PlayTimeHeader from '@/components/header'
import activities from '../../activities';
import PromptSearchBar from '@/components/PromptSearchBar';

export default function Home() {
  const [selectedAttributes, setSelectedAtributes] = useState([{ estimatedTime: '15 mins' }]);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleButtonToggle = (isActive: boolean) => {
    setIsButtonActive(isActive);
  }

  // const filteredActivities = selectedAttributes.map((attribute) => {
  //   const [key, value] = Object.entries(attribute)[0];
  //   console.log(key, value)
  //   return activities.filter((activity) => {
  //     activity[key] === value;
  //   })
  // });

  // console.log(filteredActivities)
    // ? activities.filter((activity) => activity.estimatedTime === selectedTime)
    // : activities;
  
  const filteredActivities = activities;

  return (
    <div 
      className="container mx-auto p-4"
    >
      <PlayTimeHeader />
      {/* Search and Filter */}
      <div className="py-4">
        <PromptSearchBar />
        {/* <div className="flex space-x-4">
          {[10, 15, 20, 30].map((time) => (
            <button
              key={time}
              className={`px-4 py-2 rounded-lg ${
                selectedTime === time
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setSelectedTime(time)}
            >
              {time} mins
            </button>
          ))}
        </div> */}
      </div>

      {/* Activity List */}
      <div className="space-y-4">
        {filteredActivities.map((activity, index) => (
          <div
            key={index}
            className="flex border p-4 rounded-lg shadow-lg items-center"
          >
            <div className="ml-4">
              <h3 className="text-lg font-bold">{activity.title}</h3>
              <p className="text-sm">Time: {activity.estimatedTime}</p>
              <p className="text-sm">Age: {activity.ageRange}</p>
              <p className="text-sm">Materials: {activity.materials
                .reduce((materialsString, material) => (
                  materialsString ? materialsString + ', ' + material : material
                ), '')}</p>
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
