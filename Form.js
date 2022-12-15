class Form{
    constructor(){
        this.start = createButton("Play");
        this.title = createElement('h1');
        this.title1 = createElement('h1');
        this.title2 = createElement('h1');
        this.instructions = createButton("Instructions");
        this.exit =  createButton("Exit");
        this.credit = createButton("Credits");
       this.restart = createButton("Restart");

        /* 
        this.intrustions1.createElement('h7');
        this.intrustions1.createElement('h7');
        */

    }
    display(){
       // this.title.html("Guardian of the Sea");
       // this.title.position(25,-15);
       // this.title.style('font-size', '55px');
      //  this.title.style('color', 'black');
      //  this.title.style('font-family', 'sans-serif');
        this.restart.hide();
       /* this.title.html("Guardian");
        this.title.position(150,-15);
        this.title.style('font-size', '55px');
        this.title.style('color', 'black');
        this.title.style('font-family', 'sans-serif');
        this.title1.html("of the");
        this.title1.position(200,40);
        this.title1.style('font-size', '55px');
        this.title1.style('color', 'black');
        this.title1.style('font-family', 'sans-serif');
        this.title2.html("Sea");
        this.title2.position(225,90);
        this.title2.style('font-size', '55px');
        this.title2.style('color', 'black');
        this.title2.style('font-family', 'sans-serif');
        */
        this.exit.position(180, 320);
        this.exit.style('width', '200px');
        this.exit.style('height', '40px');
        this.exit.style('background', 'lightgreen');
        this.exit.style('font-family','cursive');
        this.exit.style('font-size','20px');
        this.exit.hide();

        this.start.position(200, 320);
        this.start.style('width', '200px');
        this.start.style('height', '60px');
        this.start.style('background', 'lightgreen');
        this.start.style('font-family','cursive');
        this.start.style('font-size','30px');
        this.instructions.position(200, 220);
        this.instructions.style('width', '200px');
        this.instructions.style('height', '40px');
        this.instructions.style('background', 'lightgreen');
        this.instructions.style('font-family','cursive');
        this.instructions.style('font-size','20px');
        this.credit.position(200, 160);
        this.credit.style('width', '200px');
        this.credit.style('height', '40px');
        this.credit.style('background', 'lightgreen');
        this.credit.style('font-family','cursive');
        this.credit.style('font-size','20px');
        
      
        image(bgImg, 0, 0, 600, 400);
        image(title_img,20,25, 550, 100);
        image(logo,5,310,80,80);



        this.start.mousePressed(()=> {
            this.start.hide();
            this.title.hide();
            gameState = PLAY;
            this.instructions.hide();
            this.credit.hide();
    
        });

      //  this.restart.mousePressed(()=> {
         //   this.restart.hide();
         //   gameState = PLAY;

    
      //  });

        this.credit.mousePressed(()=> {
            this.start.hide();
           // this.title.hide();
            this.instructions.hide();
            this.credit.hide();
           image(instructions_img,50,50,500, 300);
           this.exit.show();
    
        });

        this.instructions.mousePressed(()=> {
            this.start.hide();
           // this.title.hide();
            this.instructions.hide();
            this.credit.hide();
           image(instructions_img,50,50,500, 300);
           this.exit.show();
    
        });

        this.exit.mousePressed(()=> {
            this.start.show();
           // this.title.show();
            this.instructions.show();
            this.credit.show();
            image(bgImg, 0, 0, 600, 400);
            image(title_img,20,25, 550, 100);
           this.exit.hide();
    
        });


    }

    reset(){
        this.restart.show();
        this.restart.position(200,150);
        this.restart.style('width', '200px');
        this.restart.style('height', '50px');
        this.restart.style('background', 'lightgreen');
        this.restart.style('font-family','cursive');
        this.restart.style('font-size','30px');

        this.restart.mousePressed(() => {
            gameState = PLAY
            obstaclesGroup.destroyEach();
            trex.changeAnimation("running",boy_running);
            Point = 0;
            this.restart.hide();
        })
    }


    
   
}