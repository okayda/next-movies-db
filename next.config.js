/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tmdb.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "themoviedb.org",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/**",
      },
    ],

    minimumCacheTTL: 60 * 60 * 24 * 30, // Image cache for 30 days
  },
};

module.exports = nextConfig;
