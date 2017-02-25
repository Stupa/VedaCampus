Polymer({
    is: 'vc-userPasswordEdit',
    properties: {
        password: { 
            type: String,
            observer: "passwordChanged",
            notify: true
        }
    },
    passwordChanged: function () {
        var valid = this.$.txtPassword.validate();
        if (!valid == null) {
            if (!valid) {
            }
        }
        else {
           // this.fire('eventFromuserPasswordEdit', { txtPassword: this.$.txtPassword.value });
        }
    }
});