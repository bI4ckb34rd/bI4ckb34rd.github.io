export const config = {
  nav: [
    { text: "Home", link: "/en/" },
    { text: "Guides", link: "/en/guides/" },
    { text: "Blog", link: "/en/blog/" },
  ],
  sidebar: [
    {
      text: "VPS Setup",
      items: [
        {
          text: "Setting Up VPS Firewall Using UFW",
          link: "/en/guides/ufw.md",
        },
      ],
    },
  ],
  footer: {
    message:
      'Released under the <a href="https://github.com/bI4ckb34rd/bI4ckb34rd.github.io/blob/main/LICENSE">MIT License</a>',
    copyright: "Copyright © 2025-present CodeKalak",
  },
  editLink: {
    pattern:
      "https://github.com/bI4ckb34rd/bI4ckb34rd.github.io/edit/main/:path",
    text: "Edit and improve this page on GitHub",
  },
};

export default config;
