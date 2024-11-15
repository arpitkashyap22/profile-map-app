/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      primary: '#FF0000', // Red
      secondary: '#000000', // Black
    },
  },
};
export const plugins = [];
