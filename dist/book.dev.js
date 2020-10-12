"use strict";

Number.prototype.mod = function (n) {
  return (this % n + n) % n;
};

new Vue({
  el: "#app",
  data: {
    rotateRaw: 40,
    rotateOld: 0,
    offset: null
  },
  methods: {
    down: function down(ev) {
      this.$el.setPointerCapture(ev.pointerId);
      this.offset = ev.offsetX;
      this.rotateOld = this.rotate;
    },
    up: function up(ev) {
      this.offset = null;
    },
    move: function move(ev) {
      if (this.offset) {
        this.rotateRaw = this.rotateOld - (ev.offsetX - this.offset);
      }
    }
  },
  computed: {
    rotate: function rotate() {
      return this.rotateRaw.mod(180);
    },
    subrotate: function subrotate() {
      if (this.rotate < 40) {
        return this.rotate;
      }

      if (this.rotate < 150) {
        return 40;
      }

      return 180 - this.rotate;
    },
    subcolor: function subcolor() {
      return this.color - this.subrotate / 4;
    },
    subcolor2: function subcolor2() {
      return this.color - this.subrotate / 2;
    },
    color: function color() {
      if (this.rotate < 90) {
        return 255 - this.rotate / 4;
      }

      return 255 - (180 - this.rotate) / 4;
      ;
    },
    opacity: function opacity() {
      if (this.rotate < 5) {
        return 0.5;
      }

      if (this.rotate > 160) {
        return (180 - this.rotate) / 20;
      }
    },
    edge2: function edge2() {
      return {
        transform: "rotateY(-".concat(this.subrotate, "deg)"),
        background: "rgba(".concat(this.subcolor2, ", ").concat(this.subcolor2, ", ").concat(this.subcolor2, ",1)")
      };
    },
    edge: function edge() {
      return {
        transform: "rotateY(-".concat(this.subrotate / 2, "deg)"),
        background: "rgba(".concat(this.subcolor, ", ").concat(this.subcolor, ", ").concat(this.subcolor, ",1)")
      };
    },
    singlePageObj: function singlePageObj() {
      return {
        transform: "rotateY(-".concat(this.rotate, "deg)"),
        background: "rgba(".concat(this.color, ", ").concat(this.color, ", ").concat(this.color, ",1)"),
        opacity: this.opacity
      };
    }
  }
});