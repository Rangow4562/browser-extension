import baseConfig from '@extension/tailwindcss-config';
import type { Config } from 'tailwindcss/types/config';

export default {
  ...baseConfig,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bem: {
          primary: '#06679f',    // ather primary red
          secondary: '#0073DC', // ather blue
          accent: '#19C2FF',    // Light blue accent
          dark: '#1E293B',      // Dark slate for dark mode
          light: '#F8FAFC',     // Light background
          gray: '#64748B',      // Neutral gray
        },
      },
      keyframes: {
        progress: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        progress: 'progress 1.5s infinite ease-in-out',
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideUp: 'slideUp 0.3s ease-in-out',
      },
      boxShadow: {
        'bem': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'bem-md': '0 6px 16px rgba(0, 0, 0, 0.08)',
        'bem-lg': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
    },
  },
} as Config;
