Polymer({
    is: 'vc-userView',
    properties: {
        txtEmail: {
            type: String,
            reflectToAttribute: true,
            notify: true,
        },
        txtPassword: {
            type: String,
            notify: true
        },
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
        fixed: {
            type: Boolean,
            value: true
        },
        drawerwidth1: {
            type: String,
            notify: true,
        },
        drawerwidth2: {
            type: String,
            notify: true,
        },
        drawerwidth3: {
            type: String,
            notify: true,
        },
        unloggedIcon: {
            type: String,
            value: "../../components/vc-userView/images/tabico-deco.png"
        },
        loggedIcon: {
            type: String,
            value: "../../components/vc-userView/images/tabico.png"
        },
    },


    ready: function () {
        this.addEventListener('eventFromUserCreateAccountButton', this._createAccount);
        this.addEventListener('eventFromUserValidateAccountButton', this._validateAccount);
    },

    _userViewOpenTabButtonTap1: function () {
        var currImgRect1 = this.$.card1.getBoundingClientRect();
        if (currImgRect1.width > 0) {
            this.drawerwidth1 = currImgRect1.width;
        }
    },

    _userViewOpenTabButtonTap2: function () {
        var currImgRect2 = this.$.card2.getBoundingClientRect();
        if (currImgRect2.width > 0) {
            this.drawerwidth2 = currImgRect2.width;
        }
    },

    _userViewOpenTabButtonTap3: function () {
        var currImgRect3 = this.$.card3.getBoundingClientRect();
        if (currImgRect3.width > 0) {
            this.drawerwidth3 = currImgRect3.width;
        }
    },

    _createAccount: function (event) {
        this.noaccountcreation = false;
    },

    _validateAccount: function (event) {
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
                this.$.paperDrawerPanel1.togglePanel();
            }
            if (logoutVisibility.toggleParam) {
                this.$.paperDrawerPanel2.togglePanel();
            }
            if (accountCreationVisibility.toggleParam) {
                this.$.paperDrawerPanel3.togglePanel();
            }
        }
    },

});




