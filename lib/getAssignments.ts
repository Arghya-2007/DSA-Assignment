import fs from 'fs';
import path from 'path';

export interface Assignment {
  id: number;
  slug: string;
  title: string;
  problem_statement: string;
  code_file: string;
  image_path: string;
  complexities: {
    time: string;
    space: string;
  };
}

export function getAllAssignments(): Assignment[] {
  const filePath = path.join(process.cwd(), 'data', 'assignments.json');
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const assignments: Assignment[] = JSON.parse(fileContents);
    return assignments;
  } catch (error) {
    console.error('Error reading or parsing assignments.json:', error);
    return [];
  }
}

export function getAssignmentBySlug(slug: string): Assignment | undefined {
  const assignments = getAllAssignments();
  return assignments.find((assignment) => assignment.slug === slug);
}
