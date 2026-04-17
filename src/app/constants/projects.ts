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
    description: 'Raspberry Pi Docker stack with portainer and endless possibilities.',
    tags: ['Docker', 'Home Assistant', 'Pi-hole', 'Discord Bots', 'WireGuard', 'Sunshine/Moonlight', 'Home NAS'],
    category: 'hardware',
  },
  {
    name: 'Smart Home Automation',
    description: 'Automations, smart devices, and scripting to make the home smarter.',
    tags: ['IoT', 'Automation', 'Scripting', 'Matter', 'Nest', 'Google Home'],
    category: 'hardware',
  },
  {
    name: 'iPods in 2026',
    description: 'Rebuilding an iPod Classic 6th gen to hold 1TB of music and accomplish a childhood dream.',
    tags: ['Firmware', 'iFlashQuad', 'Rockbox', 'MusicBee'],
    category: 'hobby',
  },
  {
    name: 'Trackmania Bot',
    description: 'Using Openplanet API to build a bot that compares times for the state of Montana and races against friends.',
    tags: ['API', 'Discord', 'Openplanet'],
    category: 'software',
  },
];
