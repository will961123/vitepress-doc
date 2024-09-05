<!--
 * @Author: wupf wupf@bjhzwq.com
 * @Date: 2024-09-05 15:12:05
 * @LastEditors: wupf wupf@bjhzwq.com
 * @LastEditTime: 2024-09-05 16:56:04
 * @FilePath: src/components/toc.vue
 * @Description: 文章目录
 -->

<script>
import { defineComponent, h } from 'vue';
import { useData } from 'vitepress';

export default defineComponent({
  setup() {
    const { theme, page } = useData();
    const path = page.value?.filePath?.replace(/\/index\.md$/, '');
    const sidebar = theme.value?.sidebar;
    const toc = sidebar[`/${path}`];

    const renderTree = nodes => {
      return nodes.map(node => {
        return h('ul', { key: node.id }, [
          h(
            'li',
            h(
              node.link ? 'a' : 'span',
              { href: node.link?.slice(1) },
              node.text
            )
          ),
          node.items ? renderTree(node.items) : null
        ]);
      });
    };

    return () => {
      return h('div', renderTree(toc.items || []));
    };
  }
});
</script>

<template></template>
