/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "upload.wikimedia.org" },
      { hostname: "i.pinimg.com" },
    ],
  },
};

module.exports = nextConfig;
