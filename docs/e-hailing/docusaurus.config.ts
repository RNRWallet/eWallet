import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "eHailing Platform",
  tagline: "Comprehensive architecture documentation for eHailing Platform",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    // Improve compatibility with the upcoming Docusaurus v4
    v4: true,
  },

  // Set the production url of your site here
  url: "https://rnrwallet.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/eWallet/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "RNRWallet",
  projectName: "eWallet",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/RNRWallet/eWallet/tree/main/docs/e-hailing",
          sidebarCollapsed: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/RNRWallet/eWallet/tree/main/docs/e-hailing",
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    metadata: [
      {
        name: "description",
        content:
          "Comprehensive architecture documentation for eHailing Platform - a modern e-hailing platform built with Kotlin and microservices architecture",
      },
      {
        name: "keywords",
        content:
          "microservices, architecture, documentation, distributed systems",
      },
      {
        name: "author",
        content: "RNRWallet",
      },
      {
        property: "og:title",
        content: "eHaling - Ride sharing Architecture Documentation",
      },
      {
        property: "og:description",
        content:
          "Explore the comprehensive architecture documentation for eHaling, a modern ride sharing platform built with Kotlin and microservices",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://rnrwallet.github.io/eWallet/docs/e-hailing/",
      },
    ],
    docs: {
      sidebar: {},
    },
    zoom: {
      selector: ".markdown :not(em) > img",
      config: {
        background: {
          light: "rgb(255, 255, 255)",
          dark: "rgb(50, 50, 50)",
        },
      },
    },
    navbar: {
      hideOnScroll: true,
      title: "eHailing",
      logo: {
        alt: "eHailing Logo",
        src: "img/logo.svg",
        width: 32,
        height: 32,
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "architectureSidebar",
          position: "left",
          label: "Architecture",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://ehailing.netlify.app/",
          label: "Event Catalog",
          position: "left",
        },
        {
          href: "https://github.com/RNRWallet/eWallet",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    // announcementBar: {
    //   id: "announcement-bar",
    //   content:
    //     '<a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/RNRWallet/eWallet/stargazers">⭐ Star Application on GitHub</a>',
    //   isCloseable: true,
    // },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Architecture",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Monitoring",
          items: [
            {
              label: "SonarQue",
              href: "https://sonarcloud.io/summary/overall?id=<ADD-ID-HERE>&branch=main",
            },
            {
              label: "Security",
              href: "https://github.com/RNRWallet/eWallet/security",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "/blog",
            // },
            {
              label: "EventCatalog",
              href: "https://ehailing.netlify.app/",
            },
            {
              label: "GitHub",
              href: "https://github.com/RNRWallet/eWallet",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} eHailing Project. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["kotlin", "java", "groovy", "yaml", "properties"],
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
};

export default config;
