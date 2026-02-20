import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Permguard",
  tagline:
    "Rethinking Authorization Beyond the Token. From Static Claims to Runtime Trust.",
  url: "https://docs.permguard.com/",
  baseUrl: "/",
  favicon: "img/favicon.ico",

  themeConfig: {
    algolia: {
      appId: "6F99UF9PLR",
      apiKey: "84f5f7152ae1a8dbf45a891e767d1831",
      indexName: "index",
      contextualSearch: true,
    },
    metadata: [
      {
        name: "description",
        content:
          "Rethinking Authorization Beyond the Token. From Static Claims to Runtime Trust. Secure, Auditable Decisions for Humans and Workloads. Boost SIEM & SOC with Decision Insights.",
      },
      { name: "theme-color", content: "#17181c" },
      { name: "msapplication-navbutton-color", content: "#17181c" },
      { name: "apple-mobile-web-app-status-bar-style", content: "#17181c" },
    ],

    // Replace with your project's social card
    image: "img/permguard-social-card.jpg",
    colorMode: {
      defaultMode: "dark", // Sets the initial and only color mode to dark
      disableSwitch: true, // Hides the dark/light mode switch in the navbar
      respectPrefersColorScheme: false, // Ignores the user's system preferences, enforcing 'dark' mode
    },
    navbar: {
      logo: {
        alt: "Permguard Logo",
        src: "images/header_logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "developers/getting-started/developers-intro-to-permguard",
          position: "left",
          label: "Developers",
        },
        {
          type: "doc",
          docId: "command-line/command-line",
          position: "left",
          label: "Command-Line",
        },
        {
          type: "doc",
          docId: "control-plane/control-plane",
          position: "left",
          label: "Control Plane",
        },
        {
          type: "doc",
          docId: "data-plane/data-plane",
          position: "left",
          label: "Data Plane",
        },
        {
          type: "doc",
          docId: "trust-plane/trust-plane",
          position: "left",
          label: "Trust Plane",
        },
        {
          type: "doc",
          docId: "learn/learn",
          position: "left",
          label: "Learn",
        },
        {
          type: "search",
          position: "right",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Permguard® is a registered trademark.`,
    },
    prism: {
      theme: prismThemes.vsDark,
      additionalLanguages: [
        "powershell",
        "bash",
        "go",
        "java",
        "csharp",
        "typescript",
        "python",
        "rust",
        "markup",
        // "json",
      ],
    },
  } satisfies Preset.ThemeConfig,

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "permguard", // Usually your GitHub org/user name.
  projectName: "permguard", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: ["./src/plugins/tailwind-config.js"],

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          includeCurrentVersion: false,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
};

export default config;
