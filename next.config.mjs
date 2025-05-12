/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // disables build failure on ESLint errors
  },
};

export default nextConfig;
