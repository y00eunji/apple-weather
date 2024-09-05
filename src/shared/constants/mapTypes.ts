export const MAP_TYPES = {
  PRECIPITATION: 'PA0',
  WIND: 'WND',
  TEMPERATURE: 'TA2',
} as const;

export type MapType = keyof typeof MAP_TYPES;
