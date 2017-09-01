// pages/room/room.js
var app = getApp();
Page({
  data: {
    userInfo: null,
    isHide: true,
    image: ["./images/empty.png", "./images/empty.png", "./images/empty.png", "./images/empty.png", "./images/empty.png", "./images/empty.png", "./images/empty.png", "./images/empty.png", "./images/empty.png", "./images/empty.png"]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onReady: function () {
    // 页面渲染完成
    // console.log("userInfo" + event.currentTarget.dataset.userInfo);
    // console.log("userImage" + event.currentTarget.dataset.userImage);

  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onShareAppMessage: function () {
    var i = 123;
    return {
      title: '我正在开房，快来一起玩儿吧',
      path: '/pages/room/room?id=' + i,
      success: function (res) {
        // 分享成功
        console.log(res);
      },
      fail: function (res) {
        // 分享失败
        console.log(res);
      }
    }
  },
  sharePage: function () {
    wx.showToast({
      title: '请点击右上角按钮进行分享',
      icon: 'success',
      mask: true,
      duration: 3000
    })
  },
  showQrcodeModal: function () {
    this.setData({
      isHide: false
    })
  },
  hideQrcodeModal: function () {
    this.setData({
      isHide: true
    })
  },
  sitDown: function(event){
    console.log("sitDown at " + event.currentTarget.dataset.index);
    //modify the content
    var that = this;
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.data.image.splice(event.currentTarget.dataset.index, 1, userInfo.avatarUrl)
      that.setData({
        image: that.data.image

      })
      
    })
      
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  goToPlay: function () {
    wx.navigateTo({
      url: '/pages/vote/vote',
      success: function (res) {

      },
      fail: function () {

      },
      complete: function () {

      }
    })
  }
})