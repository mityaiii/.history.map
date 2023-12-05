import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // eslint-disable-next-line max-len
        'search-field': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\'/%3E%3Cpath d=\'M0 0h24v24H0z\' fill=\'none\'/%3E%3C/svg%3E")',
      },
      backgroundPosition: {
        'right-with-space': '95% center;',
      },
      colors: {
        angry: {
          100: '#EDC7C7',
          300: '#E09D9D',
          500: '#D27373',
          700: '#C54949',
          900: '#B71F1F',
        },
        warn: {
          100: '#DFBC9A',
          300: '#D7AB81',
          500: '#CF9B67',
          700: '#C78A4E',
          900: '#BF7934',
        },
        good: {
          100: '#C7DF9A',
          300: '#B2CC81',
          500: '#9DB968',
          700: '#87A64F',
          900: '#729336',
        },
        other: {
          100: '#9AC8DF',
          300: '#81B3CC',
          500: '#689EB9',
          700: '#4F89A6',
          900: '#367493',
        }, 
        neutral: {
          100: '#EDEDEF',
          300: '#C0C0C6',
          500: '#92949D',
          700: '#656773',
          900: '#373A4A',
        },
      },
      // styles: {
      //   'search-icon-bg': {
      //     'background-repeat': 'no-repeat',
      //   },
      // },
    },
  },
  plugins: [],
}
export default config
