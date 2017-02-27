Polymer({
    is: 'vc-userPhoneEdit',
    properties: {
        simplevalue: {
            type: String,
            observer: "simpleChanged",
            notify: true,
        },
        simplelabel: {
            type: String,
            notify: true,
        }
    },
    simpleChanged: function () {
    }
});