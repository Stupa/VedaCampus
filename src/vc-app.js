Polymer({
    is: 'vc-app',

    properties: {
        page: {
            type: String,
            reflectToAttribute: true,
            observer: '_pageChanged',
        },
        dbrootDAO: Object,
        authDomain: {
            type: String,
            notify: true,
            reflectToAttribute: true,
        },
        databaseUrl: {
            type: String,
            notify: true,
            reflectToAttribute: true,
        },
        apiKey: {
            type: String,
            notify: true,
            reflectToAttribute: true,
        }
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
        // Load page import on demand. Show 404 page if fails
        var resolvedPageUrl = this.resolveUrl('vc-' + page + '.html');
        this.importHref(resolvedPageUrl, null, this._showPage404, true);
    },

    _showPage404: function () {
        this.page = 'view404';
    },

    ready: function () {
        this.dbrootDAO = new dbrootDAO();
        this.authDomain = this.dbrootDAO.getConfig().authDomain;
        this.databaseUrl = this.dbrootDAO.getConfig().databaseURL;
        this.apiKey = this.dbrootDAO.getConfig().apiKey;
        this.addEventListener('eventFromChild2', this.myAction);
    },

    myAction: function (event) {
        this.page = event.detail.page;
    },

});