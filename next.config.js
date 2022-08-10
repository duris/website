/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['waveride1.s3.us-east-2.amazonaws.com', 'ik.imagekit.io'],
  },  
};
