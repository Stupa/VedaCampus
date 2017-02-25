Polymer({
    is: 'vc-userLoginButton',
    properties: {
        icon: {
            type: String,
            value: "components/vc-userLoginButton/images/ico04.png"
        },
        pressed: {
            type: Boolean,
            value: false,
            notify: true,
            reflectToAttribute: true
        },
        email: {
            type: String,
            value: ''
        },
        password: {
            type: String,
            value: ''
        },
    },
    listeners: {
        'tap': 'logUser'

    },

    ready: function () {
     
    },

    logUser: function () {
        this.fire('eventFromUserLoginButton', { txtEmail: this.email,txtPassword: this.password });
    }
});





