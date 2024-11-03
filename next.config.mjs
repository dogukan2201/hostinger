/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  redirects() {
    return [
      {
        source: "/",
        destination: "/tr",
        permanent: true,
      },
    ];
  },
  reactStrictMode: false,
};

export default nextConfig;
