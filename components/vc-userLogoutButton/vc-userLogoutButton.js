Polymer({
    is: 'vc-userLogoutButton',
    properties: {
        icon: {
            type: String,
            value: "components/vc-userLogoutButton/images/ico04.png"
        },
        pressed: {
            type: Boolean,
            value: false,
            notify: true,
            reflectToAttribute: true
        },
    },
    listeners: {
        'tap': 'logoutUser'
    },

    ready: function () {

    },

    logoutUser: function () {
        this.fire('eventFromUserLogoutButton', {});
    }
});





