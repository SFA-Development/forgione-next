/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "www.johnforgione.com",
            port: "",
            pathname: "**",
          },
          {
            protocol: "https",
            hostname: "johnforgione.sfadev.com",
            port: "",
            pathname: "**",
          },
        ],
      },
};

export default nextConfig;
