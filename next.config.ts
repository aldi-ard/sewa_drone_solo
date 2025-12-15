import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
};

module.exports = {
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.127.1:3000",
  ],
}
export default nextConfig;
