const dayjs = require('dayjs');

module.exports = {
  title: 'Anyca代替サービスのご案内',
  description: 'Anycaサービス終了に伴う貸出情報まとめ',
  base: '/anyca_manual/',
  themeConfig: {
    domain: 'https://bamiyanapp.github.io/anyca_manual',
    repo: 'bamiyanapp/anyca_manual',
    repoLabel: 'GitHub',
    sidebar: ['/guideline', 'outlander', 'i3', 'process','transaction-location'],
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: {
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        return dayjs(timestamp).format('YYYY/MM/DD');
      },
    },
    '@vuepress/medium-zoom': {},
    '@vuepress/back-to-top': {},
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true,
    },
    seo: {
      description: () => 'Anycaサービス終了に伴う貸出情報',
    },
  },
  head: [['link', { rel: 'manifest', href: '/manifest.json' }]],
};
