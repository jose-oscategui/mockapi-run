import type { Endpoint } from '../../types';

export const educationEndpoint: Endpoint[] = [
  {
    id: 'api-education-courses',
    method: 'GET',
    path: '/education/courses',
    description: 'List of available online courses with metadata.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [{ id: 'course_01', title: 'Intro to React' }],
  },
  {
    id: 'api-education-students',
    method: 'GET',
    path: '/education/students',
    description: 'Manage mock student profiles and enrollments.',
    exampleTitle: 'SAMPLE RESPONSE',
    response: [{ id: 'stu_882', name: 'Alex Rivera', courses: [1, 5] }],
  },
];
