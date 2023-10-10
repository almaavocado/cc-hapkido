/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
  // Other Tailwind CSS configurations...
};




