Polymer({
    is: 'vc-userEmailEdit',
    properties: {
        email: {
            type: String,
            observer: "emailChanged",
            notify: true,
            value: ''
        },
        emailcheck: {
            type: Boolean,
            notify: true,
        },
    },
    emailChanged: function () {        
        var valid = this.$.txtEmail.validate();
        var strtest = this.email;
        var regex = "^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$";

        var goodFormat = false;
        goodFormat = ((valid == null) || (valid == true)) && (strtest.match(regex) != null);
        this.emailcheck = !goodFormat;
        this.$.txtEmail.invalid = !goodFormat;
    },


});