<!--
 * @Author: wupf wupf@bjhzwq.com
 * @Date: 2024-09-05 15:12:05
 * @LastEditors: wupf wupf@bjhzwq.com
 * @LastEditTime: 2024-09-05 19:12:42
 * @FilePath: src/components/toc.vue
 * @Description: 文章目录
 -->

<script>
import { defineComponent, h } from 'vue';
import { useData, withBase } from 'vitepress';

export default defineComponent({
  setup() {
    const { theme, page } = useData();
    const path = page.value?.filePath?.replace(/\/index\.md$/, '');
    const sidebar = theme.value?.sidebar;
    const toc = sidebar[`/${path}`];

    const renderTree = nodes => {
      return nodes.map(node =>
        h('ul', { key: node.id }, [
          h(
            'li',
            h(
              node.link ? 'a' : 'span',
              node.link ? { href: withBase(node.link) } : null,
              node.text
            )
          ),
          node.items ? renderTree(node.items) : null
        ])
      );
    };

    return () => h('div', renderTree(toc.items || []));
  }
});
</script>

<template></template>
