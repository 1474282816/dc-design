import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'DC Design',
    nav: [
      {
        title: '',
        link: '/components/link-button',
      },
    ],
    socialLinks: {
      github: 'https://github.com/1474282816/dc-design',
    },
  },
});
