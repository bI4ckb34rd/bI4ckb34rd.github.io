import { DefaultTheme, LocaleSpecificConfig, defineConfig } from "vitepress";
import englishThemeConfig from "../en/config";
import persianThemeConfig from "../fa/config";

type ThemeConfig = LocaleSpecificConfig<DefaultTheme.Config> & {
  label: string;
  link?: string;
};

const persianLang: ThemeConfig = {
  title: "کدکلک",
  description: "منبع آموزشی باز و مفید برای علاقه‌مندان به تکنولوژی",
  label: "فارسی",
  lang: "fa",
  dir: "rtl",
  link: "/",
  themeConfig: persianThemeConfig,
};

const englishLang: ThemeConfig = {
  title: "CodeKalak",
  description:
    "An open-source and useful educational resource for technology enthusiasts",
  label: "English",
  lang: "en",
  dir: "ltr",
  link: "/",
  themeConfig: englishThemeConfig,
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  lang: "fa",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-96x96.png",
        sizes: "96x96",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
    ],
    [
      "link",
      {
        rel: "shortcut icon",
        href: "/favicon.ico",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-title",
        content: "CodeKalak",
      },
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
  ],
  locales: {
    fa: { ...persianLang, link: "/fa/" },
    en: { ...englishLang, link: "/en/" },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    i18nRouting: true,
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/bI4ckb34rd/bI4ckb34rd.github.io",
      },
    ],
    search: {
      provider: "local",
    },
  },
  sitemap: {
    hostname: "https://bI4ckb34rd.github.io",
  },
});
