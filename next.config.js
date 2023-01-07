/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "play-lh.googleusercontent.com",
      "media.discordapp.net",
      "www.theodinproject.com",
      "https://media.discordapp.net/attachments",
      "images.pexels.com",
      "cdn-icons-png.flaticon.com",
    ],
  },
};

module.exports = nextConfig;
