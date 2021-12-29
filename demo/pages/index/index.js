const items = ['播放列表', '歌曲', '专辑', '演唱者'];
let musicUrl = 'https://sf1-ttcdn-tos.pstatp.com/obj/developer/sdk/0000-0001.mp3';

const songsList = [{
  dataUrl: 'http://stream.qqmusic.tc.qq.com/138549169.mp3',
  name: '你还要我怎样',
  singer: '薛之谦',
  coverImgUrl: 'https://bkimg.cdn.bcebos.com/pic/7e3e6709c93d70cf3cdf35a4f6dcd100baa12b75?x-bce-process=image/resize,m_lfit,w_536,limit_1/format,f_jpg'
}, {
  dataUrl: 'http://mpge.5nd.com/2018/2018-5-10/85111/1.mp3',
  name: '哑巴',
  singer: '薛之谦',
  coverImgUrl: 'http://img.5nd.com/86/photo/2018album/20185/85111.jpg'
}, {
  dataUrl: 'http://stream.qqmusic.tc.qq.com/137903929.mp3',
  name: '走马',
  singer: '陈粒',
  coverImgUrl: 'https://bkimg.cdn.bcebos.com/pic/11385343fbf2b211aad8adafc48065380dd78e58?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto'
}, {
  dataUrl: 'http://stream.qqmusic.tc.qq.com/132636799.mp3',
  name: '演员',
  singer: '薛之谦',
  coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R90x90M000003y8dsH2wBHlo.jpg'
}]
const _albumList = [{
    name: "寂寞不痛",
    singer: 'A-Lin',
    image: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000000Nlo922ahOEE.jpg?max_age=2592000'
  },
  {
    name: "喜剧之王",
    singer: '李荣浩',
    image: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000001FOctH2oGoAx.jpg?max_age=2592000'
  },
  {
    name: "艾欧，不错哦",
    singer: '周杰伦',
    image: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000001uqejs3d6EID.jpg?max_age=2592000'
  },
  {
    name: "寂寞不痛",
    singer: 'A-Lin',
    image: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000000Nlo922ahOEE.jpg?max_age=2592000'
  }
];

const app = getApp();

Page({
  data: {
    songsList,
    musicGroupName: items[0],
    actionSheetHidden: false,
    actionSheetItems: items,
    listTemplateName: 'music-play-list',
    templateData: '',
    playingSongsNum: 0,
    playing: false,
    playBar: {
      coverImgUrl: 'https://bkimg.cdn.bcebos.com/pic/7e3e6709c93d70cf3cdf35a4f6dcd100baa12b75?x-bce-process=image/resize,m_lfit,w_536,limit_1/format,f_jpg',
      name: '你还要我怎样'
    }
  },
  onLoad() {
    const bgam = tt.getBackgroundAudioManager();
    this.backgroundAudioManager = bgam;
    this.canUpdateUI = true;
    bgam.startTime = 0;
    bgam.title = "测试背景音乐";
    bgam.audioPage = {
      path: "pages/API/BackgroundAudioManager.play"
    };
    bgam.onPlay(() => {
      this.updateUI();
    });
    bgam.onPause(() => {
      this.updateUI();
      tt.showToast({
        title: '暂停播放'
      });
    });
    bgam.onStop(() => {
      this.updateUI();
    });
    bgam.onEnded(() => {
      this.updateUI();
    });
  },

  updateUI() {
    const bgam = this.backgroundAudioManager;
    if (this.canUpdateUI) {
      this.setData({
        playing: !bgam.paused
      });
    }
  },

  changeAction() {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  /**
   * 点击唱片
   */
  play() {
    if (!this.backgroundAudioManager.src) {
      this.backgroundAudioManager.src = musicUrl;
    }
    this.backgroundAudioManager.play();
    this.updateUI();
  },

  /**
   * 暂定
   */
  pause() {
    this.backgroundAudioManager.pause();
    this.updateUI();
  },

  /**
   * 列表选择
   */
  actionSheetTap() {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    });
    let that = this;
    tt.showActionSheet({
      itemList: items,
      success(e) {
        let listTemplateName = '';
        let templateData = '';
        switch (e.tapIndex) {
          case 0:
            listTemplateName = 'music-play-list';
            break;
          case 1:
            listTemplateName = 'song-list';
            templateData = songsList;
            break;
          case 2:
            listTemplateName = 'album-list';
            templateData = _albumList;
            break;
          case 3:
            listTemplateName = 'author-list';
            templateData = _albumList;
            break;
        }
        that.setData({
          listTemplateName,
          templateData,
          actionSheetHidden: !that.data.actionSheetHidden
        })
      }
    });
  }
})