Polymer({
    is: 'vc-userLogoutButton',
    properties: {
        buttonimage: {
            type: String,
            value: "../../components/vc-userView/images/logout.png"
        }
    },
    listeners: {
        'tap': 'logoutUser'
    },
    logoutUser: function () {
        this.fire('eventFromUserLogoutButton', {});
    }
});





