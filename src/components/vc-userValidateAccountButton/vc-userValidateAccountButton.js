Polymer({
    is: 'vc-userValidateAccountButton',
    properties: {
        error: {
            type: Boolean,
            notify: true,
            observer: "_enableButton",
        },
        buttonimage: {
            type: String,
            value: "../../../src/components/vc-user/images/validate_account_disabled.png"
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
        if (!this.error) {
            this.fire('eventFromUserValidateAccountButton', {});
        }
    },

    _enableButton: function () {
        if (this.error) {
            this.unlisten(this, 'tap', 'validateAccount');
            this.buttonimage = "../../../src/components/vc-user/images/validate_account_disabled.png";
            this.disabled = true;

        }
        else {
            this.listen(this, 'tap', 'validateAccount');
            this.buttonimage = "../../../src/components/vc-user/images/validate_account_enabled.png";
            this.disabled = false;
        }
    }


});