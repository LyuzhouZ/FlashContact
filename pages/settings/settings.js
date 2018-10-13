// pages/settings/settings.js
Page({
    data: {
      items: [
        { name: 'USA', value: '美国'},
        { name: 'CHN', value: '中国', checked: 'true'},
        { name: 'BRA', value: '巴西'},
        { name: 'JPN', value: '日本'},
        { name: 'ENG', value: '英国'},
        { name: 'TUR', value: '法国'},
      ],

      radioItems: [
        { name: 'Share contact automatically', value: '0' },
        { name: 'Ask for permission before sharing contact', value: '1', checked: true }
      ],

    },
    checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems
    });
  },

  submitFeedback: function(e) {
    console.log('Feedback info：', e.detail.value)
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})