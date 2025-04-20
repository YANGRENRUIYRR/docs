import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "YangRenRui的小站|帮助文档",
  description: "yangrenrui",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '快速开始', link: '/quick-start-1' },
      { text: '自行部署', link: '/deploy-1' }
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '主页', link: '/quick-start-1' },
          { text: '博客', link: '/quick-start-2' },
          { text: '今日热榜', link: '/quick-start-3' },
          { text: '计时器-电脑版', link: '/quick-start-4' },
          { text: '站点监测', link: '/quick-start-5' },
          { text: '计时器-手机版', link: '/quick-start-6' },
          { text: 'AtRating', link: '/quick-start-7' },
          { text: 'CfRating', link: '/quick-start-8' },
          { text: 'HdRating', link: '/quick-start-9' },
          { text: 'LgBadge', link: '/quick-start-10' },
          { text: 'ExHdRating', link: '/quick-start-11' },
          { text: 'Evaluator', link: '/quick-start-12' },
          { text: 'Smart - Hydro', link: '/quick-start-13' },
          { text: '报时器', link: '/quick-start-14' },
          { text: 'AI', link: '/quick-start-15' },
          { text: '图床', link: '/quick-start-16' },
        ]
      },
      {
        text: '自行部署',
        items: [
          { text: '部署 主页', link: '/deploy-1' },
          { text: '部署 博客', link: '/deploy-2' },
          { text: '部署 今日热榜', link: '/deploy-3' },
          { text: '部署 计时器-电脑版', link: '/deploy-4' },
          { text: '部署 站点监测', link: '/deploy-5' },
          { text: '部署 计时器-手机版', link: '/deploy-6' },
          { text: '部署 AtRating', link: '/deploy-7' },
          { text: '部署 今日热榜API', link: '/deploy-8' },
          { text: '部署 CfRating', link: '/deploy-9' },
          { text: '部署 HdRating', link: '/deploy-10' },
          { text: '部署 LgBadge', link: '/deploy-11' },
          { text: '部署 ExHdRating', link: '/deploy-12' },
          { text: '部署 Evaluator', link: '/deploy-13' },
          { text: '部署 Smart - Hydro', link: '/deploy-14' },
          { text: '部署 报时器', link: '/deploy-15' },
          { text: '部署 AI', link: '/deploy-16' },
          { text: '部署 图床', link: '/deploy-17' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YANGRENRUIYRR' }
    ]
  }
})
