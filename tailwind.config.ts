import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        
        iransbold: ['iransbold'],
        falsafebold: ['falsafebold'],
        irans: ['irans']
       
   
      },

    },
    colors: {
      mycolor: {
        50: '#6f887a',
        100: '#505f4e',
        200: '#73886f',
        300: '#4e5f5a'

      },
    }
  },
  plugins: [nextui()],
};
export default config;
