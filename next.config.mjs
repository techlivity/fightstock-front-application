/** @type {import('next').NextConfig} */

const nextConfig = {

    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'th.bing.com'
        },
        {
            protocol: 'https',
            hostname: 'i.postimg.cc'
        }
      ]
    }
};
export default nextConfig