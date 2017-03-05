Polymer({
    is: 'vc-app',

    properties: {
        page: {
            type: String,
            reflectToAttribute: true,
            observer: '_pageChanged',
        },
        dbrootDAO: Object,
        currentuserDAO: Object,
        userlogged: {
            type: Boolean,
            value: false,
        },
    },

    observers: [
        '_routePageChanged(routeData.page)',
    ],

    _routePageChanged: function (page) {
        this.page = page || 'view1';
        if (!this.$.drawer.persistent) {
            this.$.drawer.close();
        }
    },

    _pageChanged: function (page) {
   /*     var file = page;
        var filedir = '';
        var fileSpl = file.split('/');
        var filename = page;
        if (fileSpl.length > 1) {
            filename = fileSpl[fileSpl.length - 1];
            fileSpl.pop();
            filedir = fileSpl.join("/") + "/";
        }

        // Load page import on demand. Show 404 page if fails
        var resolvedPageUrl = this.resolveUrl(filedir + 'vc-' + filename + '.html');
        this.importHref(resolvedPageUrl, null, this._showPage404, true);
        */

        // Load page import on demand. Show 404 page if fails
        var resolvedPageUrl = this.resolveUrl('vc-' + page + '.html');
        this.importHref(resolvedPageUrl, null, this._showPage404, true);


    },

    _showPage404: function () {
        this.page = 'view404';
    },

    ready: function () {
        this.dbrootDAO = new dbrootDAO();
        this.dbrootDAO.init();
        this.addEventListener('eventFromChild2', this.myAction);
        this.addEventListener('eventFromUserLoginButton', this.login);
        this.addEventListener('eventFromUserLogoutButton', this.logout);
    },

    myAction: function (event) {
        this.page = event.detail.page;
        //console.log(event.detail.page);
    },

    login: function (event) {
        this.currentuserDAO = new dbuserDAO(this.dbrootDAO, event.detail.txtEmail, event.detail.txtPassword);
        console.log(this.currentuserDAO);
        this.currentuserDAO.login();
        this.userlogged = true;
    },

    logout: function (event) {
        this.currentuserDAO.logout();
        this.userlogged = false;
    },


});