var app = getApp();

Page({
    data: {
        userInfo: {},
        contacts: []
    },

    // Loading spinner when page loads
    onLoad: () => {
        wx.showNavigationBarLoading();

        var that = this;

        console.log(app);

        // get user data from app instance
        app.getUserInfo( (userInfo) => {
            //update data
            that.setData({
                userInfo: userInfo
            });
        } ) 
    },
    // Change navigation bar title


    

});