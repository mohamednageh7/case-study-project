import { ulid } from 'ulid';
export interface OptionsType {
  id: string;
  text: string;
  value: string;
}

export type Filter = {
  from: string | null;
  to: string | null;
  // category: string;
  source: string;
  filterNewApisString: string;
  filterNewYorkString: string;
};

export const OptionsCategory: OptionsType[] = [
  {
    id: ulid(),
    text: 'Business',
    value: 'business',
  },
  {
    id: ulid(),
    text: 'Entertainment',
    value: 'entertainment',
  },
  {
    id: ulid(),
    text: 'General',
    value: 'general',
  },
  {
    id: ulid(),
    text: 'Health',
    value: 'health',
  },
  {
    id: ulid(),
    text: 'Science',
    value: 'science',
  },
  {
    id: ulid(),
    text: 'Sports',
    value: 'sports',
  },
  {
    id: ulid(),
    text: 'Technology',
    value: 'technology',
  },
];
