export interface LearningResource {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'pdf' | 'interactive';
  url: string;
  durationMinutes?: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Course {
  id: string;
  title: string;
  description: string;
  modules: LearningResource[];
  totalDurationMinutes: number;
  instructorId?: string;
}

export interface Quiz {
  id: string;
  courseId?: string;
  title: string;
  questions: {
    questionText: string;
    options: string[];
    correctOptionIndex: number;
    explanation: string;
  }[];
}
