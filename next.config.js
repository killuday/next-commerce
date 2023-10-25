/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.**',
        port: '',
        pathname: '/**',
      },
    ],
  },
  plugins: [],
}