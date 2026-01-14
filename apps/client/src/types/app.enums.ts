export const AppColour = {
  PRIMARY_LIGHT_2: "#d3e7fe",
  PRIMARY_LIGHT_1: "#53a3fd",
  PRIMARY: "#0376f9",
  PRIMARY_DARK_1: "#0059c0",
  PRIMARY_DARK_2: "#003a7c",
  SECONDARY_LIGHT_2: "#94a3b8",
  SECONDARY_LIGHT_1: "#64748b",
  SECONDARY: "#334155",
  SECONDARY_DARK_1: "#1e293b",
  SECONDARY_DARK_2: "#0f172a",
  TERTIARY_LIGHT_2: "#fcd34d",
  TERTIARY_LIGHT_1: "#f59e0b",
  TERTIARY: "#d97706",
  TERTIARY_DARK_1: "#92400e",
  TERTIARY_DARK_2: "#78350f",
  BLACK: "#000000",
  WHITE: "#ffffff",
} as const;

export type AppColourType = (typeof AppColour)[keyof typeof AppColour];
