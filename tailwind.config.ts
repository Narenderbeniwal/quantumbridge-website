import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sora)', 'system-ui', 'sans-serif'],
        display: ['var(--font-syne)', 'var(--font-sora)', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        navy: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
        },
        accent: {
          gold: '#eab308',
          cream: '#fefce8',
          sand: '#fef9c3',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up-slow': 'slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { opacity: '0.5', filter: 'brightness(1)' },
          '100%': { opacity: '1', filter: 'brightness(1.1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'radial-gradient(circle at 25% 25%, rgba(234, 179, 8, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(14, 165, 233, 0.06) 0%, transparent 50%)',
        'mesh': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      },
      boxShadow: {
        'glow-gold': '0 0 40px -10px rgba(234, 179, 8, 0.4)',
        'glow-teal': '0 0 60px -15px rgba(20, 184, 166, 0.35)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 10px 20px -5px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(234, 179, 8, 0.1)',
      },
    },
  },
  plugins: [],
}
export default config
