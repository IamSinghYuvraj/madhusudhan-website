// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove or comment out the output: 'export' line
  // output: 'export', // <-- Remove this line
  
  // Keep other configurations you might have
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Keep this if you had it for static exports
  },
  trailingSlash: true, // Optional: keep if you prefer trailing slashes
}

export default nextConfig;