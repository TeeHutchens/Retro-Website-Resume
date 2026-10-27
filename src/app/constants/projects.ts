export interface Project {
  name: string;
  description: string;
  tags: string[];
  category: 'software' | 'hardware' | 'hobby';
  status?: 'Live' | 'Beta' | 'Active' | 'WIP';
  updated?: string;
  link?: string;
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    name: 'Whose News',
    description: 'Who owns the news you read? Look up a news outlet and see its owners, step by step, with a source for every step. Coming soon: a lightweight PWA that uses RSS feeds to group stories by topic, and works with any RSS feed.',
    tags: ['Cloudflare Workers', 'D1', 'Workers AI', 'Embeddings', 'RSS', 'PWA'],
    category: 'software',
    status: 'Live',
    updated: 'Oct 2026',
    link: 'https://whosenews.org',
    image: '/projects/whosenews.png',
  },
  {
    name: 'TopoDot Watch Face',
    description: 'Garmin watch face I wear every day: an LED dot-matrix clock over a topo map of Mt. Rainier, with 30+ configurable metrics. Built for AMOLED.',
    tags: ['Monkey C', 'Connect IQ', 'GDAL', 'USGS elevation data'],
    category: 'hardware',
    status: 'Beta',
    updated: 'Sep 2026',
    link: 'https://teehutchens.github.io/TopoDot/',
    image: '/projects/topodot.png',
  },
  {
    name: 'letmespam',
    description: 'A Claude Code plugin that lets you type out every thought line by line, then send it as one message, optionally condensed by a cheaper model first.',
    tags: ['Claude Code', 'Plugin', 'Hooks', 'LLMs'],
    category: 'software',
    status: 'Live',
    updated: 'Oct 2026',
    link: 'https://github.com/TeeHutchens/letmespam',
  },
  {
    name: 'Homelab',
    description: 'A Raspberry Pi and a Mac Mini running my home: Docker services, smart home automation, Discord bots, and local LLMs with a shared memory server my AI tools use.',
    tags: ['Docker', 'Raspberry Pi', 'Ollama', 'MCP', 'Home Assistant', 'Pi-hole', 'WireGuard', 'Matter'],
    category: 'hardware',
    status: 'Active',
    updated: 'Oct 2026',
  },
  {
    name: 'Trackmania Bot',
    description: 'Using Openplanet API to build a bot that compares times for the state of Montana and races against friends.',
    tags: ['API', 'Discord', 'Openplanet'],
    category: 'software',
  },
  {
    name: 'iPods in 2026',
    description: 'Rebuilding an iPod Classic 6th gen to hold 1TB of music and accomplish a childhood dream.',
    tags: ['Firmware', 'iFlashQuad', 'Rockbox', 'MusicBee'],
    category: 'hobby',
  },
  {
    name: 'Retro Website Resume',
    description: 'This site — personal resume built with Next.js and a retro macOS aesthetic.',
    tags: ['Next.js', 'React', 'TypeScript'],
    category: 'software',
    link: 'https://github.com/TeeHutchens/Retro-Website-Resume',
  },
];
