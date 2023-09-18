// 注意: base的值为github仓库的名称(/不能少)
module.exports = {
  base: "/" /* 基础虚拟路径 */,
  dest: "dist" /* 打包文件基础路径, 在命令所在目录下 */,
  title: "DATA", // 标题
  description: "记录一些我遇到的技术", // 标题下的描述
  // 指定网页head图标
  level: [1, 2, 3],
  head: [
    [
      "link",
      { rel: "icon", href: `/icons/favicon.ico` },
    ],
  ],
  themeConfig: {
    // 主题配置
    logo: "/images/logo.jpeg",
    sidebarDepth: 0,
    searchMaxSuggestions: 10,
    nav: [
      // 头部导航
      { text: "webpack", link: "https://www.webpackjs.com/" },
      { text: "React", link: "https://react.dev/" },
      { text: "Vue", link: "https://vue3js.cn/" }
    ],
    sidebar: [
      // 左侧导航
      {
        title: "CSS",
        collapsable: true,
        children: [
          {
            title: "CSS1",
            path: "../pages/Front/CSS/CSS1",
          },
          {
            title: "CSS2",
            path: "../pages/Front/CSS/CSS2",
          },
        ],
      },
      {
        title: "JavaScript",
        collapsable: true,
        children: [
          {
            title: "模块化",
            path: "../pages/Front/JS/modules",
          },
          {
            title: "BOM",
            path: "../pages/Front/JS/BOM",
          },
          {
            title: "JS的继承方式",
            path: "../pages/Front/JS/extend",
          },
          {
            title: "JS核心原理相等",
            path: "../pages/Front/JS/JavaScript核心原理相等操作",
          },
          {
            title: "JS核心原理原型",
            path: "../pages/Front/JS/JavaScript核心原理之原型",
          },
          {
            title: "JS原型函数",
            path: "../pages/Front/JS/JavaScript原生函数",
          },
          {
            title: "JS基础",
            path: "../pages/Front/JS/JavaScript基础",
          },
          {
            title: "This",
            path: "../pages/Front/JS/This",
          },
          {
            title: "JSON",
            path: "../pages/Front/JS/JSON",
          },
        ],
      },
      {
        title: "TypeScript",
        collapsable: true,
        path: "../pages/Front/TS/ts",
      },
      {
        title: "MySQL",
        collapsable: true,
        path: "../pages/MySQL/note",
      },
      {
        title: "Git",
        collapsable: true,
        path: "../pages/Git/git",
      },
      {
        title: "Docker",
        collapsable: true,
        path: "../pages/Docker/note",
      },
      {
        title: "Webpack",
        collapsable: true,
        children: [
          {
            title: "基本使用",
            path: "../pages/Webpack/webpack",
          },
          {
            title: '源码分析',
            path: '../pages/Webpack/note'
          },
          {
            title: '自定义插件(plugin)',
            path: '../pages/Webpack/plugin'
          },
          {
            title: '自定义插件(loader)',
            path: '../pages/Webpack/loader'
          },
          {
            title: 'work',
            path: '../pages/Webpack/work'
          },
        ],
      },
      {
        title: "Axios",
        collapsable: true,
        path: "../pages/Axios/note",
      },
      {
        title: "Promise",
        collapsable: true,
        path: "../pages/Promise/note",
      },
      {
        title: "网络",
        collapsable: true,
        path: "../pages/Http/note",
      },
      { 
        title: "Node", 
        collapsable: true,
        children: [
          {
            title: "Node由浅入深",
            path: "../pages/Node/node",
          },
          {
            title: 'Express搭建后端服务',
            path: '../pages/Node/server'
          },
        ],
      },
      { 
        title: "Nginx", 
        collapsable: true,
        children: [
          {
            title: "命令",
            path: "../pages/Nginx/common",
          },
          {
            title: '基本操作',
            path: '../pages/Nginx/note'
          },
        ],
      },
      { title: "Python", path: "../pages/Python/pythonBase" },
      { title: "Npm", path: "../pages/Npm/note" },
      { title: "Umi", path: "../pages/umi/note" },
      {
        title: "GitLab",
        collapsable: true,
        children: [
          {
            title: 'Gitlab基础',
            path: '../pages/Gitlab/CICD/note'
          },
          {
            title: 'GitlabRunner',
            path: '../pages/Gitlab/Runner/note'
          },
          {
            title: 'Gitlab管道',
            path: '../pages/Gitlab/Pipeline/note'
          },
          {
            title: 'Docker安装Gitlab',
            path: '../pages/Gitlab/dockerInstallGitlab'
          },
          {
            title: '搭建私有Gitlab',
            path: '../pages/Gitlab/note'
          },
        ],
      },
      {
        title: "Vue",
        collapsable: true,
        children: [
          {
            title: "Vue2",
            path: "../pages/Vue/vue2",
          },
          {
            title: "Vue3",
            path: "../pages/Vue/vue3",
          },
          {
            title: "vue-router",
            path: "../pages/Vue/vueRouter",
          },
          {
            title: "vuex",
            path: "../pages/Vue/vuex",
          },
        ],
      },
      {
        title: 'Pm2',
        collapsable: true,
        children: [
          {
            title: "安装",
            path: "../pages/Pm2/install"
          },
          {
            title: "基础命令",
            path: "../pages/Pm2/note"
          },
          {
            title: "项目进阶",
            path: "../pages/Pm2/senior"
          },
        ]
      },
      {
        title: "React",
        collapsable: true,
        children: [
          {
            title: "React 学习之初",
            path: "../pages/React/before",
          },
          {
            title: "React Hooks",
            path: "../pages/React/hooks",
          },
          {
            title: "React 类",
            path: "../pages/React/class",
          },
          {
            title: "React Redux",
            path: "../pages/React/redux",
          },
          {
            title: "React 事件",
            path: "../pages/React/event",
          },
          {
            title: "React 学习之后",
            path: "../pages/React/after",
          }
        ],
      },
      {
        title: "Swagger",
        collapsable: true,
        path: '../pages/Swagger/note',
      },
      {
        title: "小程序",
        collapsable: true,
        path: '../pages/SmallApp/note',
      },
      {
        title: "Circleci",
        path: '../pages/Circleci/note',
      },
      {
        title: "Chrome",
        collapsable: true,
        children: [
          {
            title: "浏览器原理",
            path: "../pages/Chrome/note",
          },
          {
            title: "浏览器原理基本知识",
            path: "../pages/Chrome/note2",
          },
        ],
      },
      {
        title: "Linux",
        collapsable: true,
        children: [
          {
            title: "Linux常用命令",
            path: "../pages/Linux/note",
          },
          {
            title: "Linux错误记录",
            path: "../pages/Linux/error",
          },
        ],
      },
      {
        title: "其他",
        children: [
          {
            title: "other",
            path: "../pages/Others/note",
          }
        ]
      },
      {
        title: "计算机基础",
        children: [
          {
            title: "other",
            path: "../pages/computer/note",
          }
        ]
      }
    ],
    lastUpdated: '最后更新时间',
  },
  plugins: [
    '@vuepress/plugin-nprogress',
    [
      '@vuepress/blog',
      {
        directories: [
          {
            // 当前分类的唯一 ID
            id: 'post',
            // 目标文件夹
            dirname: '_posts',
            // `entry page` (或者 `list page`) 的路径
            path: '/post',
          },
        ],
      },
    ],
  ],

};
