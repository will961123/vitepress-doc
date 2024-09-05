import { defineConfig } from 'vitepress';
import {
  groupIconMdPlugin,
  groupIconVitePlugin
} from 'vitepress-plugin-group-icons';
import { resolve } from 'path';
import sidebar from './sidebar.js';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'wpf 的在线文档',
  description: '在线文档',
  lang: 'zh-CN',
  base: '/vitepress-doc/',
  srcDir: 'src',
  head: [['link', { rel: 'icon', href: 'images/index/logo.svg' }]],
  lastUpdated: true,
  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, '../src')
      }
    },
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          sh: 'logos:bash-icon',
          js: 'logos:javascript',
          ts: 'logos:typescript-icon',
          md: 'logos:markdown',
          css: 'logos:css-3'
        }
      })
    ]
  },
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
    lineNumbers: true,
    // 组件插入h1标题下
    config: md => {
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options);
        if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`;
        return htmlResult;
      };

      md.use(groupIconMdPlugin);
    }
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
            displayDetails: '切换详细信息',
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
      { text: '文章', link: '/blog/' },
      { text: '指南', link: '/guide/' }
    ],
    lightModeSwitchTitle: '切换至亮色模式',
    darkModeSwitchTitle: '切换至深色模式',
    darkModeSwitchLabel: '切换明暗模式',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/will961123/vitepress-doc' }
    ],
    sidebar,
    sidebarMenuLabel: '目录',
    outline: {
      label: '文章大纲',
      level: 'deep'
    },
    returnToTopLabel: '返回顶部',
    editLink: {
      pattern:
        'https://github.com/will961123/vitepress-doc/edit/main/src/:path',
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
});
