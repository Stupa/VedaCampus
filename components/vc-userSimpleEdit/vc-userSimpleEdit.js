Polymer({
    is: 'vc-userSimpleEdit',
    properties: {
        simple: {
            type: String,
            observer: "simpleChanged",
            notify: true,
        },
        simpleLabel: {
            type: String,
            notify: true,
        }
    },
    simpleChanged: function () {
        var valid = this.$.txtSimple.validate();
        if ((!valid) || (this.$.txtSimple.value == '@') || (this.$.txtSimple.value == '.')) {
        }
        else {

        }
    }
});