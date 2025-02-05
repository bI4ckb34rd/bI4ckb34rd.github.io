import { DefaultTheme } from "vitepress";

export const config: DefaultTheme.Config = {
  nav: [
    { text: "خانه", link: "/fa/" },
    { text: "راهنمایی‌ها", link: "/fa/guides/" },
    { text: "بلاگ", link: "/fa/blog/" },
  ],
  sidebar: [],
  footer: {
    message:
      'Released under the <a href="https://github.com/bI4ckb34rd/bI4ckb34rd.github.io/blob/main/LICENSE">MIT License</a>',
    copyright: "Copyright © 2025-present CodeKalak",
  },
  editLink: {
    pattern:
      "https://github.com/bI4ckb34rd/bI4ckb34rd.github.io/edit/main/:path",
    text: "ویرایش و بهبود این صفحه در گیت‌هاب",
  },
  outlineTitle: "محتوای صفحه",
  returnToTopLabel: "بازگشت به بالا",
  docFooter: {
    prev: "صفحه قبل",
    next: "صفحه بعد",
  },
  sidebarMenuLabel: "منو",
};

export default config;
