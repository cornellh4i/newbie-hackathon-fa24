/** @type {import("next").NextConfig} */
const nextConfig = {
  basePath: process.argv.includes("dev") ? "" : "/newbie-hackathon-fa24",
  output: "export",
  images: {
    unoptimized: true,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
export default nextConfig;
