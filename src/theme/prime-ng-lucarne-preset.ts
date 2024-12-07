import { definePreset } from '@primeng/themes';
import Lara from '@primeng/themes/lara';

export const PrimeNgLucarnePreset = definePreset(Lara, {
  semantic: {
    primary: {
      50: '#f0f8ff',
      100: '#e0f0fe',
      200: '#bae1fd',
      300: '#7dcafc',
      400: '#38b0f8',
      500: '#1da1f2',
      600: '#0176c8',
      700: '#035ea1',
      800: '#075085',
      900: '#0c436e',
      950: '#082a49',
    },
  },
  colorScheme: {
    light: {
      surface: {
        50: '#f4f8f9',
        100: '#ecf1f3',
        200: '#dce7e9',
        300: '#c6d7db',
        400: '#aec3cb',
        500: '#99afbb',
        600: '#8298a9',
        700: '#657786',
        800: '#5c6c77',
        900: '#4d5962',
        950: '#2d3339',
      },
      text: {
        color: '{surface.700}',
        hoverColor: '{surface.800}',
        mutedColor: '{surface.500}',
        hoverMutedColor: '{surface.600}',
      },
    },
  },
});
