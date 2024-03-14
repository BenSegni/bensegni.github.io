export interface Blog {
  id: number;
  coverImage: string;
  title: string;
  date: Date;
  description: string;
  content: string;
  routeUrl: string;
  skills: string[];
  level: string;
}