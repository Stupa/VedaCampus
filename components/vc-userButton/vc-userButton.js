Polymer({
    is: 'vc-userButton',
    properties: {
        buttonid: {
            type: String,
            reflectToAttribute: true
        },
        disabled: {
            type: Boolean,
            value: false,
        },
        buttonlabel: {
            type: String,
            reflectToAttribute: true
        },
        buttonimage: {
            type: String,
            reflectToAttribute: true,
            value: "../../components/vc-userView/images/login_enabled.png"
        },
    },

});





