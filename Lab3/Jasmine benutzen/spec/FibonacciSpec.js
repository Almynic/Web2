/**
 * Created by Nicolas on 04.03.2016.
 */

describe("Fibonacci", function() {
    var fibonacci;

    beforeEach(function() {
        fibonacci = new Fibonacci();
    });

    it("Should return F2 of Fibonacci (1)", function() {
        expect(fibonacci.calculate(2)).toEqual(1);
    });

    it("Should return F6 of Fibonacci (8)", function() {
        expect(fibonacci.calculate(6)).toEqual(8);
    });

    it("Should return F17 of Fibonacci (1597)", function() {
        expect(fibonacci.calculate(17)).toEqual(1597);
    });

    it("Should return array to F10 of Fibonacci", function() {
        fibs=new Array();
        fibs[0]=0;
        fibs[1]=1;
        fibs[2]=1;
        fibs[3]=2;
        fibs[4]=3;
        fibs[5]=5;
        fibs[6]=8;
        fibs[7]=13;
        fibs[8]=21;
        fibs[9]=34;
        fibs[10]=55;
        expect(fibonacci.firstN(10)).toEqual(fibs);
    });
});