export type BreakpointModel = {
  mediaQuery: string;
  alias: string;
  suffix?: string;
  overlapping?: boolean;
  priority?: number;
};

export const DEFAULT_BREAKPOINTS: BreakpointModel[] = [
  {
    alias: 'xs',
    mediaQuery: 'screen and (min-width: 0px) and (max-width: 599.98px)',
    priority: 1000,
  },
  {
    alias: 'sm',
    mediaQuery: 'screen and (min-width: 600px) and (max-width: 959.98px)',
    priority: 900,
  },
  {
    alias: 'md',
    mediaQuery: 'screen and (min-width: 960px) and (max-width: 1279.98px)',
    priority: 800,
  },
  {
    alias: 'lg',
    mediaQuery: 'screen and (min-width: 1280px) and (max-width: 1919.98px)',
    priority: 700,
  },
  {
    alias: 'xl',
    mediaQuery: 'screen and (min-width: 1920px) and (max-width: 4999.98px)',
    priority: 600,
  },
  {
    alias: 'lt-sm',
    overlapping: true,
    mediaQuery: 'screen and (max-width: 599.98px)',
    priority: 950,
  },
  {
    alias: 'lt-md',
    overlapping: true,
    mediaQuery: 'screen and (max-width: 959.98px)',
    priority: 850,
  },
  {
    alias: 'lt-lg',
    overlapping: true,
    mediaQuery: 'screen and (max-width: 1279.98px)',
    priority: 750,
  },
  {
    alias: 'lt-xl',
    overlapping: true,
    priority: 650,
    mediaQuery: 'screen and (max-width: 1919.98px)',
  },
  {
    alias: 'gt-xs',
    overlapping: true,
    mediaQuery: 'screen and (min-width: 600px)',
    priority: -950,
  },
  {
    alias: 'gt-sm',
    overlapping: true,
    mediaQuery: 'screen and (min-width: 960px)',
    priority: -850,
  },
  {
    alias: 'gt-md',
    overlapping: true,
    mediaQuery: 'screen and (min-width: 1280px)',
    priority: -750,
  },
  {
    alias: 'gt-lg',
    overlapping: true,
    mediaQuery: 'screen and (min-width: 1920px)',
    priority: -650,
  },

  {
    alias: 'all',
    overlapping: true,
    mediaQuery: 'screen and (min-width: 0px)',
    priority: -1050,
  },
];

export type BreakpointChangeModel = {
  breakpoint: string;
  didMatch: boolean;
};

export type BreakpointChangeEventMediaMap = {
  mediaQueryList: MediaQueryList;
  eventHandler: any;
};
