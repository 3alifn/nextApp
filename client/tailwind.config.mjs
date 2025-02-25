/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [daisyui],
};
