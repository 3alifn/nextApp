/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*', // Next.js root...
          destination: 'http://localhost:5000/api/:path*' // Express API root...
        }
      ]
    }
  };
  
  export default nextConfig;
  