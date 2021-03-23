const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const mdx = require("next-mdx-enhanced")({
  // This is the actual config that allows use to use layouts in MDX files
  defaultLayout: true,
  fileExtensions: ["mdx", "md"],
});

// Telling Next.js to treat mdx and other listed extensions as pages
const nextConfig = { pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", "md"] };

module.exports = withPlugins([mdx, optimizedImages], nextConfig);
