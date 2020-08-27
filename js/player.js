class Player{
    constructor(){

    }
getCount(){
  var playerCountRef = database.ref('playerCount')
  playerCountRef.on("value" , (data)=>{
      playerCount = data.val();
  })
    
}
 updateCount(count) {
     database.ref('playerCount').update({playerCount : count})
 }  
 static getPlayerInfo(){
    var playerInfoRef = database.ref('players')
    playerInfoRef.on("value" , (data)=>{
        allPlayers = data.val();
    })
 }
}