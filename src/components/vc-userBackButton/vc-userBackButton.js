Polymer({
    is: 'vc-userBackButton',
    properties: {
        buttonimage: {
            type: String,
            value: "../../components/vc-user/images/back.png"
        }
    },
    listeners: {
        'tap': 'backUser'
    },
    backUser: function () {
        this.fire('eventFromUserBackButton', {});
    }
});





