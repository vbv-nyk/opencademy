/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["play-lh.googleusercontent.com", "media.discordapp.net"],
	},
}

module.exports = nextConfig
