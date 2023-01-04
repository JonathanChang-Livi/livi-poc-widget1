/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => { // webpack configurations
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'widget1',
        remotes: {
          //next1: `next1@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './demo': './components/demo-widget',
          './logo': './public/logo-livi-letter',
        },
        shared: {
          // whatever else
        },
      })
    );

    return config;
  }
}

module.exports = nextConfig