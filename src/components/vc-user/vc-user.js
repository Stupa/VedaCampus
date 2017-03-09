Polymer({
    is: 'vc-user',
    properties: {
        // Database params
        currentuserDAO: {
            type: Object,
        },
        statusKnown: {
            type: Object,
            notify: true,
        },
        signedin: {
            type: Object,
            notify: true,
        },
        dataread: {
            type: Object,
            observer: '_dataready'
        },
        datawrite: {
            type: Object,
        },
        usersDAO: {
            type: Object,
        },
        table: {
            type: String,
            value: '',
            reflectToAttribute: true,
            notify: true,
        },
        user: {
            type: Object,
            observer: '_userChanged'
        },
        // User fields
        email: {
            type: String,
            reflectToAttribute: true,
            notify: true,
        },
        password: {
            type: String,
            notify: true,
        },
        nickname: {
            type: String,
            notify: true,
        },
        icon: {
            type: String,
            notify: true,
        },
        phone: {
            type: String,
            notify: true,
        },
        // User status
        userlogged: {
            type: Boolean,
            value: false,
            notify: true,
        },
        noaccountcreation: {
            type: Boolean,
            value: true,
            notify: true,
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
        waitbeforechange: {
            type: Boolean,
            value: false
        },
    },

    observers: [
        '_setVisibility(userlogged, noaccountcreation)',
        '_hasErrors(email,password,icon,phone,nickname)',
    ],

    ready: function () {
        this.addEventListener('setnoaccountcreationfalse', this._setnoaccountcreationfalse);
        this.addEventListener('setnoaccountcreationtruevalidate', this._setnoaccountcreationtruevalidate);
        this.addEventListener('setnoaccountcreationtruecancel', this._setnoaccountcreationtruecancel);
        this.addEventListener('setuserloggedtrue', this._setuserloggedtrue);
        this.addEventListener('setuserloggedfalse', this._setuserloggedfalse);

        this.addEventListener('eventFromUserButtonLogin', this._databaseProcessLogin);
        this.addEventListener('eventFromUserButtonCreateAccount', this._databaseProcessNone);
        this.addEventListener('eventFromUserButtonLogout', this._databaseProcessLogout);
        this.addEventListener('eventFromUserButtonValidate', this._databaseProcessValidate);
        this.addEventListener('eventFromUserButtonBack', this._databaseProcessNone);

        this.addEventListener('eventFromSliderDisablePointerEvents', this._eventFromSliderDisablePointerEvents);
        this.addEventListener('eventFromSliderEnablePointerEvents', this._eventFromSliderEnablePointerEvents);

        this.usersDAO = new usersDAO();
        this.table = this.usersDAO.getTable();
    },

    _eventFromSliderDisablePointerEvents: function (event) {



        this.$.userLoginButton.style.pointerEvents = "none";
        this.$.userCreateAccountButton.style.pointerEvents = "none";
        this.$.userLogoutButton.style.pointerEvents = "none";
        this.$.userValidateAccountButton.style.pointerEvents = "none";
        this.$.userBackButton.style.pointerEvents = "none";
        this.$.toggleButton.style.pointerEvents = "none";

    },

    _eventFromSliderEnablePointerEvents: function (event) {
        
        this.$.userLoginButton.style.pointerEvents = "auto";
        this.$.userCreateAccountButton.style.pointerEvents = "auto";
        this.$.userLogoutButton.style.pointerEvents = "auto";
        this.$.userValidateAccountButton.style.pointerEvents = "auto";
        this.$.userBackButton.style.pointerEvents = "auto";
        this.$.toggleButton.style.pointerEvents = "auto";
     
    },


    _databaseProcessLogin: function (event) {
        this.waitedevent = event.detail.name;
        this.currentuserDAO = new dbuserDAO(this.$.auth, this.email, this.password);
        this.currentuserDAO.login();
    },

    _databaseProcessNone: function (event) {
        this.waitedevent = event.detail.name;
        this.closeSlider();
    },

    _databaseProcessLogout: function (event) {
        this.waitedevent = event.detail.name;
        this.currentuserDAO.logout();
        this.closeSlider();
    },

    _databaseProcessValidate: function (event) {
        this.waitedevent = event.detail.name;
        this.currentuserDAO = new dbuserDAO(this.$.auth, this.email, this.password);
        // Autolog
        this.currentuserDAO.create();
    },


    _userChanged: function (event) {
        if (this.user != undefined) {
            if ((this.noaccountcreation == false) && (this.signedin == true)) {
                var DBusericon = '';
                if (!this.noaccountcreation) {
                    if (this.icon == '') {
                        DBusericon = "../../../src/components/vc-user/images/default_user.png";
                    }
                    else {
                        DBusericon = this.icon;
                    }
                    this.usersDAO.setQuery(this.$.query);
                    this.usersDAO.setValues(DBusericon, this.phone, this.nickname);
                    this.usersDAO.add();
                }
            }
        }
    },

    _dataready: function (event) {
        if (this.userlogged != undefined && this.noaccountcreation != undefined && this.dataread.icon != undefined) {
            this.closeSlider();
        }
    },

    closeSlider: function () {
        this.opened = !this.opened;
    },

    _setuserloggedtrue: function (event) {
        this.waitbeforechange = false;
        this.userlogged = true;
        this.waitedevent = '';
    },

    _setuserloggedfalse: function (event) {
        this.waitbeforechange = false;
        this.userlogged = false;
        this.waitedevent = '';
    },

    _setnoaccountcreationtruevalidate: function (event) {
        this.waitbeforechange = true;
        this.noaccountcreation = true;
        this.waitbeforechange = false;
        this.userlogged = true;
        this.waitedevent = '';
    },

    _setnoaccountcreationfalse: function (event) {
        this.waitbeforechange = false;
        this.noaccountcreation = false;
        this.waitedevent = '';
    },

    _setnoaccountcreationtruecancel: function (event) {
        this.waitbeforechange = false;
        this.noaccountcreation = true;
        this.waitedevent = '';
    },


    _onFirebaseError: function (event) {
    },

    _hasErrors: function (email, password, icon, phone, nickname) {
        this.error = (!this.$.inputEmail.validate() || !this.$.inputPassword.$.input.validate() || !this.$.inputNickname.validate() || !this.$.inputPhone.validate() || !this.$.inputIcon.validate());
    },

    _setVisibility: function (userlogged, noaccountcreation) {
        if (this.userlogged != undefined && this.noaccountcreation != undefined && !this.waitbeforechange != undefined && !this.waitbeforechange) {
            this.$.loginColumnText.style.display = !this.userlogged ? 'block' : 'none';
            this.$.loginColumnButtons.style.display = !this.userlogged && this.noaccountcreation ? 'block' : 'none';
            this.$.createAccountColumnText1.style.display = !this.userlogged && !this.noaccountcreation ? 'block' : 'none';
            this.$.createAccountColumnText2.style.display = !this.userlogged && !this.noaccountcreation ? 'block' : 'none';
            this.$.createAccountColumnButtons.style.display = !this.userlogged && !this.noaccountcreation ? 'block' : 'none';
            this.$.logoutColumnButtons.style.display = this.userlogged && this.noaccountcreation ? 'block' : 'none';
            this.$.loggedColumnLabel.style.display = this.userlogged && this.noaccountcreation ? 'block' : 'none';
            if (this.opened == undefined) {
                this.opened = true;
            }
            this.opened = !this.opened;
        }

    },


});




