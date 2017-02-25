Polymer({
    is: 'vc-userValidateAccountButton',
    properties: {
        icon: {
            type: String,
            value: "components/vc-userValidateAccountButton/images/ico04.png"
        },
        pressed: {
            type: Boolean,
            value: false,
            notify: true,
            reflectToAttribute: true
        },
    },
    listeners: {
        'tap': 'validateAccount'
    },

    ready: function () {
    },

    validateAccount: function () {
        this.fire('eventFromUserValidateAccountButton', {});
    }
});





