/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "artisanclick.com",
                pathname: "**",
            },
        ],
    },
}

module.exports = nextConfig
