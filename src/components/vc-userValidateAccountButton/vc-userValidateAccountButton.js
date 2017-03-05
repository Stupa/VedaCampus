Polymer({
    is: 'vc-userValidateAccountButton',
    properties: {
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
        nicknameerror: {
            type: Boolean,
            notify: true,
            observer: "_enableButton",
        },
        passworderror: {
            type: Boolean,
            notify: true,
            observer: "_enableButton",
        },
        phonenumbererror: {
            type: Boolean,
            notify: true,
            observer: "_enableButton",
        },
        buttonimage: {
            type: String,
            value: "../../components/vc-user/images/validate_account_disabled.png"
        },
        disabled: {
            type: Boolean,
            value: false,
            reflectToAttribute: true
        }
    },
    listeners: {
        'tap': 'validateAccount'
    },



    validateAccount: function () {
        if (!this.passworderror && !this.emailerror && !this.nicknameerror && !this.iconerror && !this.phonenumbererror) {
            this.fire('eventFromUserValidateAccountButton', {});
        }
    },

    _enableButton: function () {
        if (this.passworderror || this.emailerror || this.nicknameerror || this.iconerror || this.phonenumbererror) {
            this.unlisten(this, 'tap', 'validateAccount');
            this.buttonimage = "../../components/vc-user/images/validate_account_disabled.png";
            this.disabled = true;

        }
        else {
            this.listen(this, 'tap', 'validateAccount');
            this.buttonimage = "../../components/vc-user/images/validate_account_enabled.png";
            this.disabled = false;
        }
    }


});