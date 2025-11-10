/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            '[class~="lead"]': {
              color: '#4b5563',
            },
            a: {
              color: '#2563eb',
              textDecoration: 'none',
              '&:hover': {
                color: '#1d4ed8',
              },
            },
            strong: {
              color: '#111827',
            },
            'ol > li::before': {
              color: '#6b7280',
            },
            'ul > li::before': {
              backgroundColor: '#d1d5db',
            },
            hr: {
              borderColor: '#e5e7eb',
            },
            blockquote: {
              color: '#374151',
              borderLeftColor: '#e5e7eb',
            },
            h1: {
              color: '#111827',
            },
            h2: {
              color: '#111827',
            },
            h3: {
              color: '#111827',
            },
            h4: {
              color: '#111827',
            },
            'figure figcaption': {
              color: '#6b7280',
            },
            code: {
              color: '#111827',
            },
            'a code': {
              color: '#111827',
            },
            pre: {
              color: '#e5e7eb',
              backgroundColor: '#1f2937',
            },
            thead: {
              color: '#111827',
              borderBottomColor: '#d1d5db',
            },
            'tbody tr': {
              borderBottomColor: '#e5e7eb',
            },
          },
        },
        invert: {
          css: {
            color: '#d1d5db',
            '[class~="lead"]': {
              color: '#9ca3af',
            },
            a: {
              color: '#60a5fa',
            },
            strong: {
              color: '#f9fafb',
            },
            'ol > li::before': {
              color: '#9ca3af',
            },
            'ul > li::before': {
              backgroundColor: '#4b5563',
            },
            hr: {
              borderColor: '#374151',
            },
            blockquote: {
              color: '#d1d5db',
              borderLeftColor: '#374151',
            },
            h1: {
              color: '#f9fafb',
            },
            h2: {
              color: '#f9fafb',
            },
            h3: {
              color: '#f9fafb',
            },
            h4: {
              color: '#f9fafb',
            },
            'figure figcaption': {
              color: '#9ca3af',
            },
            code: {
              color: '#f9fafb',
            },
            'a code': {
              color: '#f9fafb',
            },
            pre: {
              backgroundColor: '#111827',
            },
            thead: {
              color: '#f9fafb',
              borderBottomColor: '#374151',
            },
            'tbody tr': {
              borderBottomColor: '#374151',
            },
          },
        },
      },
    },
  },
  plugins: [],
}

