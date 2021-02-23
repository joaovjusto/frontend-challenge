const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer");

const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: "../bundles/server.html",
    },
    browser: {
      analyzerMode: "static",
      reportFilename: "../bundles/client.html",
    },
  },
};

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig);
