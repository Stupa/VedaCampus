Polymer({
    is: 'vc-user-main-panel-button',
    behaviors: [Polymer.NeonAnimationRunnerBehavior],

    properties: {
        opened: {
            type: Boolean,
            notify: true,
            value: false,
            observer: "loginPanelMove"

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
                    'entryLogin': {
                        name: 'vc-slide-right-animation',
                        node: this,
                        timing: { delay: 30, duration: 300 },
                    },
                    'exitLogin': {
                        name: 'vc-slide-from-right-animation',
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

    loginPanelMove: function () {
        if (this.sliderwidth > 0) {
            if (this.opened == true) {
                this.openedButtonLoginHide();
            }
            else {
                this.openedButtonLoginShow();
            }
        }
    },

    openedButtonLoginShow: function () {
        /*this.opened = true;*/
        this.playAnimation('entryLogin');
    },

    openedButtonLoginHide: function () {
        /*this.opened = false;*/
        this.style.right = 0;
        this.playAnimation('exitLogin');
    },

    _onNeonAnimationFinish: function () {
        var tempWidthNumber = 0
        if (!this.opened) {
            tempWidthNumber = 30 - this.sliderwidth
            this.style.right = tempWidthNumber + "px";
        }
        else {

        }
        /*this.opened = !this.opened;*/
    },


});





