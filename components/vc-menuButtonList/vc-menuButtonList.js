Polymer({
    is: "vc-menuButtonList",
    properties: {
        page: {
            type: String,
            reflectToAttribute: true,
        },
        buttons: {
            type: Array,
            value: [
                {"page": "Simba","icon": "components/vc-menuButton/images/Bouton01.png"},
                {"page": "Simbu","icon": "components/vc-menuButton/images/Bouton02.png"},
                {"page": "Simbi","icon": "components/vc-menuButton/images/Bouton03.png"},
            ]
        }
    },

    addButton: function(button) {
        this.push(this.buttons, button);
      },

    ready: function () {
        this.addEventListener('eventFromChild', this.myAction);
    },
    myAction: function (event) {
        //console.log(event.detail);
        //alert(event.detail.icon);
        this.page = event.detail.page;        
        this.fire('eventFromChild2', event.detail);
        
    },

});