import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/dc-design',
  publicPath: '/dc-design/',
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
    prefersColor: { default: 'auto', switch: true },
  },
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
  },
});
