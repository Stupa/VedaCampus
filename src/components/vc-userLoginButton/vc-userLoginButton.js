Polymer({
    is: 'vc-userLoginButton',
    properties: {
        email: {
            type: String,
            value: ''
        },
        password: {
            type: String,
            value: ''
        },
        error: {
            type: Boolean,
            notify: true,
            observer: "_enableButton",
        },
        buttonimage: {
            type: String,
            value: "../../../src/components/vc-user/images/login_disabled.png"
        },
        disabled: {
            type: Boolean,
            value: false,
            reflectToAttribute: true
        }
    },
    listeners: {
        'tap': 'logUser'
    },

    logUser: function () {
        if (!this.error) {
            this.fire('eventFromUserLoginButton', { txtEmail: this.email, txtPassword: this.password });
        }
    },

    _enableButton: function () {
        if (this.error) {
            this.buttonimage = "../../../src/components/vc-user/images/login_disabled.png";
            this.unlisten(this, 'tap', 'logUser');
            this.disabled=true;
        }
        else {
            this.buttonimage = "../../../src/components/vc-user/images/login_enabled.png";
            this.listen(this, 'tap', 'logUser');
            this.disabled=false;
        }
    }
});





