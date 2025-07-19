export interface Student {
  id: string;
  name: string;
  email: string;
  studentId: string;
  course: string;
  year: number;
  gpa: number;
  status: 'active' | 'inactive' | 'graduated';
  enrollmentDate: string;
  avatar?: string;
}

export interface Faculty {
  id: string;
  name: string;
  email: string;
  facultyId: string;
  department: string;
  position: string;
  courses: string[];
  experience: number;
  avatar?: string;
}

export interface Course {
  id: string;
  name: string;
  code: string;
  department: string;
  instructor: string;
  credits: number;
  enrolled: number;
  capacity: number;
  schedule: string;
  semester: string;
}

export interface DashboardStats {
  totalStudents: number;
  totalFaculty: number;
  totalCourses: number;
  averageAttendance: number;
}