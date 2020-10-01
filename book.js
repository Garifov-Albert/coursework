Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};
new Vue({
  el:"#app",
  data:{
    rotateRaw: 40,
    rotateOld: 0,
    offset: null,
  },
  methods:{
    down(ev){
      this.$el.setPointerCapture(ev.pointerId)
      this.offset = ev.offsetX;
      this.rotateOld = this.rotate;
    },
    up(ev){
      this.offset = null;
    },
    move(ev){
      if(this.offset){
        this.rotateRaw = this.rotateOld - (ev.offsetX - this.offset)
        
      }
    }
    
  },
  computed: {
    rotate(){
      return  this.rotateRaw.mod(180);      
    },
    subrotate(){
      if(this.rotate < 40){
        return this.rotate;
      }
      if(this.rotate < 150){
        return 40;
      }
      return 180 - this.rotate;
    },
    subcolor(){
      return this.color - this.subrotate / 4;
    },
    subcolor2(){
      return this.color - this.subrotate / 2;
    },
    color(){
      if(this.rotate < 90){
        return 255 - this.rotate / 4;
      }
      return 255 - (180 - this.rotate) / 4;;
    },
    opacity(){
      if(this.rotate < 5){
        return 0.5;
      }
      if(this.rotate > 160){
        return (180 - this.rotate) / 20;
      }
    },
    edge2(){
      return {
        transform: `rotateY(-${this.subrotate}deg)`,
        background: `rgba(${this.subcolor2}, ${this.subcolor2}, ${this.subcolor2},1)`
        
      }      
    },    
    edge(){
      return {
        transform: `rotateY(-${this.subrotate/2}deg)`,
        background: `rgba(${this.subcolor}, ${this.subcolor}, ${this.subcolor},1)`
        
      }      
    },
    
    singlePageObj(){
      return {
        transform: `rotateY(-${this.rotate}deg)`,
        background: `rgba(${this.color}, ${this.color}, ${this.color},1)`,
        opacity: this.opacity
      }
    }
  }
})