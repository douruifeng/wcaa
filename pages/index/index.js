//index.js
//获取应用实例
const app = getApp()
//导入js
var util = require('../../utils/util.js')

Page({
  data: {
    slider: [
      {
        "linkUrl": "",
        "picUrl": "../images/login.png",
        "id": "00"
      }, {
        "linkUrl": "",
        "picUrl": "../images/lb01.jpg",
        "id": "01"
      }, {
        "linkUrl": "",
        "picUrl": "../images/lb02.jpg",
        "id": "02"
      }, {
        "linkUrl": "",
        "picUrl": "../images/lb03.jpg",
        "id": "03"
      }, {
        "linkUrl": "",
        "picUrl": "../images/lb04.jpg",
        "id": "04"
      }, {
        "linkUrl": "",
        "picUrl": "../images/lb05.jpg",
        "id": "05"
      }
    ],
    swiperCurrent: 0,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

    onLoad: function () {
    var that = this;
    //网络访问，获取轮播图的图片
    /**util.getRecommend(function (data) {
      that.setData({
        slider: data.data.slider
      })
    });*/
  },
  //轮播图的切换事件
  swiperChange: function (e) {
    //只要把切换后当前的index传给<swiper>组件的current属性即可
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //点击指示点切换
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },

})
