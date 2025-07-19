import React from 'react';
import { Users, GraduationCap, BookOpen, TrendingUp, Calendar, Clock } from 'lucide-react';
import { mockStats } from '../data/mockData';

const StatCard = ({ title, value, icon: Icon, color, trend }: {
  title: string;
  value: string | number;
  icon: React.ElementType;
  color: string;
  trend?: string;
}) => (
  <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        {trend && (
          <p className="text-sm text-green-600 mt-1 flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            {trend}
          </p>
        )}
      </div>
      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
  </div>
);

export function Dashboard() {
  const recentActivities = [
    { id: 1, action: 'New student enrollment', student: 'John Doe', time: '2 hours ago' },
    { id: 2, action: 'Course grade updated', student: 'Jane Smith', time: '4 hours ago' },
    { id: 3, action: 'Faculty meeting scheduled', student: 'CS Department', time: '6 hours ago' },
    { id: 4, action: 'Assignment submitted', student: 'Mike Johnson', time: '8 hours ago' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Faculty Meeting', date: 'Tomorrow', time: '10:00 AM' },
    { id: 2, title: 'Student Orientation', date: 'Dec 15', time: '2:00 PM' },
    { id: 3, title: 'Final Exams Begin', date: 'Dec 18', time: 'All Day' },
    { id: 4, title: 'Winter Break Starts', date: 'Dec 22', time: 'All Day' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Students"
          value={mockStats.totalStudents.toLocaleString()}
          icon={Users}
          color="bg-blue-500"
          trend="+12% from last month"
        />
        <StatCard
          title="Faculty Members"
          value={mockStats.totalFaculty}
          icon={GraduationCap}
          color="bg-emerald-500"
          trend="+2 new hires"
        />
        <StatCard
          title="Active Courses"
          value={mockStats.totalCourses}
          icon={BookOpen}
          color="bg-purple-500"
          trend="+8 this semester"
        />
        <StatCard
          title="Attendance Rate"
          value={`${mockStats.averageAttendance}%`}
          icon={TrendingUp}
          color="bg-orange-500"
          trend="+3% improvement"
        />
      </div>

      {/* Charts and Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.student}</p>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <Clock className="w-3 h-3 mr-1" />
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Calendar className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{event.title}</p>
                  <p className="text-sm text-gray-500">{event.date} at {event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors group">
            <Users className="w-8 h-8 text-gray-400 group-hover:text-blue-500 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600 group-hover:text-blue-600">Add New Student</p>
          </button>
          <button className="p-4 border border-dashed border-gray-300 rounded-lg hover:border-emerald-400 hover:bg-emerald-50 transition-colors group">
            <GraduationCap className="w-8 h-8 text-gray-400 group-hover:text-emerald-500 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600 group-hover:text-emerald-600">Add Faculty Member</p>
          </button>
          <button className="p-4 border border-dashed border-gray-300 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-colors group">
            <BookOpen className="w-8 h-8 text-gray-400 group-hover:text-purple-500 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600 group-hover:text-purple-600">Create New Course</p>
          </button>
        </div>
      </div>
    </div>
  );
}