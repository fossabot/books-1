window.$docsify = {
        name: 'Xhemj文档中心',
        repo: '',
        loadSidebar: true,
        loadNavbar: true,
        coverpage: true,
        subMaxLevel: 2,
        auto2top: true,
        relativePath: false,
        themeColor: '#c30aff',
        mergeNavbar: true,
        formatUpdated: '{YYYY}/{MM}/{DD} {HH}:{mm}',
        externalLinkTarget: '_blank',
        notFoundPage: true,
        //搜索插件
        search: 'auto',
        search: {
            maxAge: 86400000,
            paths: '/',
            placeholder: '搜索...',
            noData: '未找到结果，换个搜索词试试？',
            namespace: 'XhemjBlog',
        },
        //底部上下篇插件
        pagination: {
            previousText: '上一篇',
            nextText: '下一篇',
            crossChapter: true,
            crossChapterText: true,
        },
//        //docsify黑暗模式插件
//        dark: {
//            background: "#1c2022",
//            toggleBtnBg: "#34495e",
//            textColor: "#b4b4b4"
//        },
//        light: {
//            background: "white",
//            toggleBtnBg: "var(--theme-color)",
//            textColor: "var(--theme-color)"
//        },
        //底部公共footer插件
         footer: {
            copy: '<style>.share{padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;text-align: center;}</style><div class="share" id="social-share"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/css/share.min.css"><div class="social-share"></div><script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/js/social-share.min.js"></script><script>var cfg = {sites: ['qq', 'qzone', 'wechat', 'weibo', 'facebook', 'twitter'],image: "https://xhemj.gitee.io/logo.png",wechatQrcodeTitle: "分享",wechatQrcodeHelper: "使用微信扫一扫分享"}</script><script>socialShare('.social-share', cfg);</script></div>'
            auth: '<strong>BY: X H E M J</strong></br><strong>"这只是Xhemj的文档中心而已，也没有什么别的！"</strong><div id="cc-myssl-id"><a href="https://myssl.com/xhemj.gitee.io?from=mysslid" target="_blank"><img src="https://static.myssl.com/res/images/myssl-id3.png" alt="" style="max-height:50px;display:block;margin:0 auto"></a></br></div><strong>© 2020 Xhemj</strong>&nbsp;|&nbsp;<a href="/books" target="_blank">官网</a>&nbsp|&nbsp;<a href="https://xhemj.gitee.io/oneQRCodeforPay/" target="_blank">赞助本网站</a>&nbsp|&nbsp;<a href="https://gitee.com/xhemj/books/" target="_blank">Gitee</a>&nbsp|&nbsp;<a href="mailto:xhemj2680@163.com" target="_blank">联系我</a></br><img src="https://xhemj.gitee.io/logo.png" width="50" height="50">',
            pre: '</br>',
            style:'text-align: center;'
        },
        remoteMarkdown: {
    tag: 'md',
  },
    }
