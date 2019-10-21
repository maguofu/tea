// pages/detail/detail.js
import https from '../../utils/api.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // url上的商品id
    goodsId: 0,
    // 请求出错
    fetchErr: false,
    // 显示重试按钮
    hasButton: true,
    // 请求的详情数据
    detailList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ goodsId: Number(options.goodsId) });
    this.fetchGoodDetail();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  fetchGoodDetail() {
    https('/study/mock/detail', {
      params: {
        id: this.data.goodsId,
        _t: Date.parse(new Date())
      }
    }).then((res) => {
      if (!res.errNo) {
        this.setData({ fetchErr: false });
        this.setData({ detailList: res.data.detailList });
      } else {
        this.setData({ fetchErr: true });
      }
    }).catch(e => {
      this.setData({ fetchErr: true });
    });
  },
  retryFetchData() {
    this.fetchGoodDetail();
  }
})