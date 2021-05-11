import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#3e80ca",
  primaryBright: "#3e80ca",
  primaryDark: "#3e80ca",
  secondary: "#4e9ece",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f1f0f0",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eaf4f0",
  tertiary: "#EFF4F5",
  text: "#222f87",
  textDisabled: "#BDC2C4",
  textSubtle: "#1e4f59",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#4e9ece",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#354347",
  text: "#FFFFFF",
  textDisabled: "#cccccc",
  textSubtle: "#c4c9d4",
  borderColor: "#4b5363",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
