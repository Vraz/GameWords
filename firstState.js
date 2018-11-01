var game = new Phaser.Game(800,600,Phaser.CANVAS,'gameDiv');

var letterM;
var letterA;
var letterG;
var letterI;
var letterC;

var tweenA;
var tweenB;
var tweenC;
var tweenD;
var tweenE;

var tweenA1;
var tweenB1;
var tweenC1;
var tweenD1;
var tweenE1;

var tajmer;
var tajmer2;

var glavniNiz = [];
var noviNiz = [];

var t;

var tru = 0;

var firstState = {
 
    preload:function() {
        game.load.image('backGround', "assets/images/backGround.png");
        game.load.image('letterM', "assets/images/letterM.png");  
        game.load.image('letterA', "assets/images/letterA.png");  
        game.load.image('letterG', "assets/images/letterG.png");  
        game.load.image('letterI', "assets/images/letterI.png");  
        game.load.image('letterC', "assets/images/letterC.png");    
    },

    create:function() {

        game.time.reset();
        backGround = game.add.tileSprite (0,0,800,600,'backGround'); 

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
            
                secondaryTweens();
    
                for(i=0; i<glavniNiz.length; i++) {
                    if(noviNiz[i] == glavniNiz[i]){
                        tru++;
                    }
                }

                if(noviNiz.length == 5 && tru == 5){
                    game.time.events.add(Phaser.Timer.SECOND * 2, delay, this);
           
                    function delay(){  
                        noviNiz = [];      
                        game.state.start('secondState',true,false);  
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
        tajmer2 = game.add.text (0.5,0.5, ''  ,styleTajmer);

        stylemainWord = { font: "40px robotobold", fill: "#ff0", tabs: [ 150, 150, 200 ], align: 'center' };
        zadataRec = game.add.text (this.world.centerX - 60,4, 'Magic',stylemainWord); 

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

function tweensStart() {

    for (i = 0; i < glavniNiz.length; i++) {
        glavniNiz[i].x = 0;
        glavniNiz[i].y = 0;
    }

    // pomeranje tweenova
    if (tweenA) {
        game.tweens.remove(tweenA);
    }
    tweenA = game.add.tween(letterM).to( { x: -200 + Math.floor(Math.random() * 400), y : -200 + Math.floor(Math.random() * 400) }, 2000, "Quart.easeOut", true);

    if (tweenB) {
        game.tweens.remove(tweenB);
    }
    tweenB = game.add.tween(letterA).to( { x: -200 + Math.floor(Math.random() * 400), y : -200 + Math.floor(Math.random() * 400) }, 2000, "Quart.easeOut", true);

    if (tweenC) {
        game.tweens.remove(tweenC);
    }
    tweenC = game.add.tween(letterG).to( { x: -200 + Math.floor(Math.random() * 400), y : -200 + Math.floor(Math.random() * 400) }, 2000, "Quart.easeOut", true);

    if (tweenD) {
        game.tweens.remove(tweenD);
    }
    tweenD = game.add.tween(letterI).to( { x: -200 + Math.floor(Math.random() * 400), y : -200 + Math.floor(Math.random() * 400) }, 2000, "Quart.easeOut", true);

    if (tweenE) {
        game.tweens.remove(tweenE);
    }
    tweenE = game.add.tween(letterC).to( { x: -200 + Math.floor(Math.random() * 400), y : -200 + Math.floor(Math.random() * 400) }, 2000, "Quart.easeOut", true);
    //rotacija tweenova
    if (tweenA1) {
        game.tweens.remove(tweenA1);
    }
    tweenA1 = game.add.tween(letterM).to( { angle: Math.floor((Math.random() * 150) )}, 500, Phaser.Easing.Linear.None, true);
    if (tweenB1) {
        game.tweens.remove(tweenB1);
    }
    tweenB1 = game.add.tween(letterA).to( { angle: Math.floor((Math.random() * 150) )}, 500, Phaser.Easing.Linear.None, true);
    if (tweenC1) {
        game.tweens.remove(tweenC1);
    }
    tweenC1 = game.add.tween(letterG).to( { angle: Math.floor((Math.random() * 150) )}, 500, Phaser.Easing.Linear.None, true);
    if (tweenD1) {
        game.tweens.remove(tweenD1);
    }
    tweenD1 = game.add.tween(letterI).to( { angle: Math.floor((Math.random() * 150) )}, 500, Phaser.Easing.Linear.None, true);
    if (tweenE1) {
        game.tweens.remove(tweenE1);
    }
    tweenE1 = game.add.tween(letterC).to( { angle: Math.floor((Math.random() * 150) )}, 500, Phaser.Easing.Linear.None, true);
}

function secondaryTweens() {
    
    for (i = 0; i < noviNiz.length; i++) {
        noviNiz[i].x ;
        noviNiz[i].y ;
    }

    game.tweens.remove(tweenA);
    game.tweens.remove(tweenB);
    game.tweens.remove(tweenC);
    game.tweens.remove(tweenD);
    game.tweens.remove(tweenE);

    tweenA = game.add.tween(noviNiz[0]).to( {x:-130 , y :200 }, 400, Phaser.Easing.Linear.None, true);
    tweenB = game.add.tween(noviNiz[1]).to( {x:-70 , y :200 }, 400, Phaser.Easing.Linear.None, true);
    tweenC = game.add.tween(noviNiz[2]).to( {x:-10 , y :200 }, 400, Phaser.Easing.Linear.None, true);
    tweenD = game.add.tween(noviNiz[3]).to( {x:50 , y :200 }, 400, Phaser.Easing.Linear.None, true);
    tweenE = game.add.tween(noviNiz[4]).to( {x:110 , y :200 }, 400, Phaser.Easing.Linear.None, true);

    tweenA1 = game.add.tween(noviNiz[0]).to( { angle: 0}, 500, Phaser.Easing.Linear.None, true);
    tweenB1 = game.add.tween(noviNiz[1]).to( { angle: 0}, 500, Phaser.Easing.Linear.None, true);
    tweenC1 = game.add.tween(noviNiz[2]).to( { angle: 0}, 500, Phaser.Easing.Linear.None, true);
    tweenD1 = game.add.tween(noviNiz[3]).to( { angle: 0}, 500, Phaser.Easing.Linear.None, true);
    tweenE1 = game.add.tween(noviNiz[4]).to( { angle: 0}, 500, Phaser.Easing.Linear.None, true);

}



game.state.add('firstState', firstState);

game.state.start('firstState');



   