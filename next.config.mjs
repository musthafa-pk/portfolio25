/** @type {import('next').NextConfig} */
const nextConfig = {
     output: 'export',
     images: {
    unoptimized: true, // Disables Image Optimization API (not available on GH Pages)
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio25' : '', 
};

export default nextConfig;
