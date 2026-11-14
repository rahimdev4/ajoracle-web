import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      {
        source: "/latest-releases",
        destination: "/releases",
        permanent: true,
      },
      {
        source: "/perseverance-continuing-when-its-hard",
        destination: "/news/perseverance",
        permanent: true,
      },
      {
        source: "/the-story-behind-prayer",
        destination: "/news/the-story-behind-prayer",
        permanent: true,
      },
      {
        source: "/prayer-a-song-for-quiet-moments",
        destination: "/news/prayer-a-song-for-quiet-moments",
        permanent: true,
      },
      ...[
        "/sitemap_index.xml",
        "/wp-sitemap.xml",
        "/post-sitemap.xml",
        "/page-sitemap.xml",
      ].map((source) => ({
        source,
        destination: "/sitemap.xml",
        permanent: true,
      })),
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
  },
};

export default nextConfig;
