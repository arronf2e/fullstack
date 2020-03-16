module.exports = {
  title: "On The Road",
  description: "Front End Blog",
  theme: 'antdocs',
  themeConfig: {
    logo: "https://avatars1.githubusercontent.com/u/15780058?s=460&v=4",
    nav: [
      { text: "首页", link: "/" },
      { text: "关于", link: "/about" },
      { text: 'Github', link: 'https://github.com/arronf2e' },
    ],
    sidebar: [
      {
        title: 'HTML',  // 必要的
        path: '/posts/html/',      // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {
            title: 'doctype',
            path: '/posts/html/doctype',
          },
          {
            title: 'html5新元素',
            path: '/posts/html/new-elements',
          },
          {
            title: 'video',
            path: '/posts/html/video',
          },
          {
            title: 'audio',
            path: '/posts/html/audio',
          },
          {
            title: 'drag拖放',
            path: '/posts/html/drag',
          },
          {
            title: 'canvas',
            path: '/posts/html/canvas',
          },
          {
            title: '本地存储',
            path: '/posts/html/storage',
          },
          {
            title: 'cookie与session的区别',
            path: '/posts/html/cookie-session',
          },
          {
            title: 'Progressive web app',
            path: '/posts/html/pwa',
          },
          {
            title: 'iframe',
            path: '/posts/html/iframe',
          }
        ]
      },
      {
        title: 'CSS', 
        path: '/posts/css/', 
        collapsable: true,
        sidebarDepth: 1, 
        children: [
          {
            title: 'BFC',
            path: '/posts/css/bfc',
          },
          {
            title: '水平垂直居中',
            path: '/posts/css/center',
          },
          {
            title: '隐藏元素',
            path: '/posts/css/hidden',
          }
        ]
      },
      {
        title: 'JavaScript', 
        path: '/posts/javascript/', 
        collapsable: true,
        sidebarDepth: 1, 
        children: [
          {
            title: '数据类型',
            path: '/posts/javascript/data-type',
          },
          {
            title: '相等',
            path: '/posts/javascript/equals',
          },
          {
            title: '防抖与节流',
            path: '/posts/javascript/throttle-debounce',
          },
          {
            title: 'dom操作',
            path: '/posts/javascript/dom',
          },
          {
            title: 'new',
            path: '/posts/javascript/new',
          },
          {
            title: 'apply-call-bind',
            path: '/posts/javascript/apply-call-bind',
          },
          {
            title: '事件循环',
            path: '/posts/javascript/eventloop',
          },
          {
            title: 'js格式化金额千分位',
            path: '/posts/javascript/format-money',
          },
          {
            title: '数组去重',
            path: '/posts/javascript/array-remove-repeat',
          },
          {
            title: '垃圾回收',
            path: '/posts/javascript/gc',
          },
          {
            title: '细谈arguments',
            path: '/posts/javascript/arguments',
          },
          {
            title: '细谈this',
            path: '/posts/javascript/this',
          },
          {
            title: 'closure闭包',
            path: '/posts/javascript/closure',
          },
          {
            title: '函数柯里化',
            path: '/posts/javascript/currying',
          },
          {
            title: '正则表达式',
            path: '/posts/javascript/regxrp',
          },
          {
            title: 'typeof 与 instance 的区别',
            path: '/posts/javascript/typeof-instanceof',
          },
          {
            title: '原型与原型链',
            path: '/posts/javascript/prototype',
          },
          {
            title: '继承',
            path: '/posts/javascript/inherit',
          },
          {
            title: 'isNaN与Number.isNaN的区别',
            path: '/posts/javascript/isNaN-Number.isNaN',
          },
          {
            title: 'Object.freeze',
            path: '/posts/javascript/object-freeze',
          },
          {
            title: '对象的遍历',
            path: '/posts/javascript/object-loop',
          }
        ]
      },
      {
        title: 'ES6',
        path: '/posts/es6/', 
        collapsable: true,
        sidebarDepth: 1, 
      },
      {
        title: 'Vue', 
        path: '/posts/vue/', 
        collapsable: true,
        sidebarDepth: 1, 
        children: [
          {
            title: '$nextTick',
            path: '/posts/vue/$nextTick',
          }
        ]
      },
      {
        title: 'React', 
        path: '/posts/react/', 
        collapsable: true,
        sidebarDepth: 1, 
        children: [
          {
            title: 'dom diff',
            path: '/posts/react/dom-diff',
          },
          {
            title: 'React.children',
            path: '/posts/react/children',
          },
          {
            title: 'context',
            path: '/posts/react/context',
          },
          {
            title: 'ref',
            path: '/posts/react/ref',
          },
          {
            title: 'ConcurrentMode',
            path: '/posts/react/concurrent-mode',
          },
          {
            title: 'ReactElement',
            path: '/posts/react/react-element',
          },
          {
            title: '编译jsx',
            path: '/posts/react/jsx-to-javascript',
          },
          {
            title: 'hooks',
            path: '/posts/react/hooks',
          },
          {
            title: 'suspense、lazy',
            path: '/posts/react/suspense-lazy',
          }
        ]
      },
      {
        title: 'React-Native', 
        path: '/posts/react-native/', 
        collapsable: true, 
        sidebarDepth: 1, 
        children: [
          {
            title: '版本发布与更新',
            path: '/posts/react-native/version',
          },
          {
            title: '开屏图',
            path: '/posts/react-native/splash',
          },
          {
            title: '视频播放',
            path: '/posts/react-native/video',
          },
          {
            title: '第三方登录与支付',
            path: '/posts/react-native/wechat-alipay',
          }
        ]
      },
      {
        title: 'HTTP',  // 必要的
        path: '/posts/http/',      // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {
            title: 'TCP三次握手',
            path: '/posts/http/tcp-3-way-handshake'
          },
          {
            title: 'https',
            path: '/posts/http/https'
          },
          {
            title: 'http2',
            path: '/posts/http/http2'
          },
          {
            title: '跨域',
            path: '/posts/http/cors'
          },
          {
            title: 'websocket',
            path: '/posts/http/websocket'
          }
        ]
      },
      {
        title: 'Webpack', 
        path: '/posts/webpack/', 
        collapsable: true,
        sidebarDepth: 1, 
        children: [
          {
            title: 'devServer',
            path: '/posts/webpack/dev-server',
          },
          {
            title: 'dynamicImport',
            path: '/posts/webpack/dynamic-import',
          },
          {
            title: '插件',
            path: '/posts/webpack/plugin',
          },
          {
            title: 'thread-loader',
            path: '/posts/webpack/thread-loader',
          }
        ]
      },
      {
        title: 'Git',
        path: '/posts/git/', 
        collapsable: true,
        sidebarDepth: 1, 
      },
    ]
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-160035379-1'
      }
    ]
  ]
};
