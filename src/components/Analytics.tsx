import React from 'react';
import { TrendingUp, Users, BookOpen, GraduationCap, Award } from 'lucide-react';

export function Analytics() {
  const enrollmentData = [
    { month: 'Jan', students: 1100 },
    { month: 'Feb', students: 1150 },
    { month: 'Mar', students: 1180 },
    { month: 'Apr', students: 1220 },
    { month: 'May', students: 1248 },
  ];

  const departmentStats = [
    { name: 'Computer Science', students: 342, color: 'bg-blue-500' },
    { name: 'Business', students: 298, color: 'bg-emerald-500' },
    { name: 'Engineering', students: 276, color: 'bg-purple-500' },
    { name: 'Psychology', students: 198, color: 'bg-orange-500' },
    { name: 'Arts', students: 134, color: 'bg-pink-500' },
  ];

  const maxStudents = Math.max(...departmentStats.map(d => d.students));

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average GPA</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">3.62</p>
              <p className="text-sm text-green-600 mt-1 flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                +0.12 from last semester
              </p>
            </div>
            <div className="p-3 rounded-full bg-blue-500">
              <Award className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Course Completion</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">94.2%</p>
              <p className="text-sm text-green-600 mt-1 flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                +2.1% improvement
              </p>
            </div>
            <div className="p-3 rounded-full bg-emerald-500">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Student Satisfaction</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">4.7</p>
              <p className="text-sm text-green-600 mt-1">Out of 5.0</p>
            </div>
            <div className="p-3 rounded-full bg-purple-500">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Graduation Rate</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">89.5%</p>
              <p className="text-sm text-green-600 mt-1">4-year rate</p>
            </div>
            <div className="p-3 rounded-full bg-orange-500">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Enrollment Trend */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Enrollment Trend</h3>
          <div className="space-y-4">
            {enrollmentData.map((data, index) => (
              <div key={data.month} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">{data.month}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(data.students / 1300) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-12 text-right">
                    {data.students}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Department Distribution */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Students by Department</h3>
          <div className="space-y-4">
            {departmentStats.map((dept) => (
              <div key={dept.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${dept.color}`}></div>
                  <span className="text-sm font-medium text-gray-600">{dept.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${dept.color}`}
                      style={{ width: `${(dept.students / maxStudents) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-12 text-right">
                    {dept.students}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-1">78%</div>
            <div className="text-sm text-gray-600">Students with GPA &gt; 3.5</div>
          </div>
          <div className="text-center p-4 bg-emerald-50 rounded-lg">
            <div className="text-2xl font-bold text-emerald-600 mb-1">92%</div>
            <div className="text-sm text-gray-600">On-time graduation rate</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-1">95%</div>
            <div className="text-sm text-gray-600">Course completion rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}