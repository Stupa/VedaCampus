Polymer({
    is: 'vc-user-edit',
    properties: {
        value: {
            type: String,
            value: '',
            observer: "_changed",
            notify: true,
        },
        label: {
            type: String,
            notify: true,
        },
        error: {
            type: Boolean,
            value: true,
            notify: true
        },
        parenterror: {
            type: Boolean,
            notify: true,
            value: true,
            /*observer: '_isInvalid'*/
        },
    },
    _changed: function () {
        //var valid = this.$.txt.validate();
       /* var strtest = this.value;
        var regex = /^[A-Za-z0-9]{0,254}$/;
        var goodFormat = false;
        goodFormat = (strtest.match(regex) != null);
        this.error = !goodFormat || this.parenterror;
        console.log("ISINVALIDBEFORE");
        console.log("PARENTERROR " + this.parenterror);
        console.log("ERROR " + this.error);
        if (this.error) {
            this.$.input.invalid = this.error;
            console.log("PASSEDVALID");
        }
        else {
            this.$.input.invalid = 'undefined';
            console.log("PASSEDINVALID");
        }
        console.log("ISINVALID");
        console.log("PARENTERROR " + this.parenterror);
        console.log("ERROR " + this.error);
        console.log("INVALID" + this.$.input.invalid);*/
    },




});