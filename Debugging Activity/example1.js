function checkPoint1() {
    alert1();
    
    let array = [];
    let x = 0;
    
    function getMultiples() {
        while (x <= 50){
            array.push(x * 2);
            x += 1;
        }
        return array;
    }
    console.log(getMultiples()); 
    
    alert2();
}

function alert1() {
    alert("Oh no! It looks like you are trapped in an infinite loop. Go to the example1.js file and work on checkpoint 1.");
}
function alert2(){
    alert("Congratulations! You have passed checkpoint 1!");
}