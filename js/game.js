class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value" , (data) => {
            gameState = data.val();
        })
    }
    update(state){
        database.ref('gameState').update({gameState : state })
    }
   async start(){
        if(gameState == 0){
         
            player = new Player();
var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
        }
        form = new Form();
        form.display();
        }
    car1 = createSprite(100,200,30,30);
    car2 = createSprite(300,200,30,30);
    car3 = createSprite(500,200,30,30);
    car4 = createSprite(700,200,30,30);
    cars = [car1,car2,car3,car4];
    }
    play(){
        form.hide();
        
    }
}
