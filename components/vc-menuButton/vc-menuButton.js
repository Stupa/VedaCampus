Polymer({
    is: "vc-menuButton",
    properties: {        
        icon: {
            type: String,
            value: "components/vc-menuButton/images/Bouton01.png"
        },
        pressed: {
            type: Boolean,
            value: false,
            notify: true,
            reflectToAttribute: true
        },
        page: {
            type: String,
            reflectToAttribute: true,
            value: "../vc-userView/userView"
        },
    },
    listeners: {
        'tap': 'toggle'
    },
    toggle: function () {
        this.pressed = !this.pressed;
        //alert('dansbutton '+this.page);
        this.fire('eventFromChild', { page: this.page });
    },
    ready: function () {
        //var img = new Image();
        //img.src = this.icon;
        //this.customStyle['--vc-menuButtonWidth'] = img.width + 'px';
        //this.customStyle['--vc-menuButtonHeight'] = img.height + 'px';
        //this.updateStyles();
        //console.log('Ca marche !');
    }
});