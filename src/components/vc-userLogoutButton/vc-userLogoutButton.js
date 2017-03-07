Polymer({
    is: 'vc-userLogoutButton',
    properties: {
        buttonimage: {
            type: String,
            value: "../../../src/components/vc-user/images/logout.png"
        }
    },
    listeners: {
        'tap': 'logoutUser'
    },
    logoutUser: function () {
        this.fire('eventFromUserLogoutButton', {});
    }
});





