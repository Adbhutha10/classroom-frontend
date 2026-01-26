import {Subject} from "../types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: 'CS101',
    name: 'Introduction to Computer Science',
    department: 'CS',
    description:
      'Basics of computing, programming, and problem-solving concepts.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: 'CS102',
    name: 'Data Structures',
    department: 'CS',
    description:
      'Introduction to arrays, stacks, queues, linked lists, and trees.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: 'CS103',
    name: 'Database Management Systems',
    department: 'CS',
    description:
      'Fundamentals of databases, SQL, and data organization techniques.',
    createdAt: new Date().toISOString(),
  },
];