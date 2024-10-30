import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.EXPORT_MODE === "true" ? "export" : undefined,
  reactStrictMode: false,
};

export default withNextIntl(nextConfig);
