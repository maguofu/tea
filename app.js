//app.js
App({
  onLaunch: function () {
    wx.setTabBarStyle({
      // bar的文案颜色
      color: '#333',
      // 选中tab的文案颜色
      selectedColor: '#ff0000',
      // bar的背景色
      backgroundColor: '#fff',
      // bar上边框颜色
      borderStyle: 'black'
    });
  },
  onShow: function() {
    
  },
  globalData: {
    userInfo: null
  }
})