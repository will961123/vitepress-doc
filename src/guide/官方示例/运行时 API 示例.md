# 运行时 API 示例

本页面展示了VitePress提供的部分运行时API的使用方法。

`useData()` API 可用于访问当前页面的站点、主题和页面数据。它适用于 .md 和 .vue 文件：

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## 结果

### 主题数据

<pre>{{ theme }}</pre>

### 页面数据

<pre>{{ page }}</pre>

### 页面 Frontmatter

<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 结果

### 主题数据

::: details 展开

<pre>{{ theme }}</pre>

:::

### 页面数据

::: details 展开

<pre>{{ page }}</pre>

:::

### 页面 Frontmatter

::: details 展开

<pre>{{ frontmatter }}</pre>

:::

## 更多

查看文档以获取 [完整的运行时 API](https://vitepress.dev/reference/runtime-api#usedata) 列表。
