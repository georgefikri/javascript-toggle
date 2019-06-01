(function(){

let firstDiv = document.getElementById('div1');
let burger = document.getElementById('burger');
let secondDiv = document.getElementById('div2');
let closeX = document.getElementsByClassName('closeX')[0]

//function to show the second div
function showSecondDiv() {
    //secondDiv.setAttribute('class' , 'show');
    if (secondDiv.classList.contains('hide') ) {
        secondDiv.setAttribute('class' , 'show');
        secondDiv.classList.remove('hide');
    } else {
        secondDiv.setAttribute('class' , 'hide');
        secondDiv.classList.remove('show');
    }
    
}



//function to hide the second div from the second div itself
function hideSecondDiv() {
    secondDiv.setAttribute('class' , 'hide');
}


//add click event on burger
burger.addEventListener('click', showSecondDiv)


//add click event on X  to hide it
closeX.addEventListener('click' , hideSecondDiv)


})();