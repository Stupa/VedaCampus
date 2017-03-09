Polymer({
    is: 'vc-user-slider',

    behaviors: [
        Polymer.NeonAnimationRunnerBehavior,
    ],

    properties: {
        opened: {
            type: Boolean,
            notify: true,
            value: true,
            reflectToAttribute: true,
            observer: "_mainPanelMove"
        },
        toggle: {
            type: Boolean,
            value: false,
        },
        waitedevent: {
            type: String,
            value: '',
        },
        transformParam: {
            type: Number
        },
        backwidth: {
            type: String,
        },
        animationConfig: {
            value: function () {
                return {
                    'entry': {
                        name: 'vc-slide-left-animation',
                        node: this,
                        timing: { duration: 3000 },
                    },
                    'exit': {
                        name: 'vc-slide-from-left-animation',
                        node: this,
                        timing: { duration: 3000 },
                    }
                }
            }
        }
    },

    listeners: {
        'neon-animation-finish': '_onNeonAnimationFinish'
    },


    ready: function () {
        this.addEventListener('eventFromUserMainPanelButton', this._switchopened);
    },

    _setMainPanelWidth: function () {
        if (this.offsetWidth > 0) {
            this.transformParam = (this.offsetWidth - 32) * 100 / this.offsetWidth;
        }
    },

    _switchopened: function () {
        if (this.offsetWidth > 0) {
            this.toggle = !this.toggle;
            this.opened = !this.opened;
        }
    },

    _mainPanelMove: function () {
        this.fire('eventFromSliderDisablePointerEvents', {});
 
        var backWidthNumber;
        if (this.offsetWidth > 0) {
            if (this.opened == true) {
                this._setMainPanelWidth();
                this.mainPanelButtonHide();
            }
            else {
                this.style.marginLeft = 0 + "px";
                backWidthNumber = 32 - this.offsetWidth;
                this.backwidth = backWidthNumber + "px";
                this.style.marginRight = this.backwidth;
                this._setMainPanelWidth();
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
        if (this.opened) {
            if (!this.toggle) {
                tempWidthNumber = this.offsetLeft;
                this.style.marginLeft = tempWidthNumber + "px";
                if (this.waitedevent != '') {
                    this.fire(this.waitedevent, {});
                }
            }
            else {
              tempWidthNumber = 32 -this.offsetWidth;
              this.style.marginRight = tempWidthNumber + "px";
            }
        }
        else {
            this.style.marginRight = 0;
        }
        this.fire('eventFromSliderEnablePointerEvents', {});

    },

});





