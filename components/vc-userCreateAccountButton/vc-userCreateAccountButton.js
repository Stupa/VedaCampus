Polymer({
    is: 'vc-userCreateAccountButton',
    properties: {
        icon: {
            type: String,
            value: "components/vc-userCreateAccountButton/images/ico04.png"
        },
        pressed: {
            type: Boolean,
            value: false,
            notify: true,
            reflectToAttribute: true
        },
    },
    listeners: {
        'tap': 'createAccount'
    },

    ready: function () {
    },

    createAccount: function () {
        this.fire('eventFromUserCreateAccountButton', {});
    }
});





