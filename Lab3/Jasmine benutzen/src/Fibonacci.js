/**
 * Created by Nicolas on 04.03.2016.
 */

function Fibonacci() {
};
Fibonacci.prototype.calculate = function(number) {
    if(number < 0){
        return 0;
    }
    if (number == 0 || number == 1){
        return number;
    } else {
        return (this.calculate(number-1) + this.calculate(number-2));
    }
};

Fibonacci.prototype.firstN = function(number){
    var fibonacci = new Array();

    for(var i=0; i <= number; i++){
        console.log(i);
        fibonacci[i] = this.calculate(i);
    }
    return fibonacci;
};