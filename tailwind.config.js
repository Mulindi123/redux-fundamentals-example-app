// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all components in the src folder for Tailwind CSS classes
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors for your Todos app (optional)
        purple: {
          DEFAULT: '#6B46C1',
          light: '#9F7AEA',
        },
        red: {
          DEFAULT: '#E53E3E',
          light: '#FC8181',
        },
        blue: {
          DEFAULT: '#3182CE',
          light: '#63B3ED',
        },
        green: {
          DEFAULT: '#38A169',
          light: '#68D391',
        },
        orange: {
          DEFAULT: '#DD6B20',
          light: '#F6AD55',
        },
      },
    },
  },
  plugins: [],
};
