import type { PaletteColor } from '@mui/material/styles/createPalette';
import type { ColorPreset } from './index';
import { blue, green, indigo, purple } from './colors';

export const getPrimary = (preset?: ColorPreset): PaletteColor => {
  switch (preset) {
    default:
      return green;
  }
};
