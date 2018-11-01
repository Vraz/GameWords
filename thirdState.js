
var secondState = {


    preload: function() {
        game.load.image('backGround2', "assets/images/backGround2.png");
        game.load.image('letterM', "assets/images/letterE1.png");  
        game.load.image('letterA', "assets/images/letterA2.png");  
        game.load.image('letterG', "assets/images/letterR.png");  
        game.load.image('letterI', "assets/images/letterT.png");  
        game.load.image('letterC', "assets/images/letterH.png");    
    },

    create: function() {

        game.time.reset();
        backGround = game.add.tileSprite (0,0,800,600,'backGround2'); 

        letters = game.add.group();

        letterM = game.add.sprite(0, 0, 'letterM');
        letters.add(letterM);
        letterA = game.add.sprite(0, 0, 'letterA');
        letters.add(letterA);
        letterG = game.add.sprite(0, 0, 'letterG');
        letters.add(letterG);
        letterI = game.add.sprite(0, 0, 'letterI');
        letters.add(letterI);
        letterC = game.add.sprite(0, 0, 'letterC');
        letters.add(letterC);
        
        letters.x = this.world.centerX ;
        letters.y = this.world.centerY ;

        kontrolniNiz = [letterM,letterA,letterG,letterI,letterC];      
        glavniNiz = [letterM,letterA,letterG,letterI,letterC];      

        tweensStart();
  
        glavniNiz.forEach(function(element) {

            element.inputEnabled = true;         
            element.events.onInputDown.add(newArrayCreate, this)

            function newArrayCreate() { 
                noviNiz.push(element);
                console.log(noviNiz.length);
                
                secondaryTweens();
    
                for(i=0; i<kontrolniNiz.length; i++) {
                    if(noviNiz[i] == kontrolniNiz[i]){
                        tru++;
                        console.log(tru);
                    
                    }
                }

                if(noviNiz.length == 5 && tru == 5){
                    game.time.events.add(Phaser.Timer.SECOND * 2, delay, this);
           
                    function delay(){  
                        noviNiz = [];      
                        game.state.start('firstState',true,false);  
                        tru = 0;
                    } 
               
                } else{   
                    game.time.events.add(Phaser.Timer.SECOND * 2, delay, this);
            
                    function delay(){  
                        tweensStart();  
                        tru = 0; 
                        noviNiz = [];      
                        
                    }
                }
            
            }     

        });
        
        styleTajmer = { font: "22px robotobold", fill: "#8e0", tabs: [ 150, 150, 200 ], align: 'center' };
        tajmer = game.add.text (this.world.centerX - 385,570, 'Time : '  ,styleTajmer);

        stylemainWord = { font: "40px robotobold", fill: "#ff0", tabs: [ 150, 150, 200 ], align: 'center' };
        zadataRec = game.add.text (this.world.centerX - 60,4, 'Earth',stylemainWord);
    
  
    },

    update:function() {

        t = game.time.now;
        zadataRec.anchor.x = 0.1 * ( Math.sin(2 * Math.PI * t / 3000 - 3 * Math.PI / 4));
        zadataRec.anchor.y = 0.1 * (1 + Math.cos(1 * Math.PI * t / 3000 - 3 * Math.PI / 2));

        glavniNiz.forEach(function(element) {
            element.anchor.x = 0.1 * ( Math.sin(1 * Math.PI * t / 3000 - 3 * Math.PI / 2));
            element.anchor.y = 0.1 * (1 + Math.cos(1 * Math.PI * t / 3000 - 3 * Math.PI / 2));
        });
    
        tajmer2.kill();
        tajmer2 = game.add.text (this.world.centerX - 320,570, game.time.totalElapsedSeconds().toFixed(2),styleTajmer);
        
    }


}



game.state.add('thirdState', secondState);



   