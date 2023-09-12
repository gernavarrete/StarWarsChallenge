/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_APP_BACK_URL: "https://swapi.dev/api",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/search/**",
      },
    ],
  },
};

module.exports = nextConfig;
