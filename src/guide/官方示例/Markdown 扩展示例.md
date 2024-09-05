# Markdown 扩展示例

本页展示了VitePress提供的部分内置 Markdown 扩展功能。

## 语法高亮显示

VitePress 通过 [Shiki](https://github.com/shikijs/shiki) 提供语法高亮功能，并额外支持行高亮等特性：

### 行高亮

**输入**

````md
```js{3-5,7}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js{3-5,7}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

### 聚焦代码

**输入**

````md
```js
export default {
  data () {
    return { // [!code focus:3]
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js
export default {
  data () {
    return { // [!code focus:3]
      msg: 'Highlighted!'
    }
  }
}
```

### diff差异

**输入**

````md
```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code --]
      msg: '高亮代码!' // [!code ++]
    }
  }
}
```
````

**输出**

```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code --]
      msg: '高亮代码!' // [!code ++]
    }
  }
}
```

### 代码块组

**输入**

````md
::: code-group

```sh [npm]
#查询npm版本
npm -v
```

```sh [yarn]
#查询yarn版本
yarn -v
```

:::
````

**输出**
::: code-group

```sh [npm]
#查询npm版本
npm -v
```

```sh [yarn]
#查询yarn版本
yarn -v
```

:::

## 自定义容器

**输入**

```md
::: info
强调用户在快速浏览文档时也不应忽略的重要信息。
:::

::: tip
有助于用户更顺利达成目标的建议性信息。
:::

::: warning
因为可能存在风险，所以需要用户立即关注的关键内容。
:::

::: danger
行为可能带来的负面影响。
:::

::: details
This is a details block.
:::
```

**输出**

::: info
强调用户在快速浏览文档时也不应忽略的重要信息。
:::

::: tip
有助于用户更顺利达成目标的建议性信息。
:::

::: warning
因为可能存在风险，所以需要用户立即关注的关键内容。
:::

::: danger
行为可能带来的负面影响。
:::

::: details
This is a details block.
:::

## Badge 徽章组件

**输入**

```md
VitePress <Badge type="info" text="default" />
VitePress <Badge type="tip" text="^1.9.0" />
VitePress <Badge type="warning" text="beta" />
VitePress <Badge type="danger" text="caution" />
```

**输出**

VitePress <Badge type="info" text="default" />
VitePress <Badge type="tip" text="^1.9.0" />
VitePress <Badge type="warning" text="beta" />
VitePress <Badge type="danger" text="caution" />

## 更多

查看文档以获取 [完整的 Markdown 扩展](https://vitepress.dev/guide/markdown) 列表。
