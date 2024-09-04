import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress-doc/",
  title: 'wpf 的在线文档',
  description: '在线文档',
  head: [['link', { rel: 'icon', href: '/images/index/logo.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/index/logo.svg',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '未找到结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '文档示例', link: '/markdown-examples' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    sidebar: [
      {
        text: '文档示例',
        items: [
          { text: 'markdown 示例', link: '/markdown-examples' },
          { text: 'api 示例', link: '/api-examples' },
        ],
      },
      {
        text: '文档示例2',
        items: [
          { text: 'markdown 示例', link: '/markdown-examples' },
          { text: 'api 示例', link: '/api-examples' },
        ],
      },
    ],

    outline: {
      label: '文章目录',
      level: 'deep',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright© 2024 wpf',
    },

  },
})
