import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import flattenColorPalette from 'tailwindcss/src/util/flattenColorPalette';
import toColorValue from 'tailwindcss/src/util/toColorValue';
const { fontFamily } = require("tailwindcss/defaultTheme")

const config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    animation: {
      // Fade up and down
      'fade-up': 'fade-up 0.5s',
      'fade-down': 'fade-down 0.5s',
      // Tooltip
      'slide-up-fade': 'slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      'slide-down-fade': 'slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    },
    keyframes: {
      // Fade up and down
      'fade-up': {
        '0%': {
          opacity: '0',
          transform: 'translateY(10px)',
        },
        '80%': {
          opacity: '0.6',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0px)',
        },
      },
      'fade-down': {
        '0%': {
          opacity: '0',
          transform: 'translateY(-10px)',
        },
        '80%': {
          opacity: '0.6',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0px)',
        },
      },
      // Tooltip
      'slide-up-fade': {
        '0%': { opacity: '0', transform: 'translateY(6px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      'slide-down-fade': {
        '0%': { opacity: '0', transform: 'translateY(-6px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-unused-vars -- We don't need the var e
    plugin(({ matchUtilities, e, config, theme }) => {
      const textBorderSize = `--tw${config('prefix')}-text-border-size`;

      matchUtilities(
        {
          'text-border': (value) => ({
            'text-shadow': `0 0 var(${textBorderSize},1px) ${toColorValue(value)}`,
          }),
        },
        {
          values: (({ DEFAULT: _, ...colors }) => colors)(flattenColorPalette(theme('borderColor'))),
          type: 'color',
        }
      );

      matchUtilities(
        {
          'text-border-size': (value) => ({
            [textBorderSize]: value
          }),
        },
        { values: theme('borderWidth') }
      );
    }),

    require('tailwindcss-animate')],
} satisfies Config;

export default config;