// pages/recommend/recommend.js
import https from '../../utils/api.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 请求推荐数据
    recommondList: [],
    // 请求是否出错
    fetchErr: false,
    // 请求异常页面是否有重试按钮
    hasButton: true,
    // 异常按钮文案
    errBtnText: '请求出错，请重试',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.fetchData();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage () {

  },
  // 获取首页数据
  fetchData() {
    https('/study/mock/tea-index', {
      params: {
        _t: Date.parse(new Date())
      }
    }).then((res) => {
      if (!res.errNo) {
        this.setData({ fetchErr: false });
        this.setData({ recommondList: res.data.recommondList });
      } else {
        this.setData({ fetchErr: true });
      }
    }).catch(e => {
      this.setData({ fetchErr: true });
    });
  },
  /**
   * 进入详情页
   */
  gotoDetail(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?goodsId=' + e.currentTarget.dataset.id
    })
  },
  // 页面请求异常重试按钮
  retryFetchData() {
    this.fetchData();
  }
})