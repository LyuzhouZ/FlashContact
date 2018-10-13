// pages/settings/settings.js
Page({
    data: {
      items: [
        { name: 'Notifications', value: 'Disable Notifications'},
        { name: 'Mute', value: 'Mute app sounds'},
        { name: 'Update', value: 'Auto-update app', checked: 'true' },
      ],

      radioItems1: [
        { name: '中文', value: '0' },
        { name: 'English', value: '1', checked: true }
      ],

      radioItems2: [
        { name: 'Share your contact automatically', value: '0' },
        { name: 'Ask for permission before sharing your contact', value: '1', checked: true }
      ],

    },
    checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },

  radioChange1: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems1 = this.data.radioItems1;
    for (var i = 0, len = radioItems1.length; i < len; ++i) {
      radioItems1[i].checked = radioItems1[i].value == e.detail.value;
    }

    this.setData({
      radioItems1: radioItems1
    });
  },

  radioChange2: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems2 = this.data.radioItems2;
    for (var i = 0, len = radioItems2.length; i < len; ++i) {
      radioItems2[i].checked = radioItems2[i].value == e.detail.value;
    }

    this.setData({
      radioItems2: radioItems2
    });
  },

  submitFeedback: function(e) {
    console.log('Feedback info：', e.detail.value)
  },

  bindViewTap: function () {
    wx.navigateTo({
      url: '../aboutus/aboutus'
    })
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