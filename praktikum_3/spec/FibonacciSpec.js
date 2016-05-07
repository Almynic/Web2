describe("Fibonacci", function() {
    it("Should not be null", function (){
        expect(fibonacci(null)).toBe(false);
    });

    it("Should be bigger than 0", function (){
        expect(fibonacci(0)).toBe(false);
    });

    it("Value should be 1 for limit 1", function (){
        var arr = fibonacci(1);

        expect(arr[arr.length -1]).toBe(1);
    });

    it("Value should be 1 for limit 2", function (){
        var arr = fibonacci(2);

        expect(arr[arr.length -1]).toBe(1);
    });

    it("Value should be 55 for limit 10", function (){
        var arr = fibonacci(10);

        expect(arr[arr.length -1]).toBe(55);
    });
});
