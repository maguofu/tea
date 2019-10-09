// pages/index/components/test-compontent-one/test-compontent-one.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['my-class'],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    innerText: {
      type: String,
      value: 'default value'
    },
    userInfo: Object,
  },
  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    created() {
      console.log(this.properties);
    },
    attached() {
      console.log(this.properties);
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTap() {
      console.log(111);
      this.triggerEvent('myevent', {a: 1}, {});
    },
  }
})
