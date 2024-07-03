import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./tailwind-config.cjs";

const config: Config = {
  title: "@jmondi/oauth2-server",
  plugins: [tailwindPlugin],
  tagline:
    "Standards-Compliant OAuth 2.0 Server in TypeScript, Utilizing JWT and Proof Key for Code Exchange (PKCE)",
  favicon: "img/favicon.ico",
  url: "https://tsoauth2server.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
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
          editUrl: "https://github.com/jasonraimondi/ts-oauth2-server/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/jasonraimondi/ts-oauth2-server/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/oauth2-server-social-card.jpg",
    headTags: [
      {
        tagName: "script",
        attributes: {
          "data-domain": "tsoauth2server.com",
          src: "https://plausible.io/js/script.js",
          defer: "true",
        },
      },
    ],
    navbar: {
      title: "ts-oauth2-server",
      logo: {
        alt: "ts-oauth2-server Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          sidebarId: "mainSidebar",
          type: "docSidebar",
          label: "Getting Started",
          position: "right",
        },
        {
          href: "/docs/authorization_server/configuration/",
          label: "Config",
          position: "right",
        },
        {
          href: "https://github.com/jasonraimondi/ts-oauth2-server",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://www.npmjs.com/package/@jmondi/oauth2-server",
          label: "NPM",
          position: "right",
        },
        {
          href: "https://jsr.io/@jmondi/oauth2-server",
          label: "JSR",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `© ${new Date().getFullYear()} Jason Raimondi`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
