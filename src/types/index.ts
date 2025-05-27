export interface ExperienceItem {
  company: string;
  period: string;
  title:string;
  description: string[];
  techStack?: string;
}

export interface ProjectItem {
  title: string;
  description: string[];
  techStack: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  notion?:string;
}