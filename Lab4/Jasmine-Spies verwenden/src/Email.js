/**
 * Created by Nicolas on 04.03.2016.
 */

var Email = function(to,from,subject,body) {
    this.to = to;
    this.from = from;
    this.subject = subject;
    this.body = body;
}

Email.prototype.getTo = function () {
    return this.to;
}

Email.prototype.getFrom = function () {
    return this.from;
}

Email.prototype.getSubject = function () {
    return this.subject;
}

Email.prototype.getBody = function () {
    return this.body;
}

Email.prototype.deliver = function(server){
    if(this.getTo().length>0){
        server.sendMail(this);
    }
}