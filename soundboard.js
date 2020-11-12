var buttonBlip = document.getElementById('blip-button')
var buttonBoom = document.getElementById('boom-button')
var buttonCoin = document.getElementById('coin-button')

if(buttonBlip){
    buttonBlip.addEventListener('click',function(){
        console.log('Blip was clicked!')
    })
}
else {
    "Miss buttonBlip."
}

if(buttonBoom){
    buttonBoom.addEventListener('click',function(){
        console.log('Boom was clicked!')
    })
}
else {
    "Miss buttonBoom."
}

if(buttonCoin){
    buttonCoin.addEventListener('click',function(){
        console.log('Coin was clicked!')
    })
}
else {
    "Miss buttonCoin."
}
    
  