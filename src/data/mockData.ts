import { Student, Faculty, Course, DashboardStats } from '../types';

export const mockStudents: Student[] = [
  {
    id: '1',
    name: 'Emily Johnson',
    email: 'emily.johnson@college.edu',
    studentId: 'STU001',
    course: 'Computer Science',
    year: 3,
    gpa: 3.8,
    status: 'active',
    enrollmentDate: '2022-08-15'
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@college.edu',
    studentId: 'STU002',
    course: 'Business Administration',
    year: 2,
    gpa: 3.6,
    status: 'active',
    enrollmentDate: '2023-08-20'
  },
  {
    id: '3',
    name: 'Sarah Williams',
    email: 'sarah.williams@college.edu',
    studentId: 'STU003',
    course: 'Engineering',
    year: 4,
    gpa: 3.9,
    status: 'active',
    enrollmentDate: '2021-08-18'
  },
  {
    id: '4',
    name: 'David Rodriguez',
    email: 'david.rodriguez@college.edu',
    studentId: 'STU004',
    course: 'Psychology',
    year: 1,
    gpa: 3.4,
    status: 'active',
    enrollmentDate: '2024-08-25'
  }
];

export const mockFaculty: Faculty[] = [
  {
    id: '1',
    name: 'Dr. Amanda Smith',
    email: 'amanda.smith@college.edu',
    facultyId: 'FAC001',
    department: 'Computer Science',
    position: 'Professor',
    courses: ['CS101', 'CS301', 'CS401'],
    experience: 12
  },
  {
    id: '2',
    name: 'Prof. Robert Davis',
    email: 'robert.davis@college.edu',
    facultyId: 'FAC002',
    department: 'Business',
    position: 'Associate Professor',
    courses: ['BUS201', 'BUS301'],
    experience: 8
  },
  {
    id: '3',
    name: 'Dr. Lisa Thompson',
    email: 'lisa.thompson@college.edu',
    facultyId: 'FAC003',
    department: 'Engineering',
    position: 'Professor',
    courses: ['ENG101', 'ENG201', 'ENG401'],
    experience: 15
  }
];

export const mockCourses: Course[] = [
  {
    id: '1',
    name: 'Introduction to Programming',
    code: 'CS101',
    department: 'Computer Science',
    instructor: 'Dr. Amanda Smith',
    credits: 3,
    enrolled: 45,
    capacity: 50,
    schedule: 'MWF 10:00-11:00',
    semester: 'Fall 2024'
  },
  {
    id: '2',
    name: 'Business Statistics',
    code: 'BUS201',
    department: 'Business',
    instructor: 'Prof. Robert Davis',
    credits: 3,
    enrolled: 38,
    capacity: 40,
    schedule: 'TTh 14:00-15:30',
    semester: 'Fall 2024'
  },
  {
    id: '3',
    name: 'Engineering Mathematics',
    code: 'ENG101',
    department: 'Engineering',
    instructor: 'Dr. Lisa Thompson',
    credits: 4,
    enrolled: 42,
    capacity: 45,
    schedule: 'MWF 09:00-10:00',
    semester: 'Fall 2024'
  },
  {
    id: '4',
    name: 'Advanced Algorithms',
    code: 'CS301',
    department: 'Computer Science',
    instructor: 'Dr. Amanda Smith',
    credits: 3,
    enrolled: 28,
    capacity: 30,
    schedule: 'TTh 11:00-12:30',
    semester: 'Fall 2024'
  }
];

export const mockStats: DashboardStats = {
  totalStudents: 1248,
  totalFaculty: 89,
  totalCourses: 156,
  averageAttendance: 87.3
};