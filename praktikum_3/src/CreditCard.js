function CreditCard(cardNumber) {
    this.cardNumber = cardNumber;
} 

CreditCard.prototype.isValid = function() {
    if (this.cardNumber == null)
        return false;

    this.cardNumber = this.removeBlanks();

    if(!this.checkLength())
        return false;

    if(!this.hasOnlyNumbers())
        return false;

    return true;
}

CreditCard.prototype.removeBlanks = function () {
    return this.cardNumber.replace(/\s+/g,'');
}

CreditCard.prototype.checkLength = function() {
    return this.cardNumber.length === 16;
}

CreditCard.prototype.hasOnlyNumbers = function() {
    return this.cardNumber.match(/[0-9]+/);
}
