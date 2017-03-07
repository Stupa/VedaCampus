Polymer({
    is: 'vc-user',
    properties: {
        // User fields
        vcUserEmail: {
            type: String,
            reflectToAttribute: true,
            observer: "_hasErrors",
            notify: true,
        },
        vcUserPassword: {
            type: String,
            notify: true,
            observer: "_hasErrors",
        },
        vcUserNickname: {
            type: String,
            notify: true,
            observer: "_hasErrors",
        },
        vcUserIcon: {
            type: String,
            notify: true,
            observer: "_hasErrors",
        },
        vcUserPhone: {
            type: String,
            notify: true,
            observer: "_hasErrors",
        },
        // User status
        userloggedbyparent: {
            type: Boolean,
            value: false,
            notify: true,
            observer: "_setUserlogged",
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
        error: {
            type: Boolean,
            value: true,
            notify: true,
            reflectToAttribute: true,
        },
        opened: {
            type: Boolean,
            notify: true,
            reflectToAttribute: true,
        },
        waitedevent: {
            type: String,
            notify: true,
            value: '',
            reflectToAttribute: true,
        },
    },
    behaviors: [
        Polymer.IronValidatorBehavior,
    ],
    listeners: {
        /*'tap': '_switchopened',*/

    },
    ready: function () {
        this.addEventListener('eventFromUserCreateAccountButton', this._createAccount);
        this.addEventListener('eventFromUserValidateAccountButton', this._validateAccount);
        this.addEventListener('eventFromUserBackButton', this._openLogin);
        this.addEventListener('setnoaccountcreationfalse', this._createAccountSet);
        this.addEventListener('setnoaccountcreationtrue', this._openLoginSet);
        this.addEventListener('setuserloggedtrue', this._loggedtSet);
        this.addEventListener('setuserloggedfalse', this._openLoginFromLogoutSet);
    },

    _hasErrors: function (event) {
        this.error = (!this.$.inputEmail.validate() || !this.$.inputPassword.$.input.validate() || !this.$.inputNickname.validate() || !this.$.inputPhone.validate() || !this.$.inputIcon.validate());
    },


    _createAccount: function (event) {
        this.waitedevent = 'setnoaccountcreationfalse';
        this.opened = !this.opened;
    },

    _createAccountSet: function (event) {
        this.noaccountcreation = false;
        this.waitedevent = '';
    },


    _openLogin: function (event) {
        this.waitedevent = 'setnoaccountcreationtrue';
        this.opened = !this.opened;
    },

    _openLoginSet: function (event) {
        this.noaccountcreation = true;
        this.waitedevent = '';
    },

    _setUserlogged: function (event) {
        if (this.userloggedbyparent) {
            this.waitedevent = 'setuserloggedtrue';
        }
        else {
            this.waitedevent = 'setuserloggedfalse';
        }
        this.opened = !this.opened;
    },

    _loggedtSet: function (event) {
        this.userlogged = true;
         this.waitedevent = '';
    },

    _openLoginFromLogoutSet: function (event) {
        this.userlogged = false;
         this.waitedevent = '';
    },

    _validateAccount: function (event) {
        var DBusericon = '';
        if (this.usericon == '') {
            DBusericon = "../../../src/components/vc-user/images/default_user.png";
        }
        else {
            DBusericon = this.usericon;
        }
    },

    _logUser: function (event) {
        if (!this.error) {
        }
    },

    _unlogUser: function (event) {
    },

    _setVisibility: function (event) {
        if (this.userlogged != undefined && this.noaccountcreation != undefined) {
            this.$.loginColumnText.style.display = !this.userlogged ? 'block' : 'none';
            this.$.loginColumnButtons.style.display = !this.userlogged && this.noaccountcreation ? 'block' : 'none';
            this.$.createAccountColumnText1.style.display = !this.userlogged && !this.noaccountcreation ? 'block' : 'none';
            this.$.createAccountColumnText2.style.display = !this.userlogged && !this.noaccountcreation ? 'block' : 'none';
            this.$.createAccountColumnButtons.style.display = !this.userlogged && !this.noaccountcreation ? 'block' : 'none';
            this.$.logoutColumnButtons.style.display = this.userlogged && this.noaccountcreation ? 'block' : 'none';
            this.opened = !this.opened;
        }

    },


});




