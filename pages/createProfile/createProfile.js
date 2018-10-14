Page({
    data: {
        loading: false,
    },
    // Form Submission
    bindFormSubmit: function(e) {
        // save to local storage
        var name = e.detail.value.name;
        var email = e.detail.value.email;
    }
});