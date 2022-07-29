const { hasSelectionSupport } = require("@testing-library/user-event/dist/utils");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
    },
    extend: {
        colors: {
          brightRed: 'hsl(12, 88%, 59%)',
          brightRedLight: 'hsl(12, 88%, 69%)',
          brightRedSupLight: 'hsl(12, 88%, 95%)',
          veryPaleRed: 'hsl(13, 100%, 96%)', 
          darkRed: 'RGB(205,5,5)',
          brownRed: 'RGB(185, 39, 13)',
          brown: 'RGB(128,25,7)',
          darkBrown: 'RGB(109,16,7)',
          grayishBlue: 'RGB(82,99,203)',
          darkBlue: 'hsl(228, 39%, 23%)',
          darkGrayishBlue: 'hsl(227, 12%, 61%)',
          paleGrayishBlue: 'RGB(183, 193, 254)',
          veryDarkBlue: 'hsl(233, 12%, 13%)',
          veryLightGray: 'hsl(0, 0%, 98%)',
          goldGray: 'RGB(75, 75, 75)',
          darkGray: 'hsl(11, 3%, 30%)',
          lightBlack: 'hsl(219, 5%, 15%)',
          lila: '#40005d',
          lightLila: '#a892ee',
          greenYellow: 'RGB(211, 254, 183)',	
          darkGreen: 'RGB(15, 118, 15)',	
          veryDarkGreen: 'RGB(2, 81, 2)',
          green: 'RGB(2, 190, 2)',		 
          orangeRed: 'RGB(245, 114, 53)',
          paleOrangeRed: 'RGB(248, 132, 79)',
          veryPaleOrangeRed: 'RGB(254, 227, 214)',
        },
     },
  },
  plugins: [],
}
