module.exports = {
    "title": "jessenpan\'s blog",
    "description": "我思故我在",
    "dest": "public",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ],
        [
          "meta",
          {
              "name": "google-site-verification",
              "content": "F6dODSig1aD3qJdnHgutLfmlTHA-Pxj54I8HIdea_Ps"
          }
        ]
    ],
    "theme": "reco",
    "themeConfig": {
        "nav": [
            {
                "text": "主页",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "时光机",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text":"关于我",
                "icon":"reco-account",
                "link":"/views/other/about"
            },
            {
                "text": "联系我",
                "icon": "reco-message",
                "items": [
                    {
                        "text": "GitHub",
                        "link": "https://github.com/JessenPan",
                        "icon": "reco-github"
                    }
                    // {  后面有公众号了，再加链接
                    //     "text": "WeChat",
                    //     "link": "https://mp.weixin.qq.com/s/mXFqeUTegdvPliXknAAG_A",
                    //     "icon": "reco-wechat"
                    // }
                ]
            }
        ],
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "分类"
            },
            "tag": {
                "location": 3,
                "text": "标签"
            }
        },
        "friendLink": [
            {
                "title": "vuepress-theme-reco",
                "desc": "A simple and beautiful vuepress Blog & Doc theme.",
                "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                "link": "https://vuepress-theme-reco.recoluan.com"
            }
        ],
        // "logo": "/logo.png",  暂无logo
        "search": true,
        "searchMaxSuggestions": 10,
        "sidebar": "auto",
        // "lastUpdated": "Last Updated",
        "author": "jessenpan",
        "authorAvatar": "/avatar.jpeg",
        // "record": "xxxx",
        "startYear": "2016",
        "valineConfig": {
          "appId": 'BsVKs2p9pfUprPE44Wzxk5kS-gzGzoHsz',// your appId
          "appKey": 'HQCDk4qBKVQGN52kmOdKmmOJ', // your appKey
        }
    },
    "markdown": {
        "lineNumbers": true
    },
    plugins:[
        ['sitemap', {
            hostname: 'https://jessenpan.github.io'
          }
        ]
    ]
}
