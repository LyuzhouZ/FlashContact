const app = getApp();
//var base64 = require("image/");

// pages/contacts/contacts.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  bindViewTapContactPaul: function () {
    wx.navigateTo({
      url: '../contactProfilePaul/contactProfilePaul'
    })
  },

  bindViewTapContactSot: function () {
    wx.navigateTo({
      url: '../contactProfileSot/contactProfileSot'
    })
  },

  bindViewTapContactRichard: function () {
    wx.navigateTo({
      url: '../contactProfileRichard/contactProfileRichard'
    })
  },

  bindViewTapContactLini: function () {
    wx.navigateTo({
      url: '../contactProfileLini/contactProfileLini'
    })
  },

  bindViewTapContactLucia: function () {
    wx.navigateTo({
      url: '../contactProfileLucia/contactProfileLucia'
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