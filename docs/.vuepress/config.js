const sidebar = {
  vue: [
    {
      title: 'Vue秘籍',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'vue/guide',
        'vue/vue-render',
      ]
    },
    {
      title: 'Vue3新特性',
      collapsable: false,
      children: [
        'vue3.x/abstract',
        'vue3.x/reactivity',
        'vue3.x/features',
        'vue3.x/performance',
      ]
    }
  ],
  typescript: [
    {
      title: 'TypeScript基础',
      collapsable: false,
      children: [ 
         
      ]
    },
    {
      title: 'TypeScript进阶',
      collapsable: false,
      children: [
        
      ]
    },
  ]
};

module.exports = {
  base: '/docs/',
  title: '文档启动器',
  description: '我命由我不由天，学习吧少年',
  head: [
    ['link', {rel: 'icon', href: '/logo.png'}],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link',{rel: 'apple-touch-icon',href: '/images/icons/apple-icon-152x152.png'}],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/ms-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  dest: 'docs/.vuepress/dist',
  port: 9999,
  themeConfig: {
    logo: '/logo.png',
    sidebarDepth: 2,
    lastUpdated: '最近更新',
    smoothScroll: true,
    nav: [
      {text: '主页', link: '/'},
      {text: 'Vue', link: '/vue/'},
      {text: 'TS', link: '/typescript/'},
      {
        text: 'Gog地址',
        items: [
          {text: 'Gog地址', link: 'http://mobileapi.gree.com:3000/180496'},
        ]
      }
    ],
    sidebar: {
        '/vue/': sidebar.vue,
        '/typescript/': sidebar.typescript
      }
  },
  markdown: {},
  plugins: [
    ['@vuepress/back-to-top',true],
    ['@vuepress/medium-zoom',true],
    ['vuepress-plugin-reading-time'],
    ['reading-progress'],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    [
      'vuepress-plugin-right-anchor',
      {
        showDepth: 1,
        ignore: [
          '/',
          '/vue/'
        ],
        expand: {
          default: true,
          trigger: 'hover'
        },
        customClass: 'right-anchor',
        disableGlobalUI: false,
      }
    ]
  ],
};
