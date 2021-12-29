const list = [
  {
    title: '为你推荐',
    data: [
      {
        imgUrl: 'http://m.imeitou.com/uploads/allimg/2021042109/qren2kqpldd.jpg',
        title: '独享音乐 | 戴上耳机悦享'
      },
      {
        imgUrl: 'http://m.imeitou.com/uploads/allimg/2021042109/xhvqb4y52ry.jpg',
        title: '粤语专享，上百首优质粤语'
      },
      {
        imgUrl: 'http://m.imeitou.com/uploads/allimg/2021042109/kvplxjwxkqv.jpg',
        title: '「旋律控」超好听的抖音歌曲合集'
      }
    ]
  },
  {
    title: 'Look 直播',
    data: [
      {
        imgUrl: 'http://pic.22520.cn/up/200922/1600779262186585-lp.jpg',
        title: '一听就上瘾的声音'
      },
      {
        imgUrl: 'http://pic.22520.cn/up/200921/1600618901581359-lp.jpg',
        title: '会让你单曲循环的声音'
      },
      {
        imgUrl: 'http://www.864311.com/uploads/2/26/3609986684/1357846773.jpg',
        title: 'LOL主题歌曲放送'
      }
    ]
  },
  {
    title: '场景音乐推荐',
    data: [
      {
        imgUrl: 'http://img.alicdn.com/imgextra/i2/291799040/TB2EOEoppXXXXXpXpXXXXXXXXXX_!!291799040.jpg',
        title: '【民谣合集】城市的喧嚣之外，我们需要找到心灵的落脚点'
      },
      {
        imgUrl: 'https://pic1.zhimg.com/v2-632e8b06d5cf3864abc161a8f2de27c5_1440w.jpg?source=172ae18b',
        title: '电游时节奏与心情的绝佳搭配'
      },
      {
        imgUrl: 'https://www.zhongguofeng.com/uploads/200528/13-20052Q50P0C0.jpg',
        title: '古韵缱绻 ｜ 花开花落 离散之时'
      }
    ]
  }
]

const contentData = [
  {
    imgUrl: 'https://bkimg.cdn.bcebos.com/pic/48540923dd54564e8aab5812b1de9c82d0584fca?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
    title: '你飞到了城市的另一边',
    singer: '好妹妹乐队',
    description: '阳光都格外的温暖'
  },
  {
    imgUrl: 'https://bkimg.cdn.bcebos.com/pic/ca1349540923dd547c53f8bbdf09b3de9d8248c4?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto',
    title: '理想三旬',
    singer: '陈鸿宇',
    description: '词藻华丽，极副意境的忧伤'
  },
  {
    imgUrl: 'https://bkimg.cdn.bcebos.com/pic/024f78f0f736afc3502ecfeab919ebc4b745121a?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
    title: '父亲写的散文诗',
    singer: '许飞',
    description: '越是平淡越是深情'
  }
]

Page({
  data: {
    list,
    contentData
  },
  onLoad: function (options) {

  }
})