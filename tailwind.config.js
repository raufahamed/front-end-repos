/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    letterSpacing:{
        '3':'1em'
    },
    
    extend: {
      colors:{


        'DarkGray':'hsl(0, 0%, 63%)'
         ,'Black': 'hsl(0, 0%, 0%)',
        ' White': 'hsl(0, 0%, 100%)',
        'VeryDarkGray': 'hsl(0, 0%, 27%)'        
      }
    },
  },
  plugins: [],
}

