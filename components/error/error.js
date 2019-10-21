// components/error2/error.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    btnText: {
      type: String,
      value: '重试'
    },
    hasButton: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击重试按钮
    reTry() {
      this.triggerEvent('retryFetch');
    }
  }
})
