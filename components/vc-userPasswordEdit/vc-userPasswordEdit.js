Polymer({
    is: 'vc-userPasswordEdit',
    properties: {
        password: {
            type: String,
            observer: "passwordChanged",
            notify: true,
            value: ''
        },
        passworderror: {
            type: Boolean,
            value: true,
            notify: true
        }
    },
    passwordChanged: function () {
        var valid = this.$.txtPassword.validate();
        var strtest = this.password;
        var regex = /^[A-Za-z0-9]{6,254}$/;
        var goodFormat = false;
        
        goodFormat = ((valid == null) || (valid == true)) && (strtest.match(regex) != null);
        this.passworderror = !goodFormat;
        this.$.txtPassword.invalid = !goodFormat;   
    }
});