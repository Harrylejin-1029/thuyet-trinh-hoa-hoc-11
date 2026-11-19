export type ViewMode = 'presentation' | 'scroll';

export interface SlideData {
  id: number;
  sectionNumber: string;
  title: string;
  subtitle: string;
  tag: string;
  category: string;
  speakerNotes: {
    overview: string;
    talkingPoints: string[];
    chemistryDeepDive?: string;
    durationMinutes: number;
  };
}

export interface FertilizerCategory {
  id: string;
  name: string;
  vietnameseName: string;
  tagline: string;
  source: string;
  characteristics: string[];
  usage: string;
  advantages: string[];
  c_n_ratio: string;
  image: string;
  badgeColor: string;
  chemicalAspect: string;
}

export interface CompostStep {
  step: number;
  title: string;
  phaseName: string;
  temperature: string;
  duration: string;
  description: string;
  microbiology: string;
  chemicalProcess: string;
  tips: string;
  image: string;
  keyMetric: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  context?: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  chemistryConcept: string;
}
