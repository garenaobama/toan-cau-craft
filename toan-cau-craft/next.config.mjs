/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript:{
        ignoreBuildErrors:true
    },
    env:{
        API_ENDPOINT_DEV: "http://localhost:3001",
        API_ENDPOINT_PROD: "https://toan-cau-craft-backend.vercel.app",
    }
};

export default nextConfig;
