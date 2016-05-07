describe("Email Checks", function() {
  var email;
  var server;

  beforeEach(function() {
    email = new Email("christian.sandrini@me.com", "test@mail.com", "subject", "message");
    server = new Server("smtp.superdomain.com",25);
  });

  it("Should have a 'to' specified", function () {
      expect(email.to).toMatch("christian.sandrini@me.com");
  });

  it("Should have a 'from' specified", function () {
      expect(email.from).toMatch("test@mail.com");
  });

  it("Should have a 'subject' specified", function () {
      expect(email.subject).toMatch("subject");
  });

  it("Should have a 'message' specified", function () {
      expect(email.body).toMatch("message");
  });


  it("Should send sendEmail", function () {
      spyOn(server, "sendEmail");
      email.deliver(server);
      expect(server.sendEmail).toHaveBeenCalled();
  });

  it("Should not send email when 'to' is empty", function () {
      spyOn(server, "sendEmail");
      email.to = "";
      email.deliver(server);
      expect(server.sendEmail).not.toHaveBeenCalled();
  });

  describe("Server Checks", function() {
    it("Should have address", function() {
       expect(server.address).toMatch("smtp.superdomain.com"); 
    });

    it("Should have port", function() {
       expect(server.port).toMatch(25); 
    });
  });
}); 

