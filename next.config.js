/** @type {import('next').NextConfig} */
// image.tmdb.org/t/p
const nextConfig = {
  images: {
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
  },
};

module.exports = nextConfig;
