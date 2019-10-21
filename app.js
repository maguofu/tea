//app.js
App({
  onLaunch: function () {
    console.log('onLaunch');
    wx.setTabBarStyle({
      // bar的文案颜色
      color: '#333',
      // 选中tab的文案颜色
      selectedColor: '#ff0000',
      // bar的背景色
      backgroundColor: '#fff',
      // bar上边框颜色
      borderStyle: 'white',
      fontSize: '48rpx'
    });
  },
  onShow: function() {
    console.log('onShow');
    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     // 也就是发送到后端,后端通过接口发送到前端，前端接收用户信息等....
    //     wx.setStorageSync('code', res.code);
    //     console.log(wx.getStorageSync('code'), res)

    //     // 获取用户信息
    //     wx.getSetting({
    //       success: res => {
    //         console.log(res)
    //         if (res.authSetting['scope.userInfo']) {
    //           // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //           wx.getUserInfo({
    //             success: res => {
    //               console.log(res)
    //               // 可以将 res 发送给后台解码出 unionId
    //               this.globalData.userInfo = res.userInfo

    //               // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //               // 所以此处加入 callback 以防止这种情况
    //               if (this.userInfoReadyCallback) {
    //                 this.userInfoReadyCallback(res)
    //               }
    //             }
    //           })
    //         }
    //       }
    //     })
    //   }
    // })
  },
  onHide() {
    console.log('onHide');
  },
  globalData: {
    userInfo: null
  }
})