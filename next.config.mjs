/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/flow/0",
        permanent: true,
      },
    ];
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
    ],
  },
};

export default nextConfig;
