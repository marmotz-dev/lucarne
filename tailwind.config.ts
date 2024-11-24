import type { Config } from 'tailwindcss';
// @ts-expect-error no declared types at this time
import TailwindCssPrimeUI from 'tailwindcss-primeui';

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [TailwindCssPrimeUI],
} satisfies Config;
