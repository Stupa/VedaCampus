Polymer({
    is: 'vc-userSimpleEdit',
    properties: {
        simplevalue: {
            type: String,
            value: '',
            observer: "simpleChanged",
            notify: true,
        },
        simplelabel: {
            type: String,
            notify: true,
        },
        simpleerror: {
            type: Boolean,
            value: false,
            notify: true
        }
    },
    simpleChanged: function () {
        //var valid = this.$.txtSimple.validate();
        var strtest = this.simplevalue;
        var regex = /^[A-Za-z0-9]{0,254}$/;
        var goodFormat = false;
        
        goodFormat = (strtest.match(regex) != null);
        this.simpleerror = !goodFormat;
    }
});