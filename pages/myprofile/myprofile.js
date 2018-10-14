//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    sotAgeData:"",
    array: ['Work', 'Developers', 'Partners', 'Internships'],
    index: 0,
  },

  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindFormSubmit: function(e) {
    console.log(e);
    // if(e.detail.value = '') {
    //   return false;
    //   console.log('You have to enter a value');
    // }
    var emptyOrNot;
    const myDetails = {...e.detail.value}
    for (const key in myDetails) {
      if (myDetails.hasOwnProperty(key)) {
        console.log(myDetails[key]);
        //console.log(myDetails);
        if(myDetails.name == '' || myDetails.email == '' || myDetails.oeg == '' || myDetails.title == '') {
          emptyOrNot = false;
        } else {
          emptyOrNot = true;
        }
        //const element = object[key];
      }
    }
    if(emptyOrNot == false) {
      
      wx.showModal({
        title: 'Error',
        content: 'Please fill in all your contact information',
        confirmText: "Ok",
        showCancel: true,
        success: function (res) {
           console.log('success')
        }
      })
      return false;
    }
    wx.setStorage({
      key: 'appUserDetails',
      data: myDetails, success: function(){
        console.log('Saved user info');
        setTimeout(()=>{
          wx.navigateTo({
            url: '../viewProfile/viewProfile'
          });
        }, 1000)
        
      }
    })
    
  },
  displayAge: function() {
    if( app.globalData.sotAge) {
        this.setData({
          sotAgeData : app.globalData.sotAge
        })
    }
  },
  
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
