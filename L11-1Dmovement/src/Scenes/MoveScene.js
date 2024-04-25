class MoveScene extends Phaser.Scene{
    constructor(){
        super("moveCcene");
        this.my = {sprite: {}};

        this.startX = 500;
        this.startY = 700;

        this.direction = true; //true = right ****** false = left


    }

    preload(){
        this.load.setPath("./assets/");

        this.load.image("hotdog", "hotdog.png");
        this.load.image("redSign", "sign_red.png");

        document.getElementById('description').innerHTML = '<h2>MoveScene.js</h2>'


    }

    create(){
        let my = this.my;

        

        my.sprite.hotdog = this.add.sprite(this.startX, this.startY, "hotdog");
        my.sprite.hotdog.setScale(5);

        my.sprite.sign = this.add.sprite(my.sprite.hotdog.x, my.sprite.hotdog.y, "redSign");
        my.sprite.sign.setScale(5);
        my.sprite.sign.visible = false;


    }

    update(){
        
        let my = this.my;

        let keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        let keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        let keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        if(keyD.isDown){
            if(this.direction != true){
                my.sprite.hotdog.flipX = false;
                this.direction = true;
            }
            my.sprite.hotdog.x += 5;
        }
        if(keyA.isDown){
            if(this.direction == true){
                my.sprite.hotdog.flipX = true;
                this.direction = false;

            }
            my.sprite.hotdog.x -= 5;
        }

        if(keySpace.isDown){
            
    
            if(!my.sprite.sign.visible){
                my.sprite.sign.visible = true;
                my.sprite.sign.x = my.sprite.hotdog.x;
                my.sprite.sign.y = my.sprite.hotdog.y;
            }
        }

        if(my.sprite.sign.visible){
            my.sprite.sign.y -= 10;
        }
        if(my.sprite.sign.y < -50){
            my.sprite.sign.visible = false;
        }



        


    }




}