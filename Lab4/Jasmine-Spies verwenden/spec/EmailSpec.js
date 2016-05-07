/**
 * Created by Nicolas on 04.03.2016.
 */
describe("Email", function() {
    var email;
    var server;

    beforeEach(function() {
        //email = new Email();
        server=new Server("127.0.0.1");
    });

    it("Should be able to compose an email", function() {
        email=new Email("lafo@zhaw.ch","almynic1@students.zhaw.ch","testsubject","Hi there!");
        expect(email.getTo()).toEqual("lafo@zhaw.ch");
        expect(email.getFrom()).toEqual("almynic1@students.zhaw.ch");
        expect(email.getSubject()).toEqual("testsubject");
        expect(email.getBody()).toEqual("Hi there!");
    });

    it("Should deliver an email, when To is not empty", function() {
        email=new Email("lafo@zhaw.ch","almynic1@students.zhaw.ch","testsubject","Hi there!");
        spyOn(server, 'sendMail');
        email.deliver(server);
        expect(server.sendMail).toHaveBeenCalledWith(email);
    });

    it("Should not deliver an email, when To is empty", function() {
        email=new Email("","almynic1@students.zhaw.ch","testsubject","Hi there!");
        spyOn(server, 'sendMail');
        email.deliver(server);
        expect(server.sendMail).not.toHaveBeenCalledWith(email);
    });
});
