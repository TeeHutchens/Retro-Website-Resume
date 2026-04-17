export interface Project {
  name: string;
  description: string;
  tags: string[];
  category: 'software' | 'hardware' | 'hobby';
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    name: 'Retro Website Resume',
    description: 'This site — personal resume built with Next.js and a retro macOS aesthetic.',
    tags: ['Next.js', 'React', 'TypeScript'],
    category: 'software',
  },
  {
    name: 'Pi Home Stack',
    description: 'Raspberry Pi Docker stack running Home Assistant and home automations.',
    tags: ['Raspberry Pi', 'Docker', 'Home Assistant'],
    category: 'hardware',
  },
  {
    name: 'Smart Home Automation',
    description: 'Automations, smart devices, and scripting to make the home smarter.',
    tags: ['IoT', 'Automation', 'Scripting'],
    category: 'hardware',
  },
  {
    name: 'Woodworking & Builds',
    description: 'Building furniture and physical projects by hand — enjoying the tangible progress.',
    tags: ['Woodworking', 'Building'],
    category: 'hobby',
  },
  {
    name: 'Hardware Tinkering',
    description: 'Electronics projects, DIY builds, and anything that involves making something real.',
    tags: ['Electronics', 'DIY'],
    category: 'hobby',
  },
];
