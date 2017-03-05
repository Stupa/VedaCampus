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
        passworderror: {
            type: Boolean,
            notify: true,
            observer: "_enableButton",
        },
        emailerror: {
            type: Boolean,
            notify: true,
            observer: "_enableButton",
        },
        buttonimage: {
            type: String,
            value: "../../components/vc-user/images/login_disabled.png"
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
        if (!this.passworderror && !this.emailerror) {
            this.fire('eventFromUserLoginButton', { txtEmail: this.email, txtPassword: this.password });
        }
    },

    _enableButton: function () {
        if (this.passworderror || this.emailerror) {
            this.buttonimage = "../../components/vc-user/images/login_disabled.png";
            this.unlisten(this, 'tap', 'logUser');
            this.disabled=true;
        }
        else {
            this.buttonimage = "../../components/vc-user/images/login_enabled.png";
            this.listen(this, 'tap', 'logUser');
            this.disabled=false;
        }
    }
});





