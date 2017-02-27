Polymer({
    is: 'vc-userButton',
    properties: {
        buttonid: {
            type: String,
            reflectToAttribute: true
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





