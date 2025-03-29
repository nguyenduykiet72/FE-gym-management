import { useState } from 'react';
import {
  PlusIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  UserIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

// Mock data for schedule events
const initialEvents = [
  {
    id: 1,
    title: 'Yoga Class',
    trainer: 'Anna Smith',
    type: 'group',
    date: '2023-07-15',
    startTime: '09:00',
    endTime: '10:00',
    capacity: 15,
    enrolled: 8,
  },
  {
    id: 2,
    title: 'HIIT Training',
    trainer: 'Michael Chen',
    type: 'group',
    date: '2023-07-15',
    startTime: '11:00',
    endTime: '12:00',
    capacity: 12,
    enrolled: 10,
  },
  {
    id: 3,
    title: 'Personal Training',
    trainer: 'Tom Johnson',
    type: 'personal',
    date: '2023-07-15',
    startTime: '14:00',
    endTime: '15:00',
    capacity: 1,
    enrolled: 1,
    member: 'John Smith',
  },
  {
    id: 4,
    title: 'Pilates',
    trainer: 'Lisa Rodriguez',
    type: 'group',
    date: '2023-07-16',
    startTime: '10:00',
    endTime: '11:00',
    capacity: 10,
    enrolled: 5,
  },
  {
    id: 5,
    title: 'Weight Training',
    trainer: 'Tom Johnson',
    type: 'group',
    date: '2023-07-16',
    startTime: '13:00',
    endTime: '14:00',
    capacity: 8,
    enrolled: 4,
  },
  {
    id: 6,
    title: 'Personal Training',
    trainer: 'Michael Chen',
    type: 'personal',
    date: '2023-07-16',
    startTime: '16:00',
    endTime: '17:00',
    capacity: 1,
    enrolled: 1,
    member: 'Sarah Johnson',
  },
];

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Schedules = () => {
  const [events, setEvents] = useState(initialEvents);
  const [selectedDate, setSelectedDate] = useState('2023-07-15');
  const [showModal, setShowModal] = useState(false);

  // Get current date for the calendar
  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long' });
  const currentYear = today.getFullYear();

  // Filter events by selected date
  const filteredEvents = events.filter((event) => event.date === selectedDate);

  // Group events by time slots
  const groupedEvents: Record<string, typeof initialEvents> = {};
  filteredEvents.forEach((event) => {
    const timeSlot = `${event.startTime} - ${event.endTime}`;
    if (!groupedEvents[timeSlot]) {
      groupedEvents[timeSlot] = [];
    }
    groupedEvents[timeSlot].push(event);
  });

  // Sort time slots
  const sortedTimeSlots = Object.keys(groupedEvents).sort((a, b) => {
    const timeA = a.split(' - ')[0];
    const timeB = b.split(' - ')[0];
    return timeA.localeCompare(timeB);
  });

  // Generate dates for the calendar view (just a week for this demo)
  const generateCalendarDates = () => {
    const dates = [];
    const currentDate = new Date();

    // Start from today and generate 7 days
    for (let i = 0; i < 7; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + i);

      const formattedDate = date.toISOString().split('T')[0];
      const dayOfWeek = daysOfWeek[date.getDay()];
      const dayOfMonth = date.getDate();

      dates.push({
        date: formattedDate,
        dayOfWeek,
        dayOfMonth,
        isToday: i === 0,
      });
    }

    return dates;
  };

  const calendarDates = generateCalendarDates();

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Schedules</h1>
          <button className="btn btn-primary flex items-center">
            <PlusIcon className="w-5 h-5 mr-2" />
            Add Session
          </button>
        </div>

        {/* Calendar Navigation */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900">
              {currentMonth} {currentYear}
            </h2>
            <div className="flex space-x-2">
              <button className="btn btn-outline">Today</button>
              <button className="btn btn-outline">&lt;</button>
              <button className="btn btn-outline">&gt;</button>
            </div>
          </div>

          {/* Date Selector */}
          <div className="grid grid-cols-7 gap-2 mb-6">
            {calendarDates.map((date) => (
              <button
                key={date.date}
                className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                  date.date === selectedDate
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => handleDateSelect(date.date)}
              >
                <span className="text-xs font-medium">{date.dayOfWeek.slice(0, 3)}</span>
                <span
                  className={`text-lg font-semibold ${
                    date.isToday && date.date !== selectedDate ? 'text-primary' : ''
                  }`}
                >
                  {date.dayOfMonth}
                </span>
              </button>
            ))}
          </div>

          {/* Schedule for Selected Date */}
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Schedule for{' '}
                {new Date(selectedDate).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </h3>
            </div>

            {sortedTimeSlots.length > 0 ? (
              <div className="divide-y divide-gray-200">
                {sortedTimeSlots.map((timeSlot) => (
                  <div key={timeSlot} className="px-4 py-4 sm:px-6">
                    <div className="flex items-center mb-3">
                      <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm font-medium text-gray-900">{timeSlot}</span>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {groupedEvents[timeSlot].map((event) => (
                        <div
                          key={event.id}
                          className={`p-4 rounded-lg border ${
                            event.type === 'group'
                              ? 'border-blue-200 bg-blue-50'
                              : 'border-green-200 bg-green-50'
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="text-md font-medium text-gray-900">{event.title}</h4>
                              <p className="text-sm text-gray-500">with {event.trainer}</p>
                            </div>
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                event.type === 'group'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-green-100 text-green-800'
                              }`}
                            >
                              {event.type === 'group' ? (
                                <UserGroupIcon className="h-3 w-3 mr-1" />
                              ) : (
                                <UserIcon className="h-3 w-3 mr-1" />
                              )}
                              {event.type === 'group' ? 'Group' : 'Personal'}
                            </span>
                          </div>

                          {event.type === 'group' ? (
                            <div className="mt-2 flex items-center text-xs text-gray-500">
                              <span className="mr-2">
                                {event.enrolled}/{event.capacity} enrolled
                              </span>
                              <div className="w-20 bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-primary h-2 rounded-full"
                                  style={{ width: `${(event.enrolled / event.capacity) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          ) : (
                            <div className="mt-2 text-xs text-gray-500">Member: {event.member}</div>
                          )}

                          <div className="mt-3 flex justify-end space-x-2">
                            <button className="text-xs text-primary hover:text-primary/80">
                              Details
                            </button>
                            {event.type === 'group' && event.enrolled < event.capacity && (
                              <button className="text-xs text-secondary hover:text-secondary/80">
                                Enroll
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="px-4 py-10 sm:px-6 text-center text-gray-500">
                <CalendarDaysIcon className="h-10 w-10 mx-auto text-gray-400 mb-3" />
                <p>No sessions scheduled for this date.</p>
                <button className="mt-4 btn btn-outline">Add Session</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedules;
