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
        userpasswordcheck: {
            type: Boolean,
            notify: true,
        },
        useremailcheck: {
            type: Boolean,
            notify: true,
        },
        // UI params
        drawerwidthLogin: {
            type: String,
            notify: true,
        },
        drawerwidthLogout: {
            type: String,
            notify: true,
        },
        drawerwidthCreateAccount: {
            type: String,
            notify: true,
        },
        unloggedicon: {
            type: String,
            value: "../../components/vc-userView/images/tabico-deco.png"
        },
        loggedicon: {
            type: String,
            value: "../../components/vc-userView/images/tabico.png"
        },
    },


    ready: function () {
        this.addEventListener('eventFromUserCreateAccountButton', this._createAccount);
        this.addEventListener('eventFromUserValidateAccountButton', this._validateAccount);
        this.addEventListener('eventFromUserBackButton', this._openLogin);



    },

    _userViewSetWidthLogin: function () {
        var currImgRect = this.$.cardLogin.getBoundingClientRect();
        if (currImgRect.width > 0) {
            this.drawerwidthLogin = currImgRect.width;
        }
    },

    _userViewSetWidthLogout: function () {
        var currImgRect = this.$.cardLogout.getBoundingClientRect();
        if (currImgRect.width > 0) {
            this.drawerwidthLogout = currImgRect.width;
        }
    },

    _userViewSetWidthCreateAccount: function () {
        var currImgRect = this.$.cardCreateAccount.getBoundingClientRect();
        if (currImgRect.width > 0) {
            this.drawerwidthCreateAccount = currImgRect.width;
        }
    },

    _createAccount: function (event) {
        this.noaccountcreation = false;
    },

    _validateAccount: function (event) {
        var DBuseremail = '';
        var DBuserpassword = '';
        var DBusernickname = '';
        var DBusericon = '';
        var DBuserphonenumber = '';

        if (!this.useremailcheck) { DBuseremail = this.useremail; }
        if (!this.userpasswordcheck) { DBuserpassword = this.userpassword; }
        DBusernickname = this.usernickname;
        if (this.usericon == '') {
            DBusericon = "../../components/vc-userView/images/offline-user-icon.png";
        }
        else {
            DBusericon = this.usericon;
        }
        DBuserphonenumber = this.userphonenumber;

    },

    _openLogin: function (event) {
        this.noaccountcreation = true;
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

            if (loginVisibility.toggleParam) {
                this.$.paperDrawerPanelLogin.togglePanel();
            }
            if (logoutVisibility.toggleParam) {
                this.$.paperDrawerPanelLogout.togglePanel();
            }
            if (accountCreationVisibility.toggleParam) {
                this.$.paperDrawerPanelCreateAccount.togglePanel();
            }
        }
    },

});




