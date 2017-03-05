Polymer({
    is: 'vc-userCreateAccountButton',
    properties: {
        buttonimage: {
            type: String,
            value: "../../components/vc-user/images/edit_account.png"
        }
    },
    listeners: {
        'tap': 'createAccount'
    },

    createAccount: function () {
        this.fire('eventFromUserCreateAccountButton', {});
    }
});





