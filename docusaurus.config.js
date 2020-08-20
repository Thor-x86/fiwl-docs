module.exports = {
  title: "FIWL",
  tagline: "[Flexible Interactive Web Layout]",
  url: "https://Thor-x86.github.io/fiwl-docs",
  baseUrl: "/fiwl-docs/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.svg",
  organizationName: "fiwl.org",
  projectName: "fiwl-js",
  themeConfig: {
    navbar: {
      title: "FIWL [Pre-Alpha]",
      logo: {
        alt: "FIWL Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/intro/how_to_install",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        /*{ to: "blog", label: "Blog", position: "left" },*/
        {
          href: "https://github.com/Thor-x86/fiwl-js",
          label: "GitHub",
          position: "right",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "docs/intro/what_is_fiwl",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Thor-x86/fiwl-docs/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/Thor-x86/fiwl-docs/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
