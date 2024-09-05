// https://vitepress.dev/guide/custom-theme
import { h, nextTick, watch } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { inBrowser } from 'vitepress';
import busuanzi from 'busuanzi.pure.js';
import mediumZoom from 'medium-zoom';
import NProgress from 'nprogress';
import Confetti from '@/components/confetti.vue';
import ArticleMetadata from '@/components/article-metadata.vue';
import Toc from '@/components/toc.vue';
import 'nprogress/nprogress.css';
import 'virtual:group-icons.css';
import './style.css';

NProgress.configure({
  showSpinner: false // 是否显示加载ico
});

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    if (inBrowser) {
      app.component('Confetti', Confetti);
      app.component('ArticleMetadata', ArticleMetadata);
      app.component('Toc', Toc);

      watch(router.route, () => {
        NProgress.start();
      });

      router.onAfterRouteChanged = () => {
        busuanzi.fetch();
        NProgress.done();
        nextTick(() =>
          mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
        );
      };
    }
  }
};
