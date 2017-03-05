Polymer({
    is: 'vc-user-main-panel-button',
    behaviors: [Polymer.NeonAnimationRunnerBehavior,
      Polymer.IronResizableBehavior
    ],

    properties: {
        opened: {
            type: Boolean,
            notify: true,
            value: false,
            observer: "_mainPanelMove"

        },
        sliderwidth: {
            type: String,
            observer: "_setMainPanelWidth"
        },
        transformParam: {
            type: Number
        },
        usermainpanelicon: {
            type: String
        },
        animationConfig: {
            value: function () {
                return {
                    'entry': {
                        name: 'vc-slide-left-animation',
                        node: this,
                        timing: { delay: 30, duration: 300 },
                    },
                    'exit': {
                        name: 'vc-slide-from-left-animation',
                        node: this,
                        timing: { delay: 40, duration: 300 },
                    }
                }
            }
        }
    },
    listeners: {
        'tap': '_switchopened',
        'neon-animation-finish': '_onNeonAnimationFinish'
    },

    _setMainPanelWidth: function () {
        if (this.sliderwidth > 0) {
            this.transformParam = (this.sliderwidth - 30) * 100 / this.sliderwidth;
            this.$.slideContainer.style.width = this.sliderwidth + "px";
            this.style.width = this.sliderwidth + "px";
        }
    },

    _switchopened: function () {
        if (this.sliderwidth > 0) {
            this.opened = !this.opened;
        }
    },

    _mainPanelMove: function () {
        /*alert(this.sliderwidth);*/
        console.log(this.sliderwidth);

        if (this.sliderwidth > 0) {
            if (this.opened == true) {                                      
                this.mainPanelButtonHide();
            }
            else {
                this.mainPanelButtonShow();
            }
        }
    },

    mainPanelButtonShow: function () {
        this.playAnimation('entry');
    },

    mainPanelButtonHide: function () {
        this.playAnimation('exit');
    },

    _onNeonAnimationFinish: function () {
        var tempWidthNumber = 0
        if (!this.opened) {
            tempWidthNumber = 30 - this.sliderwidth
            this.style.right = tempWidthNumber + "px";
        }
        else {
            this.style.right = 0;
        }
    },


});





