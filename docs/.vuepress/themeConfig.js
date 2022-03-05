const path = require('path');
const rootpath = path.dirname(__dirname);
const utils = require('./utils/index');
const filehelper = require('./utils/initPage.js');

const themeConfig = {
    nav: [
        {
            text: 'Resume',
            link: '/Resume/myResume/',
        },
        {
            text: 'Blogs',
            link: '/Blog/blog1',
        },
        {
            text: 'Others',
            items: [
                { text: '与我联系', link: '/Other/contact/' },
            ]
        },
        {
            text: 'Github',
            link: 'https://github.com/qiwei-123?tab=repositories',
            target: '_blank'
        }
    ],
    markdown: {

    },
    sidebar: [
        {
            title: 'Resume',
            path: '/Resume/myResume/',
            sidebarDepth: 1,
            children: [
                ['/Resume/myResume/', '个人简历']
            ]
        },
        {
            title: 'Projects',
            path: '/Projects/project1/',
            sidebarDepth: 1,
            children: [
                ['/Projects/project1/', 'project1']
            ]
        },
        {
            title: 'Blogs',
            path: '/Blog/',
            sidebarDepth: 1,
            children: [
                ['/Blog/blog1/', 'blog1'],
                ['/Blog/HTML/', 'HTML'],
                ['/Blog/blog3/', 'blog3'],
            ]
        },
        {
            title: 'NBA',
            path: '/NBA/',
            sidebarDepth: 1,
            children: [
                ['/NBA/Kobe/', 'Kobe'],
                ['/NBA/Curry/', 'Curry'],
                ['/NBA/Jordan/', 'Jordan'],
            ]
        },

    ],
    searchMaxSuggestions: 10,
};

module.exports = themeConfig;