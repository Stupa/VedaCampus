Polymer({
    is: 'vc-user-main-panel-button',

    properties: {
        userlogged: {
            type: Boolean,
            value: false,
            notify: true,
            observer: "_setVisibility",
        },
        usermainpanelicon: {
            type: String,
            value: "../../../src/components/vc-user/images/user_unlogged.png"

        },
    },
    
    listeners: {
        'tap': '_switchopened',
    },

    _switchopened: function () {
        this.fire('eventFromUserMainPanelButton', {});
    },

    _setVisibility: function () {
        if (this.userlogged) {
            this.usermainpanelicon = "../../../src/components/vc-user/images/user_logged.png";
        }
        else {
            this.usermainpanelicon = "../../../src/components/vc-user/images/user_unlogged.png";
        }
    }

});





