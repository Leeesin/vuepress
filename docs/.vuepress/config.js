module.exports = {
    title: 'vuepress',  // 设置网站标题
    description: 'vuepress',
    dest: 'docs/.vuepress/dist',    // 设置输出目录
    base: '/vuepress/', // 项目名称
    repo: 'https://leeesin/github.io/vuepress', // 添加 github 链接
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        repo: 'Leeesin/vuepress',
        repoLabel: '查看源码',
        docsBranch: 'master/docs',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新', // string | boolean
        nav: [
            {
                text: 'nav导航',
                items: [
                    { text: 'vuepress官方文档', link: 'https://vuepress.vuejs.org/zh/guide/' },
                ]
            },
        ],
        sidebar: [
            {
                title: '示例',
                collapsable: false,
                children: [
                    '/demo.md'
                ]
            },
        ],
        sidebarDepth: 2
    },

}