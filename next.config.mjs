import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export ",
  reactStrictMode: false,
};

export default withNextIntl(nextConfig);
