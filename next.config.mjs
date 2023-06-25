/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "p.ipic.vip",
      },
      {
        protocol: "https",
        hostname: "kazoottt-1256684243.cos.ap-chengdu.myqcloud.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      }, {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
