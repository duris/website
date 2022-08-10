/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['waveride1.s3.us-east-2.amazonaws.com', 'ik.imagekit.io'],
  },
  env: {
    YOUR_SERVICE_ID: "service_aooip5l", 
    YOUR_TEMPLATE_ID: "template_aw5qct8",
    YOUR_PUBLIC_KEY: "FpFNPmK7srsYZexse"
  },
};
