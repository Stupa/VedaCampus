Polymer({
    is: 'vc-userValidateAccountButton',
    properties: {
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
            value: "../../components/vc-userView/images/validate_account_disabled.png"
        }
    },
    listeners: {
        'tap': 'validateAccount'
    },



    validateAccount: function () {
        if (!this.passwordcheck && !this.emailcheck) {
        this.fire('eventFromUserValidateAccountButton', {});
        }
    },

    _enableButton: function () {
        if (this.passwordcheck || this.emailcheck) {
            this.buttonimage = "../../components/vc-userView/images/validate_account_disabled.png";
        }
        else {
            this.buttonimage = "../../components/vc-userView/images/validate_account_enabled.png";
        }
    }


});