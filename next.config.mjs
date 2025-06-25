/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/analy/:match*',            // Choose a unique path
        destination: '/_vercel/insights/:match*',  // Maps to Vercel’s analytics endpoint
      },
    ];
  },
};

export default nextConfig;
