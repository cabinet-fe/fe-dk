import { viteBundler, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import navbar from './config/navbar'
import sidebar from './config/sidebar'
import { version } from '../../package.json'

export default {
  lang: 'zh-CN',
  title: `fe-dk v${version}`,
  description: '前端开发工具包',

  bundler: viteBundler(),

  base: '/fe-dk/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/fe-dk/images/logo.png`
      }
    ]
  ],

  plugins: [searchPlugin({})],

  port: 2333,

  theme: defaultTheme({
    docsDir: 'docs',
    repo: 'https://github.com/cabinet-fe/fe-dk',
    logo: '/images/logo.png',

    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接'
    ],
    backToHome: '返回首页',
    lastUpdatedText: '上次更新于',
    contributorsText: '贡献者',
    editLink: false,
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏',
    navbar,
    sidebar
  })
}
