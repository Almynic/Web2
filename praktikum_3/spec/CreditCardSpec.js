describe("Creditcard", function() {
  var card;

  describe("Creditcard number", function () {
        it("should not be shorter than 16", function() {
            card = new CreditCard("123456789");
            expect(card.isValid()).not.toBe(true);
        });

        it("should not be longer than 16", function() {
            card = new CreditCard("123456789123456789");
            expect(card.isValid()).not.toBe(true);
        });

        it("should have proper length of 16", function() {
            card = new CreditCard("1123456789123489");
            expect(card.isValid()).toBe(true);
        });

        it("should accept blanks and tabs between numbers", function() {
            card = new CreditCard("1123 45  678         9123489");
            expect(card.isValid()).toBe(true);
        });

        it("should not have anything else but numbers", function() {
            card = new CreditCard("js3 45  678         9123489");
            expect(card.isValid()).not.toBe(true);
        }); 

        it("should not be an empty string", function() {
            card = new CreditCard("");
            expect(card.isValid()).not.toBe(true);
        });

        it("should not be null", function() {
            card = new CreditCard(null);
            expect(card.isValid()).not.toBe(true);
        });
    });         
});
