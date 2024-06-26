/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        //primary: "#050816",
        primary: "#ffffff",
        logoColor: "#409AEF",
        secondary: "#aaa6c3",
        //secondary: "#6151cf",
        tertiary: "#151030",
        "black-100": "#100d25",
        //"black-100": "#003296",
        "black-200": "#090325",
        //"black-200": "#409AEF",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobgr.png')",
        "banner-pattern": "url('/src/assets/banner.png')",
        "home-pattern": "url('/public/videos/video-1.mp4')",
        //2880x1566
      },
    },
  },
  plugins: [],
};