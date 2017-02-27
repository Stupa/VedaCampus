Polymer({
    is: 'vc-userPhoneEdit',

    behaviors: [
        Polymer.IronValidatableBehavior
    ],

    properties: {
        /*value: { notify: true, type: String, observer: '_handleValueChanged' },*/
        _n1: { type: String },
        _n2: { type: String },
        _n3: { type: String },
        _n4: { type: String },
        _n5: { type: String },
        validator: { type: String, value: 'ssn-validator' },
        phonenumbervalue: {
            type: String,
            observer: "simpleChanged",
            notify: true,
        },
        phonenumberlabel: {
            type: String,
        }
    },

    observers: [
        '_computeValue(_n1,_n2,_n3,_n4,_n5)'
    ],

    _computeValue: function (n1, n2, n3, n4, n5) {
        this.phonenumbervalue = n1.trim() + '-' + n2.trim() + '-' + n3.trim() + '-' + n4.trim() + '-' + n5.trim();        
    },

    ready: function () {
    },

    simpleChanged: function () {
        var arr = this.phonenumbervalue.split("-");
        this._n1 = arr[0];
        this._n2 = arr[1];
        this._n3 = arr[2];
        this._n4 = arr[3];
        this._n5 = arr[4];
    }
});