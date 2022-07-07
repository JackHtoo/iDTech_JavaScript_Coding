
var fortune = 6;


function fortuneTeller() {

    if (fortune >= 0 && fortune <= 3) {
        results = "Low Fortune";
    }
    
    else if (fortune >= 3 && fortune<= 7) {
        results = "Average Fortune";
    }

    else if (fortune >= 7 && fortune <= 10) {
        results = "Good Fortune";
    }

    else if (fortune > 10) {
        results = "Out Of Range";
    }
    return results; 
}
console.log(fortuneTeller());

