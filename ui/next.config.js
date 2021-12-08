/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    apiUrl: process.env.SERVER_API_ENDPOINT,
  },
  publicRuntimeConfig: {
    apiUrl: process.env.CLIENT_API_ENDPOINT,
  },
};
