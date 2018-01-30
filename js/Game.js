
class Game {
    constructor(selectorName) {
         this.name = selectorName;
         this.$gameDOMElement = $(selectorName);
         this.timer = 0;
         this.initEvents();
   }

   initEvents() {
        this.$gameDOMElement.find("td").on('click', (event) =>  {
             $(event.target).toggleClass('hit');
        })
        this.$gameDOMElement.find(".btn-start").on('click', () => this.startTimer());
        this.$gameDOMElement.find(".timer").text(this.timer);
   }

   startTimer() {
     this.intervalId	=	setInterval(()=>{
          this.timer++;
          console.log(this.timer);
          this.$gameDOMElement.find(".timer").text(this.timer);
          //stop timer
          if(this.timer === 10) {
            clearInterval(this.intervalId);
          }
     },1000);


   }

}

export { Game };
