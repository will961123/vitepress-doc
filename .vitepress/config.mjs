import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'
import { resolve } from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'wpf 的在线文档',
  description: '在线文档',
  lang: 'zh-CN',
  base: '/vitepress-doc/',
  srcDir: 'src',
  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, '../src')
      }
    }
  },
  head: [
    [
      'link',
      { rel: 'icon', href: 'images/index/logo.svg' }
    ]
  ],
  lastUpdated: true,
  markdown: {
    image: {
      lazyLoading: true
    },
    container: {
      infoLabel: '提示',
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      detailsLabel: '详细信息'
    },
    lineNumbers: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/index/logo.svg',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '未找到结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/官方示例/Markdown 扩展示例' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/will961123/vitepress-doc' }
    ],
    sidebar: {
      '/': generateSidebar({
        documentRootPath: '/src',
        collapsed: false
      })
    },
    sidebarMenuLabel: '目录',
    outline: {
      label: '文章大纲',
      level: 'deep'
    },
    returnToTopLabel: '返回顶部',
    editLink: {
      pattern: 'https://github.com/will961123/vitepress-doc/edit/main/src/:path',
      text: '在GitHub编辑本页'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        // 可选值full、long、medium、short
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    footer: {
      message: '本站总访问量 <span id="busuanzi_value_site_pv">--</span> 次',
      copyright: 'Released under the MIT License. Copyright© 2024 wpf'
    }
  }
})
