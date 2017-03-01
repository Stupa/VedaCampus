Polymer({
    is: 'vc-userView',
    properties: {
        // User fields
        useremail: {
            type: String,
            reflectToAttribute: true,
            notify: true,
        },
        userpassword: {
            type: String,
            notify: true
        },
        usernickname: {
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
        loginwidth: {
            type: Number,
            value: 0,
            reflectToAttribute: true
        },
        logoutwidth: {
            type: Number,
            value: 0,
            reflectToAttribute: true
        },
        createaccountwidth: {
            type: Number,
            value: 0,
            reflectToAttribute: true
        },
        loginopened: {
            type: Boolean,
            value: false,
            reflectToAttribute: true
        },
        logoutopened: {
            type: Boolean,
            value: false,
            reflectToAttribute: true
        },
        createaccountopened: {
            type: Boolean,
            value: false,
            reflectToAttribute: true
        },
        unloggedicon: {
            type: String,
            value: "../../components/vc-userView/images/user_unlogged.png",
            reflectToAttribute: true
        },
        loggedicon: {
            type: String,
            value: "../../components/vc-userView/images/user_logged.png",
            reflectToAttribute: true
        },

    },

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

    _getLoginWidth: function () {
        var tempWidthNumber = this.$.cardLogin.getBoundingClientRect().width;

        if (tempWidthNumber > 0) {
            tempWidthNumber = this.$.cardLogin.getBoundingClientRect().width + 30;
            this.loginwidth = tempWidthNumber;
        }
    },

    _getLogoutWidth: function () {
        var tempWidthNumber = this.$.cardLogout.getBoundingClientRect().width;

        if (tempWidthNumber > 0) {
            tempWidthNumber = this.$.cardLogout.getBoundingClientRect().width + 30;
            this.logoutwidth = tempWidthNumber;
        }
    },

    _getCreateAccountWidth: function () {
        var tempWidthNumber = this.$.cardCreateAccount.getBoundingClientRect().width;

        if (tempWidthNumber > 0) {
            tempWidthNumber = tempWidthNumber + 30;
            this.createaccountwidth = tempWidthNumber;
        }
    },

    _createAccount: function (event) {
        this.$.paperDrawerPanelLogin.togglePanel();
        this.noaccountcreation = false;
    },

    _validateAccount: function (event) {
        var DBusericon = '';
        if (this.usericon == '') {
            DBusericon = "../../components/vc-userView/images/default_user.png";
        }
        else {
            DBusericon = this.usericon;
        }

    },

    _openLogin: function (event) {
        this.$.paperDrawerPanelCreateAccount.togglePanel();
        this.noaccountcreation = true;
    },

    _logUser: function (event) {
        if (!this.hasErrors()) {
            this.$.paperDrawerPanelLogin.togglePanel();
        }
    },

    _unlogUser: function (event) {
        this.$.paperDrawerPanelLogout.togglePanel();
    },


    formatDisplayType: function (boolHide) {
        var displaytype = "";
        var toggle = false;
        if (!boolHide) {
            displaytype = "block";
            toggle = true;
        } else {
            displaytype = "none";
        }
        return { displayTypeParam: displaytype, toggleParam: toggle };
    },

    _setVisibilityLogin: function () {
        var hide = (this.userlogged || !this.noaccountcreation);
        var formatDisplayTypeRes = this.formatDisplayType(hide);
        return formatDisplayTypeRes;

    },

    _setVisibilityLogout: function () {
        var hide = ((!this.userlogged || !this.noaccountcreation));
        var formatDisplayTypeRes = this.formatDisplayType(hide);
        return formatDisplayTypeRes;

    },

    _setVisibilityAccountCreation: function () {
        var hide = this.noaccountcreation;
        var formatDisplayTypeRes = this.formatDisplayType(hide);
        return formatDisplayTypeRes;
    },

    _setVisibility: function () {
        if (!(this.noaccountcreation == undefined) & !(this.userlogged == undefined)) {
            var loginVisibility = this._setVisibilityLogin();
            var logoutVisibility = this._setVisibilityLogout();
            var accountCreationVisibility = this._setVisibilityAccountCreation();

            this.$.loginPanelContainer.style.display = loginVisibility.displayTypeParam;
            this.$.logoutPanelContainer.style.display = logoutVisibility.displayTypeParam;
            this.$.createAccountPanelContainer.style.display = accountCreationVisibility.displayTypeParam;

            this.loginopened = false;
            this.logoutopened = false;
            this.createaccountopened = false;

            if (loginVisibility.toggleParam) {
                this.$.paperDrawerPanelLogin.togglePanel();
                this.loginopened = true;
            }
            if (logoutVisibility.toggleParam) {
                this.$.paperDrawerPanelLogout.togglePanel();
                this.logoutopened = true;
            }
            if (accountCreationVisibility.toggleParam) {
                this.$.paperDrawerPanelCreateAccount.togglePanel();
                this.createaccountopened = true;
            }
        }
    },

});




