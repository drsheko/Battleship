/*



const gameBoard = ()=> {
    let userGameBoard = []
    let missedAttack =[];
    const createGameBoard = ()=>{ 
        
        for(let i=1 ; i<=10 ; i++){
            for(let j = 1 ; j <= 10 ; j++){
                userGameBoard.push([i,j])
            }
        }
        return userGameBoard
    }
   // let myShips = ships
   /* const placeShips = (shipEx)=>{
        let shipsCoordinates = [];
        shipsCoordinates.push(shipEx.coordinates)
    }*/
/*
    const receiveAttack = (spot) =>{
       for (let k=0 ; k< shipsCoordinates.length ; k++){
           if (spot === shipsCoordinates[k]){ alert('hit')}
           else {missedAttack.push(spot)}
       }

    }
    return createGameBoard

}


const player = (plName ) =>{
    const name = plName ;
    const playerGameBoard = gameBoard()
    //let myShips = [ships] ;
    //let playerAttack = (attackSpot) =>{

   // }
}

const player1 = player('shady')
console.log(player1.playerGameBoard())

let computerSelections =[];

const computer = () =>{
   let compX =  Math.floor(Math.random()*10)
   let compY =  Math.floor(Math.random()*10)
   return [compX , compY]
}


function populateDisplay (){
    //gameBoard.createGameBoard()
    for(let s = 0 ; s<userGameBoard.length ; s++){
       let square =  document.createElement('div')
       square.id = "square"
    }
}
const sheko = gameBoard('shady')
sheko.createGameBoard()
console.log(userGameBoard)
*/


class ship {
    constructor(length ,isVertical ,isHorizontal ,startCol , startRow){
        this.length = length ;
        this.isVertical = isVertical ;
        this.isHorizontal = isHorizontal ;
        this.startColumn  = startCol ;
        this.startRow = startRow ; 
        this.coordinates = () =>{
            let shipsCoordinates =[];
            if (isVertical ===true){
                for( let i =1 ; i <= this.length ; i++){
                    shipsCoordinates.push([this.startRow , i])
                }
            }
            if (isHorizontal ===true){
                for( let i =1 ; i <= this.length ; i++){
                    shipsCoordinates.push([i , this.startCol])
                }
            }
            return shipsCoordinates
        };
        this.attackedSpots = 0
        this.hit = (spot) =>{
            for( let i =0 ; i< coordinates.length ; i++){
                if(spot === Coordinates[i]){
                    return this.attackedSpots += 1 ;
                }
            }
        }
        this.isSunk = ()=>{
            if (this.attackedSpots ===this.length){
                return true ;
            
            }
            else { return false ;}
        }
    }
}


/*class gameBoard {
    constructor(ships , ){
        this.placeShips = (ships) {
            
        }
    }
}*/