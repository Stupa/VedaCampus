Polymer({
    is: 'vc-user',
    properties: {
        // User fields
        vcUserEmail: {
            type: String,
            reflectToAttribute: true,
            notify: true,
        },
        vcUserPassword: {
            type: String,
            notify: true
        },
        sernickname: {
            type: String,
            notify: true,
        },
        usericon: {
            type: String,
            notify: true,
        },
        userphonenumber: {
            type: String,
            notify: true,
        },
        // User status        
        userlogged: {
            type: Boolean,
            value: false,
            notify: true,
            observer: "_setVisibility",
        },
        noaccountcreation: {
            type: Boolean,
            value: true,
            notify: true,
            observer: "_setVisibility",
        },
        userpassworderror: {
            type: Boolean,
            notify: true,
        },
        useremailerror: {
            type: Boolean,
            notify: true,
        },
        usernicknameerror: {
            type: Boolean,
            notify: true,
        },
        usericonerror: {
            type: Boolean,
            notify: true,
        },
        userphonenumbererror: {
            type: Boolean,
            notify: true,
        },
        // UI params

        unloggedicon: {
            type: String,
            value: "../../components/vc-user/images/user_unlogged.png",
            reflectToAttribute: true
        },
        loggedicon: {
            type: String,
            value: "../../components/vc-user/images/user_logged.png",
            reflectToAttribute: true
        },

    },
    behaviors: [
        Polymer.IronValidatorBehavior
    ],
    ready: function () {
        this.addEventListener('eventFromUserCreateAccountButton', this._createAccount);
        this.addEventListener('eventFromUserValidateAccountButton', this._validateAccount);
        this.addEventListener('eventFromUserBackButton', this._openLogin);
        this.addEventListener('eventFromUserLoginButton', this._logUser);
        this.addEventListener('eventFromUserLogoutButton', this._unlogUser);
        this._setVisibility();
    },

    hasErrors: function () {
        return (this.userpassworderror || this.useremailerror || this.usernicknameerror || this.usericonerror || this.userphonenumbererror);
    },


    _createAccount: function (event) {
        this.noaccountcreation = false;
    },

    _validateAccount: function (event) {
        var DBusericon = '';
        if (this.usericon == '') {
            DBusericon = "../../components/vc-user/images/default_user.png";
        }
        else {
            DBusericon = this.usericon;
        }
    },

    _openLogin: function (event) {
        this.noaccountcreation = true;
    },

    _logUser: function (event) {
        if (!this.hasErrors()) {
        }
    },

    _unlogUser: function (event) {
    },

    _setVisibility: function (event) {
    },



});




