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
        passwordcheck: {
            type: Boolean,
            notify: true,
            observer: "_enableButton",
        },
        emailcheck: {
            type: Boolean,
            notify: true,
            observer: "_enableButton",
        },
        buttonimage: {
            type: String,
            value: "../../components/vc-userView/images/login_disabled.png"
        }
    },
    listeners: {
        'tap': 'logUser'
    },

    logUser: function () {
        if (!this.passwordcheck && !this.emailcheck) {
            this.fire('eventFromUserLoginButton', { txtEmail: this.email, txtPassword: this.password });
        }
    },

    _enableButton: function () {
        if (this.passwordcheck || this.emailcheck) {
            this.buttonimage = "../../components/vc-userView/images/login_disabled.png";
        }
        else {
            this.buttonimage = "../../components/vc-userView/images/login_enabled.png";
        }
    }
});





