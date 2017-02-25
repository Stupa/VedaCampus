Polymer({
    is: 'vc-userEmailEdit',
    properties: {
        email: { 
            type: String, 
            observer: "emailChanged",
            notify: true,
         }
    },
    emailChanged: function () {
        var valid = this.$.txtEmail.validate();
        if ((!valid) || (this.$.txtEmail.value == '@') || (this.$.txtEmail.value == '.')) {
        }
        else {
            
        }
    }
});