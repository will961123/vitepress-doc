// https://vitepress.dev/guide/custom-theme
import { h, nextTick, onMounted, watch } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { inBrowser, useRoute } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import mediumZoom from 'medium-zoom'
import Confetti from '@/components/confetti.vue'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  setup () {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  },
  enhanceApp ({ app, router, siteData }) {
    if (inBrowser) {
      app.component('Confetti', Confetti)
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
  }
}
