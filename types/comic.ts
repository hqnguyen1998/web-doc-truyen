export interface Comic {
  _id: string;
  name: string;
  slug: string;
  description: string;
  thumb_url: string;
  author: string;
  chapters: Chapter[];
  status: 'completed' | 'ongoing';
  viewed: number;
  created_at: string;
  updated_at: string;
  categories: Category[];
}

export interface Chapter {
  id: string;
  name: string;
  slug: string;
  description: string;
  thumb_url: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}
