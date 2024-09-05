/**
 * @Author: wupf wupf@bjhzwq.com
 * @Date: 2024-09-05 14:49:02
 * @LastEditors: wupf wupf@bjhzwq.com
 * @LastEditTime: 2024-09-05 19:04:08
 * @FilePath: .vitepress/sidebar.js
 * @Description: 导航栏
 */

// import { generateSidebar } from 'vitepress-sidebar';

export default {
  // '/': generateSidebar({
  //   documentRootPath: '/src',
  //   collapsed: false
  // }),
  '/guide': {
    text: '指南',
    link: '/guide',
    items: [
      {
        text: '搭建指南',
        items: [
          {
            text: 'vitepress 搭建指南',
            link: '/guide/搭建指南/vitepress 搭建指南'
          }
        ]
      },
      {
        text: '官方示例',
        items: [
          {
            text: 'Markdown 扩展示例',
            link: '/guide/官方示例/Markdown 扩展示例'
          },
          { text: '运行时 API 示例', link: '/guide/官方示例/运行时 API 示例' }
        ]
      }
    ]
  },
  '/blog': {
    text: '文章',
    link: '/blog',
    items: [
      {
        text: 'jetbrains',
        collapsed: false,
        items: [
          {
            text: 'jetbrains 远程开发',
            link: '/blog/jetbrains/jetbrains 远程开发'
          }
        ]
      },
      {
        text: 'docker',
        collapsed: false,
        items: [
          {
            text: 'windows11 家庭版安装 Docker Desktop',
            link: '/blog/docker/windows11 家庭版安装 Docker Desktop'
          }
        ]
      },
      {
        text: 'linux',
        collapsed: false,
        items: [{ text: 'zsh 安装及美化', link: '/blog/linux/zsh 安装及美化' }]
      }
    ]
  }
};
