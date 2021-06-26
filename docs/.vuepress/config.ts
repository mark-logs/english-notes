import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh',
  title: 'Liuxu\'s English NoteBook',
  description: 'Just playing around',
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ],
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    sidebar: [       
        {
            isGroup: true,
            text: '动词',
            children: ['/tense/present.md'],
        },
    ]
  },
})