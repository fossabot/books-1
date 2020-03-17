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
        search: 'auto',
        search: {
            maxAge: 86400000,
            paths: 'auto',
            placeholder: '搜索...',
            noData: '未找到结果，换个搜索词试试？',
            namespace: 'XhemjBlog',
        },
        pagination: {
            previousText: '上一篇',
            nextText: '下一篇',
            crossChapter: true,
            crossChapterText: true,
        },
        dark: {
    background: "#1c2022",
    toggleBtnBg: "#b4b4b4",
    textColor: "#b4b4b4"
  },
  light: {
    background: "white",
    toggleBtnBg: "var(--theme-color)",
    textColor: "var(--theme-color)"
  }
    }
