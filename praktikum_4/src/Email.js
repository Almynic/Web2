function Email(to, from, subject, body) {
    this.to = to;
    this.from = from;
    this.subject = subject;
    this.body = body;
}

Email.prototype.deliver = function(server) {
    if (this.to.length > 0) {
        server.sendEmail(this);
    }
}
