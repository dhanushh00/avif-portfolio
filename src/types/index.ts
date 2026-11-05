export type ThemeMode = 'dark' | 'light';

export interface CapabilityItem {
  number: string;
  title: string;
  items: string[];
}

export interface ObjectiveItem {
  number: string;
  title: string;
  description: string;
}

export interface ApproachStep {
  number: string;
  name: string;
  description: string;
}
