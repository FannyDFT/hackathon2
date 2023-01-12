/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "cloudinary",
    path: "http://res.cloudinary.com/dqylyotdo/fleetgo/upload",
  },
};

module.exports = nextConfig;
