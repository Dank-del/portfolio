module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#83f7c3',
          secondary: '#54a4c4',
          accent: '#a7f94f',
          neutral: '#202331',
          'base-100': '#322D4D',
          info: '#5E9ADE',
          success: '#5ED9A0',
          warning: '#FACB3D',
          error: '#F24121',
        },
      },
    ],
  },
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
};
